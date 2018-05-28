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
        <div class="card-footer border-0 bg-white text-center mb-2 d-flex justify-content-center">
          <a href="" class="text-20 btn mx-1 btn-icon btn-pink">
            <google-plus />
          </a>
          <a href="" class="text-20 btn mx-1 btn-icon btn-facebook">
            <facebook-icon />
          </a>
          <a href="" class="text-20 btn mx-1 btn-icon btn-twitter">
            <twitter-icon />
          </a>
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
  import FacebookIcon from '@icons/facebook'
  import TwitterIcon from '@icons/twitter'

  export default {
    components: {GooglePlus, FacebookIcon, TwitterIcon}
  }
</script>
