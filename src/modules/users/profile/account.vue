<template>
  <div class="boxes">
    <div class="box" id="edit-password">
      <div class="box-heading border-bottom">
        <h5>修改密码</h5>
      </div>
      <form class="w-50" @submit.prevent="resetPassword">
        <div class="form-group">
          <label>旧密码</label>
          <input type="password" v-model="oldPassword" class="form-control">
        </div>
        <div class="form-group">
          <label>新密码</label>
          <input type="password" v-model="password" class="form-control">
        </div>
        <div class="form-group">
          <label>确认新密码</label>
          <input type="password" v-model="passwordConfirmation" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary rounded">修改密码</button>
        <router-link :to="{name: 'auth.forget-password'}" class="text-blue ml-2">忘记密码？</router-link>
      </form>
    </div>
    <div class="box" id="edit-email">
      <div class="box-heading border-bottom">
        <h5>修改邮箱地址</h5>
      </div>
      <form class="w-50" @submit.prevent="updateEmail">
        <div class="form-group">
          <label>原邮箱</label>
          <input type="text" disabled class="form-control" :value="currentUser.email">
        </div>
        <div class="form-group">
          <label>新邮箱</label>
          <input type="text" class="form-control" v-model="email">
          <small class="form-text text-muted">修改后需要进行新的邮箱验证。</small>
        </div>
        <button type="submit" class="btn btn-primary rounded">确定</button>
      </form>
    </div>
    <div class="box" id="edit-phone" v-if="false">
      <div class="box-heading border-bottom">
        <h5>修改手机号码</h5>
      </div>
      <form class="w-50">
        <div class="form-group" v-if="currentUser.phone">
          <label>原号码</label>
          <input type="text" disabled class="form-control" :value="currentUser.phone">
        </div>
        <div class="form-group">
          <label>新号码</label>
          <div class="input-group">
            <input type="text" class="form-control" v-model="phone">
            <div class="input-group-append">
              <button class="btn btn-primary rounded-right">获取验证码</button>
            </div>
          </div>
          <small class="form-text text-muted">修改手机号码需要进行短信验证。</small>
        </div>
        <div class="form-group">
          <label>验证码</label>
          <input type="text" class="form-control">
        </div>
        <button class="btn btn-primary rounded">确定</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      oldPassword: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      phone: ''
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  mounted () {
    if (this.$route.hash) {
      let hash = this.$route.hash

      this.goAnchor(hash.slice(1))
    }
  },
  methods: {
    async updateEmail () {
      let result = await this.$http.post('user/mail', {
        email: this.email
      })

      this.$message.warning(result.message)
    },
    resetPassword () {
      this.$http.post('user/reset-password', {
        old_password: this.oldPassword,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      })

      this.oldPassword = ''
      this.password = ''
      this.passwordConfirmation = ''
    },
    goAnchor (name) {
      let element = document.getElementById(name)

      if (element) {
        element.scrollIntoView()
      }
    }
  }
}
</script>
