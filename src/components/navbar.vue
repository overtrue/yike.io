<template>
  <nav class="navbar text-14 navbar-expand-lg bg-white navbar-light shadow-6 d-flex justify-content-between align-items-center">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav d-flex align-items-center justify-content-between">
      <li class="nav-item nav-item-icon">
        <a href="#" class="nav-link">
          <menu-icon decorative/>
        </a>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'home' }" class="navbar-brand mx-3 text-22">一刻</router-link>
      </li>
      <li class="nav-item">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="搜索" aria-label="Search">
        </form>
      </li>
    </ul>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <router-link :to="{ name: 'home' }" exact tag="li" class="nav-item">
          <a href="javascript:void(0);" class="nav-link">首页</a>
        </router-link>
        <!--<li class="nav-item">-->
          <!--<a class="nav-link" href="#">讨论</a>-->
        <!--</li>-->
        <!--<li class="nav-item">-->
          <!--<a class="nav-link" href="#">问答</a>-->
        <!--</li>-->
        <router-link :to="{ name: 'nodes.show' }" exact tag="li" class="nav-item">
          <a href="javascript:void(0);" class="nav-link">节点</a>
        </router-link>
        <li class="nav-item">
          <a class="nav-link" href="https://easywechat.com">SDK</a>
        </li>
      </ul>
    </div>

    <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex align-items-center justify-content-around">
      <template v-if="isLogged">
        <li class="nav-item">
          <router-link :to="{ name: 'threads.create' }" exact class="text-20 btn btn-icon btn-light">
            <plus-icon></plus-icon>
          </router-link>
        </li>
        <li class="nav-item nav-item-icon">
          <router-link :to="{ name: 'notifications.show' }" class="text-20 btn btn-icon btn-light">
            <bell-icon/>
          </router-link>
        </li>
        <li class="nav-item mr-md-2">
          <div class="btn-group">
            <a href="#" class="dropdown-toggle"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img :src="currentUser.avatar" class="avatar-40 mr-2"/>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <div class="dropdown-item">
                <router-link :to="{ name: 'users.show', params: { username: currentUser.username } }">
                  <div class="text-16 text-gray-30">{{ currentUser.name }}</div>
                  <div>@{{ currentUser.username }}</div>
                </router-link>
              </div>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" :to="{ name: 'users.show', params: { username: currentUser.username } }" exact>
                <account-icon class="mr-1"></account-icon>
                个人中心
              </router-link>
              <router-link class="dropdown-item" :to="{ name: 'user.profile' }" exact>
                <account-edit-icon class="mr-1"></account-edit-icon>
                编辑资料
              </router-link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="javascript:void(0);" @click="logout">
                <logout-variant class="mr-1"></logout-variant>
                退出登录</a>
            </div>
          </div>
        </li>
      </template>
      <template v-else>
        <router-link :to="{ name: 'auth.login' }" tag="li" class="nav-item"><a href="javascript:void(0);">登录</a></router-link>
        <router-link :to="{ name: 'auth.register' }" tag="li" class="nav-item"><a href="javascript:void(0);">注册</a></router-link>
      </template>
    </ul>

  </nav>
</template>

<script>
  import MenuIcon from '@icons/menu'
  import BellIcon from '@icons/bell'
  import PlusIcon from '@icons/plus'
  import MagnifyIcon from '@icons/magnify'
  import AccountIcon from '@icons/account'
  import AccountEditIcon from '@icons/account-edit'
  import LogoutVariant from '@icons/logout-variant'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      MenuIcon,
      BellIcon,
      PlusIcon,
      AccountIcon,
      MagnifyIcon,
      AccountEditIcon,
      LogoutVariant
    },
    computed: {
      ...mapGetters(['isLogged', 'currentUser'])
    },
    methods: {
      ...mapActions(['logout'])
    }
  }
</script>

<style lang="scss">
  .navbar {
    height: 60px;
  }

  .dropdown-toggle {
    cursor: pointer;
  }

  .navbar-nav .nav-item {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
