<template>
  <notification :notification="notification">
    <template slot="title">赞了你的文章
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
