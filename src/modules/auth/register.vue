<template>
  <div class="row pt-3">
    <div class="offset-sm-4 col-sm-4">
      <div class="box">
        <h4 class="text-center font-weight-normal mt-2">用户注册</h4>
        <form @submit.prevent="showCaptcha">
          <div class="form-group">
            <label>邮箱地址</label>
            <input
              type="text"
              class="form-control"
              ref="emailInput"
              placeholder="example@yike.io"
              v-model="email"
              @blur="validateEmail"
              required
            >
          </div>
          <div class="form-group">
            <label>用户名</label>
            <input
              type="text"
              class="form-control"
              ref="usernameInput"
              placeholder="5 ~ 12 位字母或数字"
              v-model="username"
              @blur="validateUsername"
              required
            >
          </div>
          <div class="form-group">
            <label>密码</label>
            <input
              type="password"
              class="form-control"
              ref="passwordInput"
              placeholder="6 ~ 32 位安全密码"
              v-model="password"
              required
            >
          </div>
          <button type="submit" :disabled="!formReady" class="my-2 btn btn-primary w-100">注册</button>
        </form>
      </div>
    </div>
    <div class="offset-sm-3 col-sm-6 text-center mt-2">
      <p>
        已有账号？
        <router-link class="text-blue" :to="{ name: 'auth.login' }">快速登录</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import GooglePlus from '$icons/GooglePlus'
import FacebookIcon from '$icons/Facebook'
import QqIcon from '$icons/Qqchat'
import GithubIcon from '$icons/GithubCircle'

export default {
  name: 'register',
  components: { GooglePlus, FacebookIcon, QqIcon, GithubIcon },
  data () {
    return {
      username: '',
      email: '',
      password: '',
      ticket: null,
      randstr: null,
      error: true,
      regex: {
        email: /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-.]+.(com|io|cc|co|li|it|sh|cn|net|org|jp|tw|me|info|us|in|la|pro|im|so|at|my|ren|red|top|ltd|fun|vip)$/,
        username: /^[a-zA-Z]+[a-zA-Z0-9_-]+$/
      }
    }
  },
  watch: {
    username () {
      this.$refs['usernameInput'].classList.remove('is-invalid')
    },
    email () {
      this.$refs['emailInput'].classList.remove('is-invalid')
    }
  },
  computed: {
    formReady () {
      return (
        !this.error &&
        this.email.match(this.regex.email) &&
        this.username.match(this.regex.username) &&
        this.username.length >= 5 &&
        this.username.length <= 12 &&
        this.password.length >= 6 &&
        this.password.length <= 32
      )
    }
  },
  methods: {
    ...mapActions(['attemptRegister']),
    validateUsername () {
      this.error = false

      if (
        !this.username.match(this.regex.username) ||
        this.username.length < 5
      ) {
        this.error = true
        this.$refs['usernameInput'].classList.add('is-invalid')
        return this.$message.error('请输入 5 ~ 12 位正确格式用户名')
      }

      this.$http
        .post('user/exists', { username: this.username })
        .then(response => {
          if (!response.success) {
            this.error = true
            this.$refs['usernameInput'].classList.add('is-invalid')
            return this.$message.error('用户名已经存在！')
          }
        })
    },
    validateEmail () {
      this.error = false

      if (!this.email.match(this.regex.email)) {
        this.error = true
        this.$refs['emailInput'].classList.add('is-invalid')
        return this.$message.error('请输入正确的邮箱地址')
      }

      this.$http.post('user/exists', { email: this.email }).then(response => {
        if (!response.success) {
          this.error = true
          this.$refs['emailInput'].classList.add('is-invalid')
          return this.$message.error('邮箱已经存在！')
        }
      })
    },
    showCaptcha () {
      let captcha = new window.TencentCaptcha(
        process.env.VUE_APP_CAPTCHA_ID_REGISTER,
        res => {
          if (res.ret === 0) {
            this.ticket = res.ticket
            this.randstr = res.randstr
            this.submit()
          } else {
            return this.$message.error('请先完成验证！')
          }
        }
      )
      captcha.show()
    },
    async submit () {
      if (!this.ticket) {
        return this.$message.error('请先完成验证！')
      }

      try {
        await this.attemptRegister(this.$data)

        this.$message.warning('注册成功，请先验证你邮箱地址！')
        this.$router.push({ name: 'home' })
      } catch (e) {
        if (e.status !== 422) {
          this.$message.error('注册失败！')
        }
      }
    }
  }
}
</script>
