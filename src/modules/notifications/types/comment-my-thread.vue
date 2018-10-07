<template>
  <notification :notification="notification">
    <template slot="title">
      评论了你的文章
      <router-link :to="{name: 'threads.show', params: {id: notification.data.thread_id}, hash: '#comment-' + notification.data.comment_id}">
        《{{ notification.data.thread_title }}》
      </router-link>
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
