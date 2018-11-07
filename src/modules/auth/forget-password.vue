<template>
  <div class="row pt-3">
    <div class="offset-sm-4 col-sm-4">
      <div class="box">
        <h4 class="text-center font-weight-normal mt-2 pb-2">忘记密码</h4>
        <form @submit.prevent="submit">
          <div class="form-group input-group">
            <input type="text" class="form-control" v-model="email" placeholder="请输入邮箱地址">
          </div>
          <button type="submit" class="my-2 btn btn-primary w-100 btn-sm">发送邮件</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    submit () {
      this.$http.post('user/forget-password', {
        email: this.email
      }).then(() => {
        this.$message.success('邮件发送成功，请及时查看您的邮箱！')
      })
    }
  }
}
</script>
