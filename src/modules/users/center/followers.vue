<template>
  <div class="box box-flush">
    <form class="box-body" v-if="users.data.length > 0">
      <div class="input-group">
        <input type="text" class="form-control border-0" placeholder="搜索用户">
      </div>
    </form>
    <div class="list-group list-group-flush">
      <user-list-item class="list-group-item" :user="user" :key="user.id" v-for="user of users.data"></user-list-item>
      <div class="d-flex justify-content-center align-items-center p-5" v-if="users.data.length == 0">空空如也~</div>
      <paginator :meta="users.meta"></paginator>
    </div>
    <div class="text-center" v-if="false">
      <button class="mt-2 btn btn-ghost">Load More</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Resource from '@utils/resource'

  import UserListItem from '@components/user-list-item'
  import EmailIcon from '@icons/email'
  import PlusIcon from '@icons/plus'

  export default {
    components: {UserListItem, PlusIcon, EmailIcon},
    data() {
      return {
        users: []
      }
    },
    created() {
      this.followers()
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    methods: {
      async followers() {
        let resource = new Resource(`user/${this.$route.params.id}/followers`)

        this.users = await resource.get()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-control:focus {
    border: none;
    box-shadow: none;
  }
</style>
