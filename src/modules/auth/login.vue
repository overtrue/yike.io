<template>
  <div class="row pt-3">
    <div class="offset-sm-4 col-sm-4">
      <div class="card border-0 shadow-sm text-gray-50">
        <h4 class="card-header border-0 bg-white text-center p-3 font-weight-normal">用户登录</h4>
        <div class="card-body">
          <form class="px-3">
            <div class="form-group input-group-lg">
              <label>用户名</label>
              <input type="text" class="form-control" placeholder="username">
            </div>
            <div class="form-group input-group-lg">
              <label>密码</label>
              <input type="password" class="form-control" placeholder="password">
            </div>
            <button class="my-2 btn btn-primary w-100 btn-lg">登录</button>
          </form>
        </div>
        <div class="card-footer border-0 bg-white text-center mb-2">
          <button class="btn btn-pink"><google-plus /></button>
          <button class="btn btn-facebook"><facebook /></button>
          <button class="btn btn-twitter"><twitter /></button>
        </div>
      </div>
    </div>
    <div class="offset-sm-3 col-sm-6 text-center mt-2">
      <p>没有账号？ <a class="text-blue" href="#">快速注册</a></p>
    </div>
  </div>
</template>

<script>
  import GooglePlus from '@icons/google-plus'
  import Facebook from '@icons/facebook'
  import Twitter from '@icons/twitter'

  export default {
    components: {GooglePlus, Facebook, Twitter}
  }
</script>

<style lang="scss" scoped>
  .card-footer .btn {
    width: 36px;
    height: 36px;
    line-height: 18px;
    padding: 0;
    margin-right: 15px;
    margin-left: 15px;
  }
</style>
