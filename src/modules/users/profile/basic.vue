<template>
  <div class="box">
    <div class="box-heading border-bottom">
      <h5>个人信息</h5>
    </div>
    <form class="w-50" @submit.prevent="submit">
      <div class="form-group">
        <label>昵称</label>
        <input type="text" class="form-control" v-model="user.name">
      </div>
      <div class="form-group">
        <label>性别</label>
        <div>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="male" class="custom-control-input" value="male" v-model="user.gender">
            <label class="custom-control-label" for="male">男</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="female" class="custom-control-input" value="female" v-model="user.gender">
            <label class="custom-control-label" for="female">女</label>
          </div>
        </div>
      </div>
      <div class="form-group" v-if="false">
        <label>手机号码</label>
        <input type="text" class="form-control" v-model="user.phone" disabled>
        <small class="form-text text-muted">您可以管理您的<router-link :to="{ name: 'user.account', hash: '#edit-phone' }" class="text-blue">手机号码设置</router-link>。</small>
      </div>
      <div class="form-group">
        <label>邮箱地址</label>
        <input type="email" class="form-control" placeholder="example@yike.io" v-model="user.email" disabled>
        <small class="form-text text-muted">您可以管理您的<router-link :to="{ name: 'user.account', hash: '#edit-email' }" class="text-blue">邮箱地址设置</router-link>。</small>
      </div>
      <div class="form-group">
        <label>座右铭</label>
        <textarea class="form-control" v-model="user.bio"></textarea>
        <small class="form-text text-muted">You can @mention other users and organizations to link to them.</small>
      </div>
      <div class="form-group">
        <label>个人主页</label>
        <input type="text" class="form-control" v-model="user.extends.home_url">
      </div>
      <div class="form-group">
        <label>公司</label>
        <input type="text" class="form-control" v-model="user.extends.company">
        <small class="form-text text-muted">You can @mention your company’s GitHub organization to link it.</small>
      </div>
      <div class="form-group">
        <label>当前所在地</label>
        <input type="text" class="form-control" v-model="user.extends.location">
      </div>
      <button type="submit" class="btn btn-primary rounded">保存</button>
    </form>
  </div>
</template>

<script>
import { cloneDeepWith } from 'lodash'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        extends: {
          home_url: '',
          company: '',
          location: ''
        }
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  created () {
    this.user = cloneDeepWith(this.currentUser)
  },
  methods: {
    ...mapActions(['setUser']),
    async submit () {
      const result = await this.$http.patch(
        `users/${this.user.username}`,
        this.user
      )

      if (result) {
        this.setUser(result)
        this.$message.success('成功修改用户信息')
      }
    }
  }
}
</script>
