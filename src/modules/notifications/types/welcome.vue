<template>
  <notification :notification="notification">
    <template slot="title">欢迎加入一刻！</template>
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
