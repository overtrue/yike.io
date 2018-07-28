<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="content">
      <router-link :to="{name: 'users.show', params: {username: notification.data.username}}">
        <img class="rounded-circle mr-2" width="30" :src="notification.data.avatar">
        {{ notification.data.name }}
      </router-link>
      <span class="mx-1">关注了你</span>
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
