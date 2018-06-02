<template>
  <div class="page-notification-show">
    <div class="row">
      <div class="col-md-3">
        <div class="box">
          <div class="box-heading">
            <bell-icon class="mr-1 text-16" />通知
          </div>
          <div class="nav flex-column nav-pills">
            <router-link :to="{ name: 'notifications.all' }" exact class="nav-link">全部 </router-link>
            <router-link :to="{ name: 'notifications.mention' }" exact class="nav-link">提及我的</router-link>
            <router-link :to="{ name: 'notifications.reply' }" exact class="nav-link">回复我的</router-link>
            <router-link :to="{ name: 'notifications.follower' }" exact class="nav-link">关注我的</router-link>
            <router-link :to="{ name: 'notifications.letter' }" exact class="nav-link">私信我的</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import BellIcon from '@icons/bell'

  export default {
    components: {BellIcon}
  }
</script>
