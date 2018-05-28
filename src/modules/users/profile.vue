<template>
  <div class="page-user-show">
    <div class="row">
      <div class="col-md-3">
        <div class="box">
          <div class="box-heading">
            <setting-icon class="mr-1 text-16"/>设置
          </div>
          <div class="nav flex-column nav-pills">
            <a href="#" class="nav-link active">基本资料</a>
            <a href="#" class="nav-link">账号设置</a>
            <a href="#" class="nav-link">通知设置</a>
            <a href="#" class="nav-link">账号绑定</a>
            <a href="#" class="nav-link">黑名单</a>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="box">
          <div class="box-heading border-bottom">
            <h5>个人信息</h5>
          </div>
          <form class="w-50">
            <div class="form-group">
              <label>昵称</label>
              <input type="text" class="form-control">
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
              <input type="email" class="form-control" placeholder="example@yike.io">
              <small class="form-text text-muted">You can manage verified email addresses in your <a href="#" class="text-blue">email settings</a>.</small>
            </div>
            <div class="form-group">
              <label>座右铭</label>
              <textarea class="form-control"></textarea>
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
  import SettingIcon from '@icons/settings-outline'
  import UserMedia from "@components/user-media"

  import UserCard from "@components/user-card"

  export default {
    name: 'show',
    components: {UserMedia, UserCard, TwitterIcon, FacebookIcon, InstagramIcon, SettingIcon}
  }
</script>

<style lang="scss">
  .page-user-show {
    min-height: 100vh;
  }
</style>
