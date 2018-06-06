<template>
  <div v-if="currentUser">
    <button class="btn btn-outline-light mx-1" @click="subscribe" v-if="!node.has_subscribed">订阅</button>
    <button class="btn btn-outline-warning mx-1" @click="unsubscribe" v-else>取消订阅</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'subscribe-btn',
    props: {
      node: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    methods: {
      async subscribe() {
        if (!this.currentUser['id']) {
          this.$router.push({name: 'auth.login'})
        }

        await this.api(`nodes/${this.$route.params.id}/subscribe`).post()

        this.node.has_subscribed = true
      },
      async unsubscribe() {
        await this.api(`nodes/${this.$route.params.id}/unsubscribe`).post()

        this.node.has_subscribed = false
      }
    }
  }
</script>
