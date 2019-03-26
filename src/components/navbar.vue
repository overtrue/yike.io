<template>
  <div class="bg-white bg-white shadow-6">
    <div class="container">
      <nav class="navbar px-0 py-1 text-14 navbar-expand-lg navbar-light">
        <router-link :to="{ name: 'home' }" class="navbar-brand text-22 d-flex align-items-center antialiased">
          <img class="mr-2 avatar-40" src="/yike.svg" alt="一刻社区">一刻<span class="text-14 text-muted ml-1">| 高品质微信开发者社区</span><sup class="ml-1 text-10 text-danger"> Beta</sup> </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav flex-row align-items-center justify-content-center py-sm-2 py-md-0 mx-auto">
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
              <a class="nav-link" href="https://easywechat.com?utm_source=yike.io">SDK</a>
            </li>
            <li class="nav-item">
              <nav-search />
            </li>
          </ul>

          <ul class="navbar-nav ml-md-auto flex-row d-md-flex align-items-center justify-content-around">
            <template v-if="isLogged">
              <li class="nav-item">
                <router-link :to="{ name: 'threads.create' }" exact class="text-20 btn btn-icon btn-transparent btn-light">
                  <plus-icon></plus-icon>
                </router-link>
              </li>
              <li class="nav-item nav-item-icon">
                <router-link :to="{ name: 'notifications.show' }" class="text-20 btn btn-icon btn-transparent btn-light">
                  <bell-icon />
                </router-link>
              </li>
              <li class="nav-item">
                <div class="btn-group">
                  <a href="#" class="dropdown-toggle cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img :src="currentUser.avatar" class="avatar-40 mr-2" />
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
                      退出登录
                    </a>
                  </div>
                </div>
              </li>
            </template>
            <template v-else>
              <router-link :to="{ name: 'auth.login' }" tag="li" class="nav-item"><a href="javascript:void(0);">登录</a></router-link>
              <router-link :to="{ name: 'auth.register' }" tag="li" class="nav-item"><a href="javascript:void(0);">注册</a></router-link>
            </template>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import MenuIcon from '$icons/Menu'
import BellIcon from '$icons/Bell'
import PlusIcon from '$icons/Plus'
import MagnifyIcon from '$icons/Magnify'
import AccountIcon from '$icons/Account'
import AccountEditIcon from '$icons/AccountEdit'
import LogoutVariant from '$icons/LogoutVariant'
import NavSearch from './nav-search'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    MenuIcon,
    BellIcon,
    PlusIcon,
    AccountIcon,
    MagnifyIcon,
    AccountEditIcon,
    LogoutVariant,
    NavSearch
  },
  computed: {
    ...mapGetters(['isLogged', 'currentUser'])
  },
  methods: {
    ...mapActions(['logout', 'toggle'])
  }
}
</script>

<style lang="scss">
.navbar-nav .nav-item {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
