<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="content">
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
