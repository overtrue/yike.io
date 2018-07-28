<template>
  <div class="page-notification-show">
    <div class="row">
      <div class="col-md-3">
        <div class="box">
          <div class="box-heading">
            <bell-icon class="mr-1 text-16" />通知
          </div>
          <div class="nav flex-column nav-pills">
            <a href="javascript:void(0);" class="nav-link" :class="{active: currentTab == ''}" @click="currentTab = ''">全部 </a>
            <a href="javascript:void(0);" class="nav-link" :class="{active: currentTab == 'follow'}" @click="currentTab = 'follow'">关注</a>
            <a href="javascript:void(0);" class="nav-link" :class="{active: currentTab == 'comment'}" @click="currentTab = 'comment'">评论</a>
            <a href="javascript:void(0);" class="nav-link" :class="{active: currentTab == 'subscribe'}" @click="currentTab = 'subscribe'">订阅</a>
            <a href="javascript:void(0);" class="nav-link" :class="{active: currentTab == 'like'}" @click="currentTab = 'like'">点赞</a>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="box">
          <div class="box-heading text-right border-bottom pb-2" v-if="false">
            <button class="btn btn-sm btn-secondary"><check-icon class="pr-2" />标记全部为已读</button>
          </div>
          <ul class="list-group list-group-flush" v-if="notifications.length > 0">
            <li class="list-group-item list-group-item-action border-top-0" v-for="notification in notifications" :key="notification.id" :class="{'bg-gray-98': notification.read_at == null}">
              <keep-alive>
                <component :is="notification.type.split('_').join('-')" :notification="notification"></component>
              </keep-alive>
            </li>
          </ul>
          <div class="text-center text-gray-50" v-else>
            <empty-state message="没有新的消息哦~">
              <template slot="icon"><inbox-icon></inbox-icon></template>
            </empty-state>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BellIcon from '@icons/bell'
  import InboxIcon from '@icons/inbox'
  import CheckIcon from '@icons/check'
  import EmptyState from '@components/empty-state'

  import NewFollower from './tabs/new-follower'
  import CommentMyThread from './tabs/comment-my-thread'
  import LikedMyThread from './tabs/liked-my-thread'
  import SubscribedMyThread from './tabs/subscribed-my-thread'
  import Welcome from './tabs/welcome'

  export default {
    components: {EmptyState, BellIcon, InboxIcon, CheckIcon, NewFollower, CommentMyThread, LikedMyThread, SubscribedMyThread, Welcome},
    data() {
      return {
        currentTab: '',
        notifications: []
      }
    },
    watch: {
      currentTab() {
        this.loadNotifications(1)
      }
    },
    created() {
      this.loadNotifications()
    },
    methods: {
      loadNotifications(page = 1) {
        this.$router.push({name: 'notifications.show', query: {tab: this.currentTab}})

        this.api('user/notifications')
          .get(`?tab=${this.currentTab}&page=${page}`)
          .then(notifications => this.notifications = notifications.data)
      }
    }
  }
</script>
