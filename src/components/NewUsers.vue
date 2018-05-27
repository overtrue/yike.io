<template>
  <div class="box">
    <div class="box-heading d-flex align-items-center justify-content-between">
      最新成员
      <button class="btn btn-icon btn-outline-light"><arrow-right></arrow-right></button>
    </div>
    <ul class="plan-list text-gray-50 d-flex justify-content-around align-items-center flex-wrap">
      <user-card type="vertical"></user-card>
      <user-card type="vertical"></user-card>
      <user-card type="vertical"></user-card>
      <user-card type="vertical"></user-card>
      <user-card type="vertical"></user-card>
      <user-card type="vertical"></user-card>
      <user-card type="vertical"></user-card>
      <user-card type="vertical"></user-card>
      <user-card type="vertical"></user-card>
      <user-card type="vertical"></user-card>
    </ul>
  </div>
</template>

<script>
  import UserCard from "@components/UserCard"
  import ArrowRight from "@icons/arrow-right"

  export default {
    name: 'NewUsers',
    components: {UserCard, ArrowRight}
  }
</script>

<style scoped>

</style>
