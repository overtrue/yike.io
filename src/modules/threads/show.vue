<template>
  <div class="page-threads-show" v-if="thread">
    <div class="row">
      <div class="col-md-9">
        <article class="box box-flush">
          <header class="thread-header box-body d-flex justify-content-between align-items-center">
            <user-media :user="thread.user">
              <small class="text-muted" slot="description">发布于 {{ thread.created_at_timeago }}</small>
            </user-media>
            <div class="thread-actions">
              <button type="button" class="btn btn-icon btn-ghost no-border text-20" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <more-icon></more-icon>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <template v-if="canEdit">
                  <button class="dropdown-item" type="button" @click="$router.push({name:'threads.edit', params:{id: thread.id}})"><pencil-icon class="mr-1"></pencil-icon> 编辑</button>
                  <button class="dropdown-item" type="button"><delete-icon class="mr-1"></delete-icon> 删除</button>
                </template>
                <button class="dropdown-item cursor-pointer" type="button" @click="showReportForm = true"><alert-box-icon class="mr-1"></alert-box-icon> 举报</button>
              </div>
              <report-form :visible="showReportForm" @close="showReportForm = false"></report-form>
            </div>
          </header>
          <div class="thread-content box-body text-gray-40 text-16">
            <header><h2 class="mb-3 pb-2 border-bottom">{{ thread.title }}</h2></header>
            <markdown-body v-model="thread.content.body"></markdown-body>
          </div>
          <div class="thread-statistics-card border-top p-2">
            <div class="text-gray-60 d-flex text-16 align-items-center">
              <like-btn class="p-1" :item="thread"></like-btn>
              <a class="p-1"><comment-icon></comment-icon> {{ thread.cache.comments_count }}</a>
              <a class="p-1"><view-icon></view-icon> {{ thread.cache.views_count }}</a>
              <subscribe-btn class="p-1 ml-auto" type="threads" :item="thread" />
            </div>
          </div>
          <div class="thread-author-card border-top p-3">
            <div class="d-flex align-items-center justify-content-between">
              <div class="user-info d-flex align-items-center">
                <router-link :to="{name: 'users.show', params: {username: thread.user.username}}"><img :src="thread.user.avatar" alt="User avatar" class="avatar-60" /></router-link>
                <div class="p-2">
                  <router-link :to="{name: 'users.show', params: {username: thread.user.username}}"><h3 class="text-gray-50 text-14">{{ thread.user.name }}</h3></router-link>
                  <div class="text-12 text-muted">{{ thread.user.bio }}</div>
                </div>
              </div>
              <div class="right-action">
                <follow-btn :user="thread.user"></follow-btn>
              </div>
            </div>
          </div>
        </article>
        <div class="thread-comments mt-3">
          <comments object-type="App\Thread" :object-id="thread.id" @created="loadThread"></comments>
        </div>
      </div>
      <div class="col-md-3">
        <user-profile-card :user="thread.user"></user-profile-card>
        <hot-tags class="mt-2"></hot-tags>
      </div>
    </div>
    <div class="position-fixed toolbar" v-show="showToolbar">
      <animate-action :item="thread"/>
      <share-action class="mt-3" :item="thread"/>
    </div>
  </div>
</template>

<script>
  import PencilIcon from "@icons/pencil"
  import DeleteIcon from "@icons/delete"
  import AlertBoxIcon from "@icons/alert-box"
  import MoreIcon from "@icons/dots-horizontal"
  import UserMedia from "@components/user-media"
  import HotTags from "@components/hot-tags"
  import Comments from "@components/comments"
  import LikeBtn from "@components/like-btn"
  import SubscribeBtn from "@components/subscribe-btn"
  import FollowBtn from '@components/follow-btn'
  import MarkdownBody from '@components/markdown-body'
  import ReportForm from './report-form'
  import AnimateAction from '@components/animate-action'
  import ShareAction from '@components/share-action'
  import UserProfileCard from '@components/user-profile-card'

  import CommentIcon from "@icons/comment"
  import ViewIcon from "@icons/eye"

  export default {
    components: {
      AnimateAction,
      ShareAction,
      ReportForm,
      LikeBtn,
      SubscribeBtn,
      CommentIcon,
      ViewIcon,
      FollowBtn,
      UserMedia,
      HotTags,
      MoreIcon,
      PencilIcon,
      AlertBoxIcon,
      DeleteIcon,
      MarkdownBody,
      Comments,
      UserProfileCard,
    },
    data() {
      return {
        thread: null,
        showReportForm: false,
        showToolbar: false,
      }
    },
    computed: {
      canEdit() {
        return this.thread.user_id == this.$user().id || this.$user().is_admin;
      }
    },
    beforeRouteUpdate(to, from, next) {
      if (to.params.id != from.params.id) {
        this.loadThread()
      }

      next()
    },
    methods: {
      loadThread() {
        this.api('threads').find(this.$route.params.id, ['user']).then(response => this.thread = response)
      }
    },
    mounted() {
      this.loadThread()

      const vm = this

      window.addEventListener('scroll', function () {
        let top = document.body.scrollTop + document.documentElement.scrollTop

        vm.showToolbar = top > 200
      })
    },
  }
</script>

<style lang="scss">
  .toolbar {
    top: 150px;
    left: 60px;
  }
</style>
