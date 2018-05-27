<template>
  <div class="box box-flush text-gray-50">
    <div class="box-body">
      <div class="d-flex align-items-center justify-content-between">
        <div class="text-13">最新成员</div>
        <button class="btn btn-ghost btn-icon"><arrow-right></arrow-right></button>
      </div>
    </div>
    <ul class="plan-list d-flex justify-content-around align-items-center flex-wrap px-2 pb-2">
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
