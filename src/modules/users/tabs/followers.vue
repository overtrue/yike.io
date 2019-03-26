<template>
  <div class="box box-flush">
    <!--<form class="box-body" v-if="users.data && users.data.length > 0">-->
    <!--<div class="input-group">-->
    <!--<input type="text" class="form-control border-0" placeholder="杜索用户">-->
    <!--</div>-->
    <!--</form>-->
    <div class="list-group list-group-flush">
      <user-list-item class="list-group-item" :user="user" :key="user.id" v-for="user of users.data"></user-list-item>
      <empty-state v-if="users.data && users.data.length == 0"></empty-state>
      <paginator :meta="users.meta"></paginator>
    </div>
    <div class="text-center" v-if="false">
      <button class="mt-2 btn btn-ghost">Load More</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EmptyState from '$components/empty-state'
import UserListItem from '$components/user-list-item'
import Paginator from '$components/paginator'
import EmailIcon from '$icons/Email'
import PlusIcon from '$icons/Plus'

export default {
  name: 'user-followers',
  components: { UserListItem, EmptyState, Paginator, PlusIcon, EmailIcon },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.followers()
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    async followers () {
      this.users = await this.$http.get(
        `user/${this.$parent.user.username}/followers`
      )
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
