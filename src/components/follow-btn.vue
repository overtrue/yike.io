<template>
  <div v-if="currentUser && currentUser.id != user.id">
    <template v-if="!followed">
      <template v-if="simple"><button @click="follow" class="btn btn-ghost btn-icon ml-auto" title="关注 TA"><plus-icon></plus-icon></button></template>
      <template v-else><button @click="follow" class="btn btn-outline-teal-blue mx-1"><plus-icon></plus-icon> 关注 TA</button></template>
    </template>
    <template v-else>
      <template v-if="simple">
        <button @click="unfollow"
              class="btn btn-icon ml-auto"
                :class="{'btn-ghost': !hovering, 'btn-danger': hovering}"
                @mouseenter="hovering=true"
                @mouseleave="hovering=false" title="取消关注 TA">
        <check-icon v-if="!hovering"></check-icon><close-icon v-else></close-icon>
      </button></template>
      <template v-else>
        <button @click="unfollow" class="btn mx-1"
                :class="{'btn-teal-blue': !hovering, 'btn-danger': hovering}"
                @mouseenter="hovering=true"
                @mouseleave="hovering=false" title="取消关注 TA">
          <check-icon v-if="!hovering"></check-icon><close-icon v-else></close-icon> {{ hovering ? '取消关注' : '正在关注' }}</button>
      </template>
    </template>
  </div>
</template>

<script>
  import localforage from 'localforage'
  import PlusIcon from '@icons/plus'
  import CheckIcon from '@icons/check'
  import CloseIcon from '@icons/close'
  import { mapGetters } from 'vuex'

  export default {
    name: 'follow-btn',
    components: { PlusIcon, CheckIcon, CloseIcon },
    props: {
      user: {
        type: Object,
        required: true
      },
      simple: false
    },
    data() {
      return {
        followingUserIds: [],
        cacheKey: 'user.followings',
        hovering: false,
      }
    },
    computed: {
      ...mapGetters(['currentUser']),
      followed() {
        return this.followingUserIds.indexOf(this.user.id) > -1
      }
    },
    mounted() {
      this.syncCachedFollowings()
    },
    methods: {
      async follow() {
        if (!this.currentUser['id']) {
          this.$router.push({name: 'auth.login'})
        }

        await this.api(`user/${this.user.id}/follow`).post().then(() => {
          this.$message.success('已关注')
        })

        this.user.followers_count++
        this.refreshCachedFollowings()
      },
      async unfollow() {
        await this.api(`user/${this.user.id}/unfollow`).post().then(() => {
          this.$message.success('已取消关注')
        })

        this.user.followers_count--
        this.refreshCachedFollowings()
      },
      syncCachedFollowings() {
        return localforage.getItem(this.cacheKey, (err, followingUserIds) => {
          if (err || !followingUserIds) {
            this.loadFollowings()
          }
          this.followingUserIds = followingUserIds
        })
      },
      refreshCachedFollowings() {
        return localforage.removeItem(this.cacheKey).then(this.loadFollowings).then(this.syncCachedFollowings)
      },
      loadFollowings() {
        return this.api(`user/${this.currentUser.id}/followings`).get().then((followings) => {
          let followingUserIds = followings.data.map(user => user.id)
          this.followingUserIds = followingUserIds
          localforage.setItem(this.cacheKey, followingUserIds)
        })
      }
    }
  }
</script>

<style scoped>

</style>
