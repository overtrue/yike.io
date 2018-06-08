<template>
  <div v-if="this.currentUser.id">
    <button class="btn btn-sm btn-tiffany" @click="subscribe" v-if="!item.has_subscribed">
      <volume-high />
      <span class="pl-1">订阅</span>
    </button>
    <template v-else>
      <button class="btn btn-sm" @click="unsubscribe"
              :class="{'btn-tiffany': !hovering, 'btn-danger': hovering}"
              @mouseenter="hovering=true"
              @mouseleave="hovering=false">
        <volume-mute v-if="hovering"></volume-mute>
        <check-icon v-else></check-icon>
        <span class="pl-1">{{ hovering ? '取消订阅' : '正在订阅'}}</span>
      </button>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import VolumeMute from '@icons/volume-mute'
  import VolumeHigh from '@icons/volume-high'
  import CheckIcon from '@icons/check'

  export default {
    name: 'subscribe-btn',
    components: {VolumeMute, VolumeHigh, CheckIcon},
    props: {
      type: {
        type: String,
        default: 'nodes'
      },
      item: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        hovering: false,
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    methods: {
      async subscribe() {
        if (!this.currentUser.id) {
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
