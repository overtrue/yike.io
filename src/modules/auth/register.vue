<template>
  <div class="row pt-3">
    <div class="offset-sm-4 col-sm-4">
      <div class="box">
        <h4 class="text-center font-weight-normal mt-2">用户注册</h4>
        <form @submit.prevent="showCaptcha">
          <div class="form-group input-group-lg">
            <label>邮箱地址</label>
            <input type="text" class="form-control" placeholder="example@yike.io" v-model="email">
          </div>
          <div class="form-group input-group-lg">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="" v-model="username">
          </div>
          <div class="form-group input-group-lg">
            <label>密码</label>
            <input type="password" class="form-control" placeholder="" v-model="password">
          </div>
          <button type="submit" class="my-2 btn btn-primary w-100 btn-lg">注册</button>
        </form>
      </div>
    </div>
    <div class="offset-sm-3 col-sm-6 text-center mt-2">
      <p>已有账号？ <router-link class="text-blue" :to="{ name: 'auth.login' }">快速登录</router-link></p>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import GooglePlus from '@icons/google-plus'
  import FacebookIcon from '@icons/facebook'
  import QqIcon from '@icons/qqchat'
  import GithubIcon from '@icons/github-circle'

  export default {
    components: {GooglePlus, FacebookIcon, QqIcon, GithubIcon},
    data() {
      return {
        username: '',
        email: '',
        password: '',
        ticket: null,
        randstr: null,
      }
    },
    methods: {
      ...mapActions(['attemptRegister']),
      showCaptcha() {
        let captcha = new TencentCaptcha('2013342827', (res) => {
          if (res.ret === 0) {
            this.ticket = res.ticket
            this.randstr = res.randstr
            this.submit()
          } else {
            return this.$message.error('请先完成验证！')
          }
        })
        captcha.show()
      },
      async submit() {
        if (!this.ticket) {
          return this.$message.error('请先完成验证！')
        }

        try {
          await this.attemptRegister(this.$data)

          this.$message.warning('注册成功，请先验证你邮箱地址！')
          this.$router.push({ name: 'home' })
        } catch (e) {
          if (e.status != 422) {
            this.$message.error('注册失败！')
          }
        }
      }
    }
  }
</script>
