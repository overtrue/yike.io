<template>
  <div class="box text-gray-50">
    <div class="box-heading d-flex align-items-center justify-content-between">
      <div class="text-13">活跃用户</div>
      <button class="btn btn-ghost btn-icon"><arrow-right-icon></arrow-right-icon></button>
    </div>
    <ul class="plan-list">
      <user-media class="mb-2" v-for="item in users" :key="item.id" :user="item">
        <template slot="appends"><button class="btn btn-ghost btn-icon ml-auto"><plus-icon></plus-icon></button></template>
        <template slot="description"><div class="text-gray-70 text-12">{{ item.created_at_timeago }}</div></template>
      </user-media>
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
    components: {UserMedia, ArrowRightIcon, CheckIcon, PlusIcon},
    data() {
      return {
        users: []
      }
    },
    methods: {
      loadUsers() {
        this.api('users').get('?limit=12').then(users => this.users = users.data)
      }
    },
    mounted() {
      this.loadUsers()
    }
  }
</script>

<style scoped>

</style>
