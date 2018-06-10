<template>
  <div class="comments">
    <a name="comments"></a>
    <div class="py-2">
      <div class="text-16 text-gray-50">{{ comments.meta ? comments.meta.total : 0 }} 条评论</div>
    </div>
    <div class="box mb-3" v-if="currentUser.id">
      <template v-if="currentUser.has_activated">
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
      </template>
      <template v-else>
        <div class="text-18 ml-2 text-muted text-center">您需要激活账户才能评论~</div>
      </template>
    </div>
    <div v-else>
      <div class="box mb-3" v-if="currentUser">
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

    <div class="box mb-3" v-for="(item,index) in comments.data" :key="item.id">
      <a :name="'comment-' + item.id"></a>
      <user-media :user="item.user">
        <template slot="name-appends"><router-link tag="a" class="text-muted text-12 ml-1" :to="{name: 'users.show', params: {username: item.user.username}}">{{ item.user.username }}</router-link></template>
        <small class="text-muted" slot="description">{{ item.created_at_timeago }}</small>
        <div class="text-16 text-gray-60 ml-auto" slot="appends">
          <span class="mx-1 cursor-pointer" @click="vote('up', item, index)">
            <thumb-up-outline v-if="!item.has_up_voted" />
            <thumb-up class="text-primary" v-else />
            {{ item.up_voters }}
          </span>
          <span class="mx-1 cursor-pointer" @click="vote('down', item, index)">
            <thumb-down-outline v-if="!item.has_down_voted" />
            <thumb-down class="text-danger" v-else />
            {{ item.down_voters }}
          </span>
          <span class="mx-1 cursor-pointer" @click="reply(item)">
            <reply />
          </span>
        </div>
      </user-media>
      <markdown-body class="comment-content pt-2" v-model="item.content.body"></markdown-body>
    </div>

    <paginator :meta="comments.meta"></paginator>
  </div>
</template>

<script>
  import Editor from '@components/editor'
  import Paginator from '@components/paginator'
  import MarkdownBody from '@components/markdown-body'
  import UserMedia from '@components/user-media'
  import localforage from 'localforage'
  import { mapGetters } from 'vuex'

  import ThumbUp from '@icons/thumb-up'
  import Reply from '@icons/reply'
  import ThumbDown from '@icons/thumb-down'
  import ThumbUpOutline from '@icons/thumb-up-outline'
  import ThumbDownOutline from '@icons/thumb-down-outline'

  export default {
    name: 'comments',
    components: {Editor, UserMedia, MarkdownBody, Paginator, ThumbUp, Reply, ThumbDown, ThumbUpOutline, ThumbDownOutline},
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
        default: 'App\\Thread',
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
      vote(type = 'up', item, index) {
        if (!this.$user().id) {
          return this.$router.push({name: 'auth.login'})
        }

        let reverse = type == 'up' ? 'down' : 'up'

        if (item[`has_${type}_voted`]) {
          this.api(`comments/${item.id}/cancel-vote`).post()

          this.comments.data[index][`${type}_voters`]--
          this.comments.data[index][`has_${type}_voted`] = false
        } else {
          this.api(`comments/${item.id}/${type}-vote`).post()

          if (item[`has_${reverse}_voted`]) {
            this.comments.data[index][`${reverse}_voters`]--
            this.comments.data[index][`has_${reverse}_voted`] = false
          }
          this.comments.data[index][`${type}_voters`]++
          this.comments.data[index][`has_${type}_voted`] = true
        }
      },
      reply(item) {
        this.content = `@${item.user.username} `
        this.writing = true
        window.scrollTo(0, document.querySelector('[name="comments"]').offsetTop)
      },
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
          this.$emit('created')
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
