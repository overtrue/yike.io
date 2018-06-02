<template>
  <div class="box">
    <form>
      <div class="input-group border-bottom">
        <input type="text" class="form-control border-0" placeholder="搜索用户">
      </div>
    </form>
    <user-media class="py-2 border-bottom" v-for="i in 15">
      <template slot="appends">
        <div class="ml-auto align-self-center">
          <button class="btn btn-sm btn-outline-secondary mr-1">关注</button>
          <button class="btn btn-sm btn-outline-secondary mr-1">私信</button>
        </div>
      </template>
    </user-media>
    <div class="text-center">
      <button class="mt-2 btn btn-outline-secondary">Load More</button>
    </div>
  </div>
</template>

<script>
  import UserMedia from '@components/user-media'

  export default {
    components: {UserMedia},
  }
</script>

<style lang="scss" scoped>
  .form-control:focus {
    border: none;
    box-shadow: none;
  }
</style>
