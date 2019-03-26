<template>
  <div class="box box-flush text-gray-50">
    <div class="box-body">
      <div class="d-flex align-items-center justify-content-between">
        <div class="text-13">最新用户</div>
        <!--<button class="btn btn-ghost btn-icon"><arrow-right></arrow-right></button>-->
      </div>
    </div>
    <ul class="plan-list px-2 pb-2">
      <user-media type="vertical w25" v-for="item in users" :key="item.id" :user="item"></user-media>
    </ul>
  </div>
</template>

<script>
import UserMedia from '$components/user-media'
import ArrowRight from '$icons/ArrowRight'

export default {
  name: 'NewUsers',
  components: { UserMedia, ArrowRight },
  data () {
    return {
      users: []
    }
  },
  methods: {
    loadUsers () {
      this.$http
        .get('users?latest=1&limit=12')
        .then(users => (this.users = users.data))
    }
  },
  mounted () {
    this.loadUsers()
  }
}
</script>

<style scoped>
</style>
