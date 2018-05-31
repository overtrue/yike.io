<template>
  <div class="box">
    <div class="box-heading border-bottom">
      <h5>个人信息</h5>
    </div>
    <form class="w-50">
      <div class="form-group">
        <label>昵称</label>
        <input type="text" class="form-control" v-model="user.name">
      </div>
      <div class="form-group">
        <label>性别</label>
        <div>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="male" name="gender" class="custom-control-input">
            <label class="custom-control-label" for="male">男</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="female" name="gender" class="custom-control-input">
            <label class="custom-control-label" for="female">女</label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>手机号码</label>
        <input type="email" class="form-control">
        <small class="form-text text-muted">You can manage verified email addresses in your <a href="#" class="text-blue">email settings</a>.</small>
      </div>
      <div class="form-group">
        <label>邮箱地址</label>
        <input type="email" class="form-control" placeholder="example@yike.io" v-model="user.email">
        <small class="form-text text-muted">You can manage verified email addresses in your <a href="#" class="text-blue">email settings</a>.</small>
      </div>
      <div class="form-group">
        <label>座右铭</label>
        <textarea class="form-control" v-model="user.bio"></textarea>
        <small class="form-text text-muted">You can @mention other users and organizations to link to them.</small>
      </div>
      <div class="form-group">
        <label>个人主页</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>公司</label>
        <input type="text" class="form-control">
        <small class="form-text text-muted">You can @mention your company’s GitHub organization to link it.</small>
      </div>
      <div class="form-group">
        <label>当前所在地</label>
        <input type="text" class="form-control">
      </div>
      <button class="btn btn-primary rounded">保存</button>
    </form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        user: {}
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    created() {
      this.user = this.currentUser
    },
  }
</script>
