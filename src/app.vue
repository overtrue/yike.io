<template>
  <div id="app">
    <Navbar />
    <div class="alert alert-warning text-center m-0" role="alert" v-if="currentUser.id && !currentUser.has_activated">
      您的邮箱尚未验证，将影响你的正常使用。请先验证您的邮箱，如果未收到邮件，请点击<a href="javascript:void(0);" class="text-blue" @click="sendActiveMail">重新发送</a>！
    </div>
    <template v-if="$route.query['active-success']">
      <div class="alert alert-success text-center m-0" role="alert" v-if="$route.query['active-success'] == 'yes'">
        您的账号已激活！
      </div>
      <div class="alert alert-danger text-center m-0" role="alert" v-else>
        邮箱验证失败，请<a href="javascript:void(0);" class="text-blue" @click="sendActiveMail">重新发送验证邮件</a>！
      </div>
    </template>
    <div class="main-content" :class="{'container my-3': withContainer}">
      <router-view />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Navbar from '@components/navbar'

  export default {
    name: 'app',
    components: {
      Navbar,
    },
    computed: {
      ...mapGetters(['currentUser']),
      withContainer() {
        if (typeof this.$route.meta['container'] != 'undefined') {
          return !!this.$route.meta['container']
        }

        return true
      }
    },
    methods: {
      sendActiveMail() {
        this.api('user/send-active-mail').post().then((data) => {
          this.$message.success(data.message)
        })
      }
    }
  }
</script>
