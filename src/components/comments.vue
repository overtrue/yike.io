<template>
  <div class="comments" name="comments">
    <div class="py-2">
      <div class="text-16 text-gray-50">{{ comments.meta ? comments.meta.total : 0 }} 条评论</div>
    </div>
    <div class="box mb-3" v-if="currentUser.id">
      <template v-if="currentUser.has_activated">
        <div class="d-flex align-items-center">
          <img :src="currentUser.avatar" class="avatar-40" :alt="currentUser.username" />
          <div class="text-18 text-muted ml-2 w-100" @click="writing = true">撰写评论...</div>
        </div>
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

    <paginator :meta="comments.meta" @change="handlePaginate"></paginator>

    <div class="box box-flush">
      <div class="border-bottom box-body py-2" :class="{'animated flash': $route.hash === '#comment-' + item.id}" v-if="item.content && item.content.body" v-for="(item,index) in comments.data" :key="item.id" :id="'comment-' + item.id" :name="'comment-' + item.id">
        <user-media :user="item.user">
          <template slot="name-appends">
            <router-link tag="a" class="text-muted text-12 ml-1" :to="{name: 'users.show', params: {username: item.user.username}}">{{ item.user.username }}</router-link>
          </template>
          <small slot="description"><a :href="'#comment-' + item.id" class="text-gray-70">{{ item.created_at_timeago }}</a></small>
          <div class="text-16 text-gray-60 ml-auto d-flex align-items-center" slot="appends">
            <div class="mx-1 cursor-pointer d-flex" @click="vote('up', item, index)">
              <button class="btn btn-icon btn-light text-gray-60" v-if="!item.has_up_voted">
                <thumb-up-outline />
              </button>
              <button class="btn btn-icon btn-primary" v-else>
                <thumb-up />
              </button>
              <span class="ml-1 align-self-center">{{ item.up_voters }}</span>
            </div>
            <div class="mx-1 cursor-pointer d-flex" @click="vote('down', item, index)">
              <button class="btn btn-icon btn-light text-gray-60" v-if="!item.has_down_voted">
                <thumb-down-outline />
              </button>
              <button class="btn btn-icon btn-danger" v-else>
                <thumb-down />
              </button>
              <span class="ml-1 align-self-center">{{ item.down_voters }}</span>
            </div>
            <div class="mx-1 cursor-pointer" @click="reply(item)">
              <button class="btn btn-icon btn-light text-gray-60">
                <reply /></button>
            </div>
          </div>
        </user-media>
        <markdown-body class="comment-content text-gray-40 pt-2" v-model="item.content.body"></markdown-body>
      </div>
    </div>

    <paginator :meta="comments.meta" @change="handlePaginate"></paginator>

    <div class="card card-flush shadow-30 pop-comment-form" :class="{'show': writing}">
      <editor v-model="content" class="comment-editor" ref="editor" placeholder="请使用 markdown 语法" :options="editorOptions"></editor>
      <div class="p-2 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-end">
          <a href="https://guides.github.com/features/mastering-markdown/" class="text-gray-50" target="_blank"><span class="text-14 material-design-icon"><svg class="material-design-icon__svg" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                <path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path>
              </svg></span> Markdown 语法指南</a>
        </div>
        <div class="pop-form-btns">
          <button type="button" class="btn btn-sm btn-primary" :disabled="!formReady" @click="submit">提交</button>
          <button type="button" class="ml-2 btn btn-sm btn-secondary" @click="writing=false">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '$components/editor'
import Paginator from '$components/paginator'
import MarkdownBody from '$components/markdown-body'
import UserMedia from '$components/user-media'
import localforage from 'localforage'
import { mapGetters } from 'vuex'

import ThumbUp from '$icons/ThumbUp'
import Reply from '$icons/Reply'
import Markdown from '$icons/Markdown'
import ThumbDown from '$icons/ThumbDown'
import ThumbUpOutline from '$icons/ThumbUpOutline'
import ThumbDownOutline from '$icons/ThumbDownOutline'

