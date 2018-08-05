<template>
  <notification :notification="notification">
    <template slot="title">
      <span class="mx-1">欢迎加入一刻！</span>
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
