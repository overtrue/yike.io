<template>
  <div id="wrapper" :class="{toggled: isToggled}">
    <sidebar></sidebar>
    <div id="page-content-wrapper" class="w-100 position-absolute">
      <navbar v-if="shouldShowNavbar" />
      <div class="alert alert-warning text-center m-0" role="alert" v-if="currentUser.id && !currentUser.has_activated">
        您的邮箱尚未验证，将影响你的正常使用。请先验证您的邮箱，如果未收到邮件，请点击<a href="javascript:void(0);" class="text-blue" @click="sendActiveMail">重新发送</a>！
      </div>
      <template v-if="$route.query['active-success'] && $route.query.type">
        <template v-if="$route.query.type == 'register'">
          <div class="alert alert-success text-center m-0" role="alert" v-if="checkParams">
            您的账号已激活！
          </div>
          <div class="alert alert-danger text-center m-0" role="alert" v-else>
            邮箱验证失败，请<a href="javascript:void(0);" class="text-blue" @click="sendActiveMail">重新发送验证邮件</a>！
          </div>
        </template>
        <template v-if="$route.query.type == 'email'">
          <div class="alert alert-success text-center m-0" role="alert" v-if="checkParams">
            账号已修改邮箱！
          </div>
          <div class="alert alert-danger text-center m-0" role="alert" v-else>
            验证失败！请<router-link class="text-blue" :to="{name: 'user.account', hash: '#edit-email'}">重新提交验证新邮箱</router-link>！
          </div>
        </template>
      </template>
      <div class="main-content" :class="{'container my-3': withContainer}">
        <router-view />
      </div>
    </div>
    <div class="position-absolute w-100 h-100 bg-white opacity-70" v-if="isToggled" @click="toggle"></div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Navbar from '@components/navbar'
  import Sidebar from '@components/sidebar'

  export default {
    name: 'app',
    components: {
      Navbar,
      Sidebar,
    },
    computed: {
      ...mapGetters(['currentUser', 'isToggled']),
      checkParams() {
        return this.$route.query['active-success'] == 'yes'
      },
      shouldShowNavbar() {
        return typeof this.$route.meta['navbar'] == 'undefined' || !!this.$route.meta['navbar']
      },
      withContainer() {
        if (typeof this.$route.meta['container'] != 'undefined') {
          return !!this.$route.meta['container']
        }

        return true
      }
    },
    methods: {
      ...mapActions(['toggle']),
      sendActiveMail() {
        this.api('user/send-active-mail').post().then((data) => {
          this.$message.success(data.message)
        })
      }
    }
  }
</script>
