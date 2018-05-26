<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow-6 d-flex justify-content-between">
    <div class="nav-left d-flex">
      <a class="navbar-brand" href="#"><menu-icon decorative /></a>
      <a class="navbar-brand" href="#">Yike</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <form class="form-inline input-group-sm my-2 my-lg-0">
        <input class="form-control mr-sm-2 border-0" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">节点</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">话题</a>
        </li>
      </ul>
    </div>


    <div class="nav-right d-flex">
      <button class="btn btn-sm btn-outline-secondary mr-3">发起讨论</button>
      <a class="navbar-brand" href="#"><bell-icon /></a>
      <div class="btn-group">
        <img src="https://pigjian.com/images/default_avatar.png" width="40" height="40" class="rounded-circle dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">个人中心</a>
          <a class="dropdown-item" href="#">编辑资料</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">退出登录</a>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
  import MenuIcon from "@icons/menu"
  import BellIcon from "@icons/bell"

  export default {
    components: {
      MenuIcon,
      BellIcon,
    }
  }
</script>

<style lang="scss">
  .dropdown-toggle {
    cursor: pointer;
  }
  .navbar-nav .nav-item {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
