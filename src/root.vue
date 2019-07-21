<template>
  <div
    :class="{toggled: isToggled}"
    class="h-100"
    id="wrapper"
  >
    <div
      class="w-100 position-absolute"
      id="page-content-wrapper"
    >
      <navbar v-if="shouldShowNavbar" />
      <div
        class="alert alert-warning text-center m-0"
        role="alert"
        v-if="currentUser && currentUser.id && !currentUser.has_activated"
      >
        您的邮箱尚未验证，将影响你的正常使用。请先验证您的邮箱，如果未收到邮件，请点击
        <a
          @click="sendActiveMail"
          class="text-blue"
          href="javascript:void(0)"
        >重新发送</a>！
      </div>
      <template v-if="$route.query['active-success'] && $route.query.type">
        <template v-if="$route.query.type == 'register'">
          <div
            class="alert alert-success text-center m-0"
            role="alert"
            v-if="checkParams"
          >您的账号已激活！</div>
          <div
            class="alert alert-danger text-center m-0"
            role="alert"
            v-else
          >
            邮箱验证失败，请
            <a
              @click="sendActiveMail"
              class="text-blue"
              href="javascript:void(0)"
            >重新发送验证邮件</a>！
          </div>
        </template>
        <template v-if="$route.query.type == 'email'">
          <div
            class="alert alert-success text-center m-0"
            role="alert"
            v-if="checkParams"
          >账号已修改邮箱！</div>
          <div
            class="alert alert-danger text-center m-0"
            role="alert"
            v-else
          >
            验证失败！请
            <router-link
              :to="{name: 'user.account', hash: '#edit-email'}"
              class="text-blue"
            >重新提交验证新邮箱</router-link>！
          </div>
        </template>
      </template>
      <div
        :class="{'container my-3': withContainer}"
        class="main-content"
      >
        <router-view />
      </div>
    </div>
    <div
      @click="toggle"
      class="position-absolute w-100 h-100 bg-white opacity-70"
      v-if="isToggled"
    ></div>
    <div
      class="back-to-top"
      ref="backToTopLayer"
    >
      <a
        @click="scrollToTop"
        class="btn btn-icon btn-secondary text-20"
        data-placement="top"
        data-toggle="tooltip"
        href="javascript:"
        title="返回顶部"
      >
        <arrow-up-icon />
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from '$components/navbar'
import Sidebar from '$components/sidebar'
import ArrowUpIcon from '$icons/ArrowUp'

export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar,
    ArrowUpIcon
  },
  computed: {
    ...mapGetters(['currentUser', 'isToggled']),
    checkParams() {
      return this.$route.query['active-success'] == 'yes'
    },
    shouldShowNavbar() {
      return (
        typeof this.$route.meta['navbar'] === 'undefined' ||
        !!this.$route.meta['navbar']
      )
    },
    withContainer() {
      if (typeof this.$route.meta['container'] !== 'undefined') {
        return !!this.$route.meta['container']
      }

      return true
    }
  },
  mounted() {
    console.log('app mounted')
  },
  methods: {
    ...mapActions(['toggle']),
    sendActiveMail() {
      this.$http.post('user/send-active-mail').then(data => {
        this.$message.success(data.message)
      })
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted() {
    setTimeout(() => {
      window.addEventListener('scroll', () => {
        if (
          document.body.scrollTop > 400 ||
          document.documentElement.scrollTop > 400
        ) {
          this.$refs['backToTopLayer'].style.display = 'block'
        } else {
          this.$refs['backToTopLayer'].style.display = 'none'
        }
      })
    }, 1000)
  }
}
</script>

<style lang="scss">
.back-to-top {
  display: none;
  position: fixed;
  bottom: 30px;
  right: 50px;
}
</style>
