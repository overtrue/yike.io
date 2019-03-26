<template>
  <div class="box">
    <div class="box-heading">
      <setting-icon class="mr-1 text-16"/>设置
    </div>
    <div class="nav flex-column nav-pills">
      <router-link :to="{ name: 'user.profile' }" class="nav-link">基本资料</router-link>
      <router-link :to="{ name: 'user.avatar' }" class="nav-link">修改头像</router-link>
      <router-link :to="{ name: 'user.account' }" class="nav-link">账号设置</router-link>
      <router-link :to="{ name: 'user.extends' }" class="nav-link">拓展资料</router-link>
      <!--<router-link :to="{ name: 'user.notification-setting' }" class="nav-link">通知设置</router-link>-->
      <!--<router-link :to="{ name: 'user.bindings' }" class="nav-link">账号绑定</router-link>-->
      <!--<router-link :to="{ name: 'user.blacklist' }" class="nav-link">黑名单</router-link>-->
    </div>
  </div>
</template>

<script>
import SettingIcon from '$icons/Settings'

export default {
  components: {
    SettingIcon
  }
}
</script>
