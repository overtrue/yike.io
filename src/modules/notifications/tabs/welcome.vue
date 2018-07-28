<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="content">
      <img class="rounded-circle mr-2" width="30" src="/yike.svg">
      欢迎加入一刻社区~
    </div>
    <div class="date">{{ notification.created_at }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      notification: {
        type: Object,
        default: null
      }
    }
  }
</script>
