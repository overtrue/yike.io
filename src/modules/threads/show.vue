<template>
  <div class="page-threads-show pb-4" v-if="thread">
    <div class="row">
      <div class="col-md-9">
        <article class="box box-flush">
          <header class="thread-header box-body d-flex justify-content-between align-items-center">
            <user-media :user="thread.user">
              <small class="text-muted" slot="description">发布于 {{ thread.created_at_timeago }}</small>
            </user-media>
          </header>
          <div class="thread-content box-body text-gray-40 text-16">
            <header><h2 class="mb-3 pb-2 border-bottom">{{ thread.title }}</h2></header>
            <markdown-body v-model="thread.content.body"></markdown-body>
          </div>
          <div class="thread-stats-bar bg-white border-top py-1">
            <div class="container">
              <ul class="nav">
                <li class="nav-item">
                  <like-btn relation="thread" :item="thread"></like-btn>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-gray-50 btn btn-sm btn-link" href="#comments"><comment-icon></comment-icon> {{ thread.cache.comments_count }} 条评论</a>
                </li>
                <li class="nav-item">
                  <subscribe-btn relation="thread" :item="thread" />
                </li>
                <li class="nav-item">
                  <a class="nav-link text-gray-50 btn btn-sm btn-link" href="#"><share-icon></share-icon> 分享</a>
                </li>
                <li class="nav-item">
                  <button type="button" class="nav-link text-gray-50 btn btn-sm btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <more-icon></more-icon>
                  </button>
                  <div class="dropdown-menu">
                    <template v-if="canEdit">
                      <button class="dropdown-item" type="button" @click="$router.push({name:'threads.edit', params:{id: thread.id}})"><pencil-icon class="mr-1"></pencil-icon> 编辑</button>
                      <button class="dropdown-item" type="button"><delete-icon class="mr-1"></delete-icon> 删除</button>
                    </template>
                    <button class="dropdown-item cursor-pointer" type="button" @click="showReportForm = true"><alert-box-icon class="mr-1"></alert-box-icon> 举报</button>
                  </div>
                  <report-form :visible="showReportForm" @close="showReportForm = false"></report-form>
                </li>
              </ul>
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
                <follow-btn :item="thread.user"></follow-btn>
              </div>
            </div>
          </div>
        </article>
        <div class="thread-comments mt-3">
          <comments object-type="App\Thread" :object-id="thread.id" @created="loadThread"></comments>
        </div>
        <div class="thread-toolbar" v-show="showToolbar">
          <animate-action :item="thread"/>
          <share-action class="mt-3" :item="thread"/>
        </div>
      </div>
      <div class="col-md-3 position-relative">
        <user-profile-card class="user-profile-card" :user="thread.user"></user-profile-card>
        <hot-tags class="mt-2"></hot-tags>
      </div>
    </div>
  </div>
</template>

<script>
  import PencilIcon from "@icons/pencil"
  import DeleteIcon from "@icons/delete"
  import AlertBoxIcon from "@icons/alert-box"
  import UserMedia from "@components/user-media"
  import HotTags from "@components/hot-tags"
  import Comments from "@components/comments"
  import StarIcon from '@icons/star'
  import MoreIcon from '@icons/dots-horizontal'
  import ShareIcon from '@icons/share'
  import SubscribeBtn from "@components/buttons/subscribe-btn"
  import FollowBtn from '@components/buttons/follow-btn'
  import LikeBtn from '@components/buttons/like-btn'
  import MarkdownBody from '@components/markdown-body'
  import ReportForm from './report-form'
  import AnimateAction from '@components/buttons/animate-action'
  import ShareAction from '@components/share-action'
  import UserProfileCard from '@components/user-profile-card'

  import CommentIcon from "@icons/comment"
  import ViewIcon from "@icons/eye"

  export default {
    components: {
      LikeBtn,
      AnimateAction,
      ShareAction,
      ReportForm,
      SubscribeBtn,
      CommentIcon,
      ViewIcon,
      FollowBtn,
      UserMedia,
      HotTags,
      PencilIcon,
      AlertBoxIcon,
      DeleteIcon,
      ShareIcon,
      StarIcon,
      MoreIcon,
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
        this.api('threads').find(this.$route.params.id, ['user']).then(response => this.thread = response).then(this.registerEventListener)
      },
      registerEventListener() {
        window.addEventListener('scroll', () => {
          let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
          this.showToolbar = top > 200
        })
      }
    },
    mounted() {
      this.loadThread()
    },
  }
</script>

<style lang="scss">
  .thread-toolbar {
    position: fixed;
    top: 150px;
    margin-left: -80px;
  }
  .thread-stats-bar {
    position: sticky;
    bottom: 0;
    width: 100%;
    left: 0;
    .material-design-icon {
      font-size: 1.2em;
      bottom: -0.06em;
    }
  }
  .user-profile-card {
    position: sticky;
    top: 20px;
  }
</style>
