<template>
  <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-6 d-flex justify-content-between align-items-center">
    <ul class="navbar-nav d-flex align-items-center justify-content-between">
      <li class="nav-item nav-item-icon">
        <a href="#" class="nav-link"><menu-icon decorative/></a>
      </li>
      <li class="nav-item"><a class="navbar-brand mx-3" href="#">Yike</a></li>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <li class="nav-item">
      <form class="form-inline input-group-sm my-2 my-lg-0">
        <input class="form-control mr-sm-2 border-0" type="search" placeholder="Search" aria-label="Search">
      </form>
      </li>
    </ul>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#" @click="$router.push({path: '/'})">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">节点</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">话题</a>
        </li>
      </ul>
    </div>

    <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex align-items-center">
      <li class="nav-item">
        <button class="btn btn-sm btn-outline-secondary"><plus-icon></plus-icon> 发起讨论</button>
      </li>
      <li class="nav-item nav-item-icon">
        <a class="text-20 btn btn-icon btn-outline-light" href="#"><bell-icon/></a>
      </li>
      <li class="nav-item nav-link mr-md-2">
        <div class="btn-group">
          <a href="#" class="dropdown-toggle"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="https://pigjian.com/images/default_avatar.png" class="avatar-40 mr-2" />
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#"><account-icon class="mr-2"></account-icon>个人中心</a>
            <a class="dropdown-item" href="#"><account-edit-icon class="mr-2"></account-edit-icon>编辑资料</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"><logout-variant class="mr-2"></logout-variant>退出登录</a>
          </div>
        </div>
      </li>
    </ul>

  </nav>
</template>

<script>
  import MenuIcon from '@icons/menu'
  import BellIcon from '@icons/bell'
  import PlusIcon from '@icons/plus'
  import AccountIcon from '@icons/account'
  import AccountEditIcon from '@icons/account-edit'
  import LogoutVariant from '@icons/logout-variant'

  export default {
    components: {
      MenuIcon,
      BellIcon,
      PlusIcon,
      AccountIcon,
      AccountEditIcon,
      LogoutVariant
    }
  }
</script>

<style lang="scss">
  .navbar {
    height: 90px;
  }

  .dropdown-toggle {
    cursor: pointer;
  }

  .navbar-nav .nav-item {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
