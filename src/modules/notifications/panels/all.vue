<template>
  <div class="box">
    <div class="box-heading text-right border-bottom pb-2">
      <button class="btn btn-sm btn-outline-secondary">全部已读</button>
    </div>
    <ul class="list-group list-group-flush" v-if="notifications.length > 0">
      <li class="list-group-item list-group-item-action border-top-0" v-for="(notification, index) in notifications" :key="notification.id" :class="{'text-gray-60': notification.read_at}" @click="markOneRead(notification, index)">
        <keep-alive>
          <component :is="notification.type.split('_').join('-')" :notification="notification"></component>
        </keep-alive>
      </li>
      <!--<li class="list-group-item list-group-item-action border-top-0 "><a href="#" class="text-blue">@jcc</a> 发布了新文章 <a href="#" class="text-blue">《如何高效开发小程序？》</a></li>-->
      <!--<li class="list-group-item list-group-item-action text-gray-60"><a href="#" class="text-blue">@jcc</a> 发布了新文章 <a href="#" class="text-blue">《如何高效开发小程序？》</a></li>-->
      <!--<li class="list-group-item list-group-item-action text-gray-60"><a href="#" class="text-blue">@jcc</a> 发布了新文章 <a href="#" class="text-blue">《如何高效开发小程序？》</a></li>-->
    </ul>
    <div class="text-center text-gray-50" v-else>
      无新通知
    </div>
  </div>
</template>

<script>
  import NewFollower from '../components/new-follower'
  import CommentMyThread from '../components/comment-my-thread'
  import LikedMyThread from '../components/liked-my-thread'
  import SubscribedMyThread from '../components/subscribed-my-thread'

  export default {
    components: { NewFollower, CommentMyThread, LikedMyThread, SubscribedMyThread },
    data() {
      return {
        notifications: []
      }
    },
    created() {
      this.getNotifications()
    },
    methods: {
      async getNotifications() {
        let notifications = await this.api('user/notifications').get()

        this.notifications = notifications.data
      }
    }
  }
</script>
