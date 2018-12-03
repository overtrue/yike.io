<template>
  <div class="row pt-3">
    <div class="offset-sm-4 col-sm-4">
      <div class="box">
        <h4 class="text-center font-weight-normal mt-2 pb-2">重置密码</h4>
        <form @submit.prevent="submit">
          <div class="form-group input-group">
            <input type="password" class="form-control" v-model="password" placeholder="请输入密码">
          </div>
          <div class="form-group input-group">
            <input type="password" class="form-control" v-model="password_confirmation" placeholder="请输入确认密码">
          </div>
          <button type="submit" class="my-2 btn btn-primary w-100 btn-sm">修改密码</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    ...mapActions(['logout']),
    submit () {
      this.$http.post('user/reset-password', {
        token: this.$route.query.token,
        email: this.$route.query.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })

      this.logout()
      this.$router.push({ name: 'auth.login' })
      this.$message.success('成功修改密码，请重新登录！')
    }
  }
}
</script>
