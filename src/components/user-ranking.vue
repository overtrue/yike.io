<template>
  <div class="box text-gray-50">
    <div class="box-heading d-flex align-items-center justify-content-between">
      <div class="text-13">活跃用户</div>
      <!--<button class="btn btn-ghost btn-icon"><arrow-right-icon></arrow-right-icon></button>-->
    </div>
    <ul class="plan-list">
      <user-media class="mb-2 d-flex align-items-center" v-for="item in users" :key="item.id" :user="item">
        <template slot="appends">
          <follow-btn :item="item" class="ml-auto" simple></follow-btn>
        </template>
        <template slot="description">
          <div class="text-gray-70 text-12">{{ item.created_at_timeago }}</div>
        </template>
      </user-media>
    </ul>
  </div>
</template>

<script>
import UserMedia from '$components/user-media'
import ArrowRightIcon from '$icons/ArrowRight'
import CheckIcon from '$icons/Check'
import PlusIcon from '$icons/Plus'
import FollowBtn from '$components/buttons/follow-btn'

export default {
  name: 'NewUsers',
  components: { FollowBtn, UserMedia, ArrowRightIcon, CheckIcon, PlusIcon },
  data () {
    return {
      users: []
    }
  },
  methods: {
    loadUsers () {
      this.$http.get('users?limit=10').then(users => (this.users = users.data))
    }
  },
  mounted () {
    this.loadUsers()
  }
}
</script>

<style scoped>
</style>
