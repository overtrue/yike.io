<template>
  <div class="d-flex justify-content-between align-items-top">
    <div class="content">
      <router-link :to="{name: 'users.show', params: {username: notification.data.username}}">
        <img class="rounded-circle mr-2" width="30" :src="notification.data.avatar">
        {{ notification.data.name }}
      </router-link>
      <div class="d-inline mx-1">
        <slot name="title">评论了你的文章</slot>
      </div>
      <slot></slot>
    </div>
    <small class="date text-muted text-mini">{{ notification.created_at }}</small>
  </div>
</template>

<script>
  export default {
    props: {
      notification: {
        type: Object,
        required: true
      }
    },
    name: 'notification'
  }
</script>

<style scoped>

</style>