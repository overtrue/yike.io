<template>
  <div v-if="currentUser.id">
    <template v-if="tag == 'button'">
      <button class="btn btn-outline-light mx-1" @click="subscribe" v-if="!item.has_subscribed">
        <volume-high class="text-16" />
        <span class="pl-1">订阅</span>
      </button>
      <button class="btn btn-outline-warning mx-1" @click="unsubscribe" v-else>
        <volume-mute class="text-16" />
        <span class="pl-1">取消订阅</span>
      </button>
    </template>
    <template v-else>
      <span v-if="!item.has_subscribed" @click="subscribe">
        <volume-high class="text-gray-60 text-18 cursor-pointer" />
      </span>
      <span v-else @click="unsubscribe">
        <volume-mute class="text-blue text-18 cursor-pointer" />
      </span>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import VolumeMute from '@icons/volume-mute'
  import VolumeHigh from '@icons/volume-high'

  export default {
    name: 'subscribe-btn',
    components: {VolumeMute, VolumeHigh},
    props: {
      type: {
        type: String,
        default: 'nodes'
      },
      item: {
        type: Object,
        required: true
      },
      tag: {
        type: String,
        default: 'button'
      },
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    methods: {
      async subscribe() {
        if (!this.currentUser['id']) {
          this.$router.push({name: 'auth.login'})
        }

        await this.api(`${this.type}/${this.$route.params.id}/subscribe`).post()

        this.item.has_subscribed = true
      },
      async unsubscribe() {
        await this.api(`${this.type}/${this.$route.params.id}/unsubscribe`).post()

        this.item.has_subscribed = false
      }
    }
  }
</script>
