<template>
  <div class="box box-flush">
    <form class="box-body" v-if="users.data.length > 0">
      <div class="input-group">
        <input type="text" class="form-control border-0" placeholder="搜索用户">
      </div>
    </form>
    <div class="list-group list-group-flush">
      <user-media class="list-group-item" v-for="user in users.data" :user="user">
        <template slot="appends" slot-scope="prop">
          {{ user.bio }}
          <div class="ml-auto align-self-center d-flex">
            <template v-if="prop.data.id != currentUser.id && false">
              <button class="btn btn-icon btn-ghost mr-1 text-18" v-if="!prop.data.has_followed"><plus-icon /></button>
              <button class="btn btn-icon btn-ghost mr-1 text-18" v-else><minus-icon /></button>
            </template>
            <button class="btn btn-icon btn-ghost mr-1 text-18"><email-icon /></button>
          </div>
        </template>
      </user-media>
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

  import UserMedia from '@components/user-media'
  import Paginator from '@components/paginator'
  import EmailIcon from '@icons/email'
  import PlusIcon from '@icons/plus'
  import MinusIcon from '@icons/minus'

  export default {
    components: {UserMedia, Paginator, PlusIcon, EmailIcon, MinusIcon},
    data() {
      return {
        users: []
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    created() {
      this.followings()
    },
    methods: {
      async followings() {
        let resource = new Resource(`user/${this.$route.params.id}/followings`)

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
