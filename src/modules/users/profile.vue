<template>
  <div class="page-user-show">
    <div class="row">
      <div class="col-md-3">
        <sidebar />
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@modules/users/profile/sidebar'

  export default {
    name: 'show',
    components: {Sidebar}
  }
</script>

<style lang="scss">
  .page-user-show {
    min-height: 100vh;
  }
</style>
