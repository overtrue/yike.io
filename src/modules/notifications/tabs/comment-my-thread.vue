<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="content">
      <router-link :to="{name: 'users.show', params: {username: notification.data.username}}">
        <img class="rounded-circle mr-2" width="30" :src="notification.data.avatar">
        {{ notification.data.name }}
      </router-link>
      <span class="mx-1">评论了你的文章</span>
      <router-link :to="{name: 'threads.show', params: {id: notification.data.thread_id}}">
        《{{ notification.data.thread_title }}》
      </router-link>
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
