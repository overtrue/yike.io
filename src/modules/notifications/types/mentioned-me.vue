<template>
  <notification :notification="notification">
    <template slot="title">
      <span>在 <router-link :to="{name: 'threads.show', params: {id: notification.data.commentable_id}, hash: '#comment-' + notification.data.comment_id}">《{{ notification.data.commentable_title }}》</router-link> 的评论了中提到了您</span>
    </template>
    <div class="pt-2 pl-md-4">
      <router-link :to="{name: 'threads.show', params: {id: notification.data.thread_id}}" class="text-muted" v-html="notification.data.content">
      </router-link>
    </div>
  </notification>
</template>

<script>
import Notification from './notification'

export default {
  components: { Notification },
  props: {
    notification: {
      type: Object,
      default: null
    }
  }
}
</script>
