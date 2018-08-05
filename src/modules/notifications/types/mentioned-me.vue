<template>
  <notification :notification="notification">
    <template slot="title">
      <span class="mx-1">在 <router-link :to="{name: 'threads.show', params: {id: notification.data.thread_id}}">《{{ notification.data.contentable_title }}》</router-link> 的评论了中提到了您</span>
     <div class="py-2 text-muted">
       <router-link :to="{name: 'threads.show', params: {id: notification.data.thread_id}}">
         {{ notification.data.content }}
       </router-link>
     </div>
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
