<template>
  <div class="box text-gray-50">
    <div class="box-heading d-flex align-items-center justify-content-between">
      <div class="text-13">活跃用户</div>
      <button class="btn btn-icon"><arrow-right-icon></arrow-right-icon></button>
    </div>
    <ul class="plan-list">
      <user-card class="mb-2"><template slot="appends"><button class="btn btn-icon ml-auto"><plus-icon></plus-icon></button></template></user-card>
      <user-card class="mb-2"><template slot="appends"><button class="btn btn-icon ml-auto"><plus-icon></plus-icon></button></template></user-card>
      <user-card class="mb-2"><template slot="appends"><button class="btn btn-icon ml-auto"><plus-icon></plus-icon></button></template></user-card>
      <user-card class="mb-2"><template slot="appends"><button class="btn btn-icon ml-auto"><plus-icon></plus-icon></button></template></user-card>
      <user-card class="mb-2"><template slot="appends"><button class="btn btn-icon no-border ml-auto"><check-icon></check-icon></button></template></user-card>
      <user-card class="mb-2"><template slot="appends"><button class="btn btn-icon no-border ml-auto"><check-icon></check-icon></button></template></user-card>
    </ul>
  </div>
</template>

<script>
  import UserCard from "@components/UserCard"
  import ArrowRightIcon from "@icons/arrow-right"
  import CheckIcon from "@icons/check"
  import PlusIcon from "@icons/plus"

  export default {
    name: 'NewUsers',
    components: {UserCard, ArrowRightIcon, CheckIcon, PlusIcon}
  }
</script>

<style scoped>

</style>
