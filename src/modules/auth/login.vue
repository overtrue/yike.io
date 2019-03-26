<template>
  <div class="row pt-3">
    <div class="offset-sm-4 col-sm-4">
      <div class="box">
        <h4 class="text-center font-weight-normal mt-2">用户登录</h4>
        <form @submit.prevent="submit">
          <div class="form-group">
            <label>用户名<small>（或邮箱）</small></label>
            <input type="text" class="form-control" v-model="username" required>
          </div>
          <div class="form-group">
            <label>密码</label>
            <input type="password" class="form-control" v-model="password" required>
          </div>
          <button type="submit" class="my-2 btn btn-primary w-100">登录</button>
        </form>
        <div class="mb-2 d-flex justify-content-around">
          <!--<socialite-btns></socialite-btns>-->
        </div>
      </div>
    </div>
    <div class="offset-sm-4 col-sm-4 text-center mt-2 d-flex justify-content-between">
      <p>没有账号？ <router-link class="text-blue" :to="{ name: 'auth.register' }">快速注册</router-link>
      </p>
      <p>
        <router-link class="text-blue" :to="{ name: 'auth.forget-password' }">忘记密码？</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SocialiteBtns from '$components/socialite-login'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: { SocialiteBtns },
  methods: {
    ...mapActions(['attemptLogin']),

    async submit () {
      const { username, password } = this

      try {
        await this.attemptLogin({ username, password })

        this.$message.success('欢迎回来~')
        this.$router.push({ name: 'home' })
      } catch (e) {
        if (e.status !== 422) {
          this.$message.error('账号密码错误！')
        }
      }
    }
  }
}
</script>
