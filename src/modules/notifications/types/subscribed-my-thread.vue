<template>
  <notification :notification="notification">
    <template slot="title">
      <span class="mx-1">订阅了你的文章</span>
      <router-link :to="{name: 'threads.show', params: {id: notification.data.thread_id}}">
        《{{ notification.data.thread_title }}》
      </router-link>
    </template>
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
