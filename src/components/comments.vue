<template>
  <div class="comments">
    <div class="py-2">
      <div class="text-16 text-gray-50">{{ comments.length > 0 ? comments.meta.total : 0 }} 条评论</div>
    </div>
    <div class="box" v-if="currentUser.id">
      <div class="d-flex align-items-center">
        <img :src="currentUser.avatar" class="avatar-40" :alt="currentUser.username"/>
        <div class="text-18 text-muted ml-2 w-100" v-if="!writing" @click="writing = true">撰写评论...</div>
        <div class="text-16 text-muted ml-2" v-else>{{ currentUser.name }}</div>
      </div>
      <template v-if="writing">
        <editor v-model="content" :toolbar="false" editor-class="py-2" placeholder="同样支持 markdown 语法" :options="editorOptions"></editor>
        <div class="py-1">
          <button type="button" class="btn btn-primary" :disabled="!formReady" @click="submit">提交</button>
          <button type="button" class="ml-2 btn btn-secondary" @click="writing=false">取消</button>
        </div>
      </template>
    </div>
    <div v-else>
      <div class="box" v-if="currentUser">
        <div class="text-18 ml-2 text-center">
          您需要
          <router-link :to="{ name: 'auth.login' }" tag="a" class="text-blue">登录</router-link>
          或
          <router-link :to="{ name: 'auth.register' }" tag="a" class="text-blue">注册</router-link>
          才能发表评论
        </div>
      </div>
    </div>

    <paginator :meta="comments.meta"></paginator>

    <div class="box mb-3" v-for="item in comments.data">
      <user-media :user="item.user">
        <small class="text-muted" slot="description">{{ item.created_at_timeago }}</small>
      </user-media>
      <div class="comment-content markdown-body pt-2" v-html="item.content.body"></div>
    </div>

    <paginator :meta="comments.meta"></paginator>
  </div>
</template>

<script>
  import Editor from '@components/editor'
  import Paginator from '@components/paginator'
  import UserMedia from '@components/user-media'
  import localforage from 'localforage'
  import { mapGetters } from 'vuex'

  export default {
    name: 'comments',
    components: {Editor, UserMedia, Paginator},
    computed: {
      ...mapGetters(['currentUser']),
      formReady () {
        return this.content.length >= 3
      },
      cacheKey () {
        return 'comment.content_' + this.objectType.replace('\\\\', '_').toLowerCase() + '_' + this.objectId
      }
    },
    props: {
      objectId: {
        type: Number,
        required: true
      },
      objectType: {
        type: String,
        default: 'App\Thread',
      },
    },
    data () {
      return {
        writing: false,
        content: '',
        comments: [],
        editorOptions: {
          minLines: 3,
          maxLines: 20
        }
      }
    },
    watch: {
      content () {
        localforage.setItem(this.cacheKey, this.content)
      }
    },
    mounted () {
      this.loadComments()
      this.syncCachedContent()
    },
    methods: {
      submit () {
        this.api('comments').post({
          commentable_type: this.objectType,
          commentable_id: this.objectId,
          content: {
            markdown: this.content,
            type: 'markdown',
          }
        }).then(() => {
          this.content = ''
          this.writing = false
          this.$message.success('评论成功！')
          this.loadComments()
        })
      },
      syncCachedContent () {
        localforage.getItem(this.cacheKey, (err, content) => {
          if (!err && content && content.length > 0) {
            this.writing = true
            this.content = content
          }
        })
      },
      loadComments () {
        this.api('comments').get(`?commentable_type=${this.objectType}&commentable_id=${this.objectId}`).then(comments => this.comments = comments)
      }
    }
  }
</script>

<style scoped>

</style>
