<template>
  <div class="boxes">
    <div class="box">
      <div class="box-heading border-bottom">
        <h5>修改密码</h5>
      </div>
      <form class="w-50">
        <div class="form-group">
          <label>旧密码</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>新密码</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>确认新密码</label>
          <input type="text" class="form-control">
        </div>
        <button class="btn btn-primary rounded">修改密码</button>
        <a href="#" class="text-blue ml-2">忘记密码？</a>
      </form>
    </div>
    <div class="box">
      <div class="box-heading border-bottom">
        <h5>修改邮箱地址</h5>
      </div>
      <form class="w-50">
        <div class="form-group">
          <label>原邮箱</label>
          <input type="text" disabled class="form-control" :value="currentUser.email">
        </div>
        <div class="form-group">
          <label>新邮箱</label>
          <input type="text" class="form-control">
          <small class="form-text text-muted">修改后需要进行新的邮箱验证。</small>
        </div>
        <button class="btn btn-primary rounded">确定</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['currentUser'])
    },
  }
</script>
