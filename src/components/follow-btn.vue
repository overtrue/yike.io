<template>
  <div v-if="currentUser && currentUser.id != user.id">
    <button class="btn btn-outline-light mx-1" @click="follow" v-if="!user.has_followed">关注 TA</button>
    <button class="btn btn-outline-warning mx-1" @click="unfollow" v-else>取消关注</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'follow-btn',
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    methods: {
      async follow() {
        if (!this.currentUser['id']) {
          this.$router.push({name: 'auth.login'})
        }

        await this.api(`user/${this.$route.params.id}/follow`).post()
        this.user.has_followed = true
        this.user.followers_count++
      },
      async unfollow() {
        await this.api(`user/${this.$route.params.id}/unfollow`).post()

        this.user.has_followed = false
        this.user.followers_count--
      }
    }
  }
</script>

<style scoped>

</style>
