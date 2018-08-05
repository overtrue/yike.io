<template>
  <notification :notification="notification">
    <template slot="title">
      <span class="mx-1">评论了你的文章</span>
      <router-link :to="{name: 'threads.show', params: {id: notification.data.thread_id}, hash: '#comment-' + notification.data.comment_id}">
        《{{ notification.data.thread_title }}》
      </router-link>
    </template>
    <div class="py-2">
      <router-link :to="{name: 'threads.show', params: {id: notification.data.thread_id}}" class="text-muted">
        {{ notification.data.content }}
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
