<template>
  <div class="page-user-show bg-white">
    <header class="page-header bg-grey-blue py-4 text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 d-flex align-items-center">
            <img src="https://source.unsplash.com/random/100x100" alt="User avatar" class="avatar-60"/>

            <h4 class="px-md-4 mb-0">安小超超超</h4>
          </div>
          <div class="col-md-6 d-flex justify-content-end">
            <ol class="breadcrumb d-flex justify-content-center">
              <li class="breadcrumb-item active"><a href="#">个人资料</a></li>
              <li class="breadcrumb-item"><a href="#">个人主页</a></li>
            </ol>
          </div>
        </div>
      </div>
    </header>
    <nav class="nav justify-content-center py-2 bg-white text-center shadow-6">
      <div class="nav-item"><a href="#" class="nav-link active">个人资料</a></div>
      <div class="nav-item"><a href="#" class="nav-link text-gray-60">站内通知</a></div>
      <div class="nav-item"><a href="#" class="nav-link text-gray-60">白名单</a></div>
    </nav>

    <div class="container pt-4">
      <div class="row">
        <div class="col-md-3">
          <upload-avatar />
        </div>
        <div class="col-md-6">
          <h5>个人信息</h5>
          <form>
            <div class="form-row d-flex justify-content-between">
              <div class="form-group w-45">
                <label>用户名</label>
                <input type="text" class="form-control" placeholder="用户名">
              </div>
              <div class="form-group w-45">
                <label>邮箱地址</label>
                <input type="email" class="form-control" placeholder="邮箱地址">
              </div>
            </div>
            <div class="form-row d-flex justify-content-between">
              <div class="form-group w-45">
                <label>性别</label>
                <input type="text" class="form-control" placeholder="性别">
              </div>
              <div class="form-group w-45">
                <label>手机号码</label>
                <input type="text" class="form-control" placeholder="手机号码">
              </div>
            </div>
            <div class="form-row d-flex justify-content-between">
              <div class="form-group w-45">
                <label>公司</label>
                <input type="text" class="form-control">
              </div>
              <div class="form-group w-45">
                <label>地址</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label>座右铭</label>
              <textarea class="form-control"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TwitterIcon from '@icons/twitter'
  import FacebookIcon from '@icons/facebook'
  import InstagramIcon from '@icons/instagram'
  import UserMedia from "@components/user-media"

  import UserCard from "@components/user-card"
  import UploadAvatar from "@components/upload-avatar"

  export default {
    name: 'show',
    components: {UserMedia, UserCard, TwitterIcon, FacebookIcon, InstagramIcon, UploadAvatar}
  }
</script>

<style lang="scss">
  .page-user-show {
    min-height: 100vh;
  }
</style>
