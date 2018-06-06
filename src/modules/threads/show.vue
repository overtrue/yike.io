<template>
  <div class="page-threads-show" v-if="thread">
    <div class="row">
      <div class="col-md-9">
        <article class="box box-flush">
          <header class="thread-header box-body d-flex justify-content-between align-items-center">
            <user-media :user="thread.user">
              <small class="text-muted" slot="description">{{ thread.created_at_timeago }}</small>
            </user-media>
            <div class="thread-actions">
              <button type="button" class="btn btn-icon btn-ghost no-border text-20" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <more-icon></more-icon>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button" @click="$router.push({name:'threads.edit', params:{id: thread.id}})"><pencil-icon class="mr-1"></pencil-icon> 编辑</button>
                <button class="dropdown-item" type="button"><delete-icon class="mr-1"></delete-icon> 删除</button>
              </div>
            </div>
          </header>
          <div class="thread-content box-body mt-3 text-gray-40 text-16">
            <header><h2 class="mb-3 pb-2 border-bottom">{{ thread.title }}</h2></header>
            <section class="markdown-body" v-html="thread.content.body"></section>
          </div>
          <div class="thread-author-card border-top p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="user-info d-flex align-items-center">
                  <img :src="thread.user.avatar" alt="User avatar" class="avatar-60" />
                  <div class="p-2">
                    <h3 class="text-gray-50 text-14">{{ thread.user.name }}</h3>
                    <div class="text-12 text-muted">{{ thread.user.bio }}</div>
                  </div>
                </div>
                <div class="right-action">
                  <follow-btn></follow-btn>
                </div>
              </div>
          </div>
        </article>
        <div class="thread-comments mt-3">
          <comments object-type="App\Thread" :object-id="thread.id"></comments>
        </div>
      </div>
      <div class="col-md-3">
        <div class="box box-flush mb-2">
          <img src="https://source.unsplash.com/random/400x300" class="img-fluid" alt="" />

          <div class="text-center p-3">
            <div class="btn btn-primary">点击查看详情</div>
          </div>
        </div>
        <hot-tags></hot-tags>
      </div>
    </div>
  </div>
</template>

<script>
  import PencilIcon from "@icons/pencil"
  import DeleteIcon from "@icons/delete"
  import MoreIcon from "@icons/dots-horizontal"
  import UserMedia from "@components/user-media"
  import HotTags from "@components/hot-tags"
  import Comments from "@components/comments"
  import FollowBtn from "@components/follow-btn"
  import Prism from 'prismjs'

  export default {
    components: {FollowBtn, UserMedia, HotTags, MoreIcon, PencilIcon, DeleteIcon, Comments},
    data() {
      return {
        thread: null,
      }
    },
    methods: {
      loadThread() {
        this.api('threads').find(this.$route.params.id, ['user']).then(response => this.thread = response).then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              Prism.highlightAll()
            }, 300)
          })
        })
      }
    },
    mounted() {
      this.loadThread()

    }
  }
</script>
