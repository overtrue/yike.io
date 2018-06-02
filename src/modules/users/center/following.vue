<template>
  <div class="box box-flush">
    <form class="box-body">
      <div class="input-group">
        <input type="text" class="form-control border-0" placeholder="搜索用户">
      </div>
    </form>
    <div class="list-group list-group-flush">
      <user-media class="list-group-item" v-for="i in 15">
        <template slot="appends">
          <div class="ml-auto align-self-center d-flex">
            <button class="btn btn-icon btn-ghost mr-1 text-18"><plus-icon /></button>
            <button class="btn btn-icon btn-ghost mr-1 text-18"><email-icon /></button>
          </div>
        </template>
      </user-media>
    </div>
    <div class="text-center">
      <button class="mt-2 btn btn-ghost">Load More</button>
    </div>
  </div>
</template>

<script>
  import UserMedia from '@components/user-media'
  import EmailIcon from '@icons/email'
  import PlusIcon from '@icons/plus'

  export default {
    components: {UserMedia, PlusIcon, EmailIcon},
  }
</script>

<style lang="scss" scoped>
  .form-control:focus {
    border: none;
    box-shadow: none;
  }
</style>
