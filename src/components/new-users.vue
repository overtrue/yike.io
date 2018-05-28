<template>
  <div class="box box-flush text-gray-50">
    <div class="box-body">
      <div class="d-flex align-items-center justify-content-between">
        <div class="text-13">最新成员</div>
        <button class="btn btn-ghost btn-icon"><arrow-right></arrow-right></button>
      </div>
    </div>
    <ul class="plan-list px-2 pb-2">
      <user-media type="vertical w25"></user-media>
      <user-media type="vertical w25"></user-media>
      <user-media type="vertical w25"></user-media>
      <user-media type="vertical w25"></user-media>
      <user-media type="vertical w25"></user-media>
      <user-media type="vertical w25"></user-media>
      <user-media type="vertical w25"></user-media>
      <user-media type="vertical w25"></user-media>
      <user-media type="vertical w25"></user-media>
      <user-media type="vertical w25"></user-media>
    </ul>
  </div>
</template>

<script>
  import UserMedia from "@components/user-media"
  import ArrowRight from "@icons/arrow-right"

  export default {
    name: 'NewUsers',
    components: {UserMedia, ArrowRight}
  }
</script>

<style scoped>

</style>
