<template>
  <div class="box text-gray-50">
    <div class="box-heading d-flex align-items-center justify-content-between">
      <div class="text-13">活跃用户</div>
      <button class="btn btn-ghost btn-icon"><arrow-right-icon></arrow-right-icon></button>
    </div>
    <ul class="plan-list">
      <user-media class="mb-2"><template slot="appends"><button class="btn btn-ghost btn-icon ml-auto"><plus-icon></plus-icon></button></template></user-media>
      <user-media class="mb-2"><template slot="appends"><button class="btn btn-ghost btn-icon ml-auto"><plus-icon></plus-icon></button></template></user-media>
      <user-media class="mb-2"><template slot="appends"><button class="btn btn-ghost btn-icon ml-auto"><plus-icon></plus-icon></button></template></user-media>
      <user-media class="mb-2"><template slot="appends"><button class="btn btn-ghost btn-icon ml-auto"><plus-icon></plus-icon></button></template></user-media>
      <user-media class="mb-2"><template slot="appends"><button class="btn btn-ghost btn-icon no-border ml-auto"><check-icon></check-icon></button></template></user-media>
      <user-media class="mb-2"><template slot="appends"><button class="btn btn-ghost btn-icon no-border ml-auto"><check-icon></check-icon></button></template></user-media>
    </ul>
  </div>
</template>

<script>
  import UserMedia from "@components/user-media"
  import ArrowRightIcon from "@icons/arrow-right"
  import CheckIcon from "@icons/check"
  import PlusIcon from "@icons/plus"

  export default {
    name: 'NewUsers',
    components: {UserMedia, ArrowRightIcon, CheckIcon, PlusIcon}
  }
</script>

<style scoped>

</style>