export default {
  name: 'comments',
  components: {
    Editor,
    UserMedia,
    Markdown,
    MarkdownBody,
    Paginator,
    ThumbUp,
    Reply,
    ThumbDown,
    ThumbUpOutline,
    ThumbDownOutline
  },
  computed: {
    ...mapGetters(['currentUser']),
    formReady () {
      return this.content.length >= 3
    },
    cacheKey () {
      return (
        'comment.content_' +
        this.objectType.replace('\\\\', '_').toLowerCase() +
        '_' +
        this.objectId
      )
    }
  },
  props: {
    objectId: {
      type: Number,
      required: true
    },
    objectType: {
      type: String,
      default: 'App\\Thread'
    }
  },
  data () {
    return {
      writing: false,
      content: '',
      comments: [],
      editorOptions: {
        minLines: 3,
        maxLines: 20
      },
      query: Object.assign(
        {
          page: 1
        },
        this.$route.query
      )
    }
  },
  watch: {
    query: {
      deep: true,
      handler () {
        this.$router.replace({ query: this.query })
        this.loadComments()
      }
    },
    content () {
      localforage.setItem(this.cacheKey, this.content)
    },
    writing () {
      if (!this.writing) {
        this.content = ''
        localforage.removeItem(this.cacheKey)
        this.$refs['editor'].editor.setValue('')
      } else {
        let editor = this.$refs['editor'].editor
        editor.focus()
        setTimeout(() => {
          editor.setCursor(editor.lineCount(), 0)
        })
      }
    }
  },
  mounted () {
    this.loadComments().then(() => {
      if (window.location.hash.length > 0) {
        setTimeout(() => {
          window.location.replace(window.location.hash)
        })
      }
    })
    this.syncCachedContent()
  },
  methods: {
    handlePaginate (page) {
      this.query.page = page
    },
    vote (type = 'up', item, index) {
      if (!this.$user().id) {
        return this.$router.push({ name: 'auth.login' })
      }

      let reverse = type == 'up' ? 'down' : 'up'

      if (item[`has_${type}_voted`]) {
        this.$http.post(`comments/${item.id}/cancel-vote`)

        this.comments.data[index][`${type}_voters`]--
        this.comments.data[index][`has_${type}_voted`] = false
      } else {
        this.$http.post(`comments/${item.id}/${type}-vote`)

        if (item[`has_${reverse}_voted`]) {
          this.comments.data[index][`${reverse}_voters`]--
          this.comments.data[index][`has_${reverse}_voted`] = false
        }
        this.comments.data[index][`${type}_voters`]++
        this.comments.data[index][`has_${type}_voted`] = true
      }
    },
    reply (item) {
      if (!this.$user().id) {
        return this.$router.push({ name: 'auth.login' })
      }
      this.content = `@${item.user.username} `
      this.writing = true
      window.scrollTo(0, document.querySelector('[name="comments"]').offsetTop)
    },
    submit () {
      this.$http
        .post('comments', {
          commentable_type: this.objectType,
          commentable_id: this.objectId,
          content: {
            markdown: this.content,
            type: 'markdown'
          }
        })
        .then(() => {
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
      return this.$http
        .get(
          `comments?commentable_type=${this.objectType}&commentable_id=${
            this.objectId
          }&page=${this.query.page}`
        )
        .then(comments => {
          this.comments = comments
          this.mapCommentsUserForMention(comments.data)
        })
    },
    mapCommentsUserForMention (comments) {
      comments.map(comment => {
        window.pageUsers.some(u => u.id === comment.user_id) ||
          window.pageUsers.push(comment.user)
      })
    }
  }
}
</script>

<style lang="scss">
.comments {
  .pop-comment-form {
    border: none;
    max-height: 0;

    &.show {
      max-height: 320px;
    }
  }
  .comment-editor .CodeMirror {
    height: auto;
    min-height: 100px;
    max-height: 180px;
  }
  .pop-comment-form {
    position: sticky;
    bottom: 55px;
    min-width: 500px;
    max-width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s;
  }

  .markdown-body.comment-content p:last-child {
    margin-bottom: 0;
  }
}
</style>
