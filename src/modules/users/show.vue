<template>
  <div class="page-user-show" v-if="user.id">
    <header class="page-header bg-grey-blue py-4 text-white">
      <div class="bg-image"><img src="/banners/sunrise.jpg" alt=""></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 d-flex align-items-center">
            <img :src="user.avatar" alt="User avatar" class="avatar-120"/>

            <div class="px-md-4">
              <h4>{{ user.name }}</h4>
              <p>{{ user.bio }}</p>
              <div class="text-white">
                <router-link :to="{ name: 'users.followers' }" class="text-white mr-1">{{ user.cache.followers_count }} <span class="text-white-60">粉丝</span></router-link>
                <router-link :to="{ name: 'users.following' }" class="text-white mx-1">{{ user.cache.followings_count }} <span class="text-white-60">关注</span></router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-end">
            <template v-if="currentUser && currentUser.id != user.id">
              <follow-btn :user="user"></follow-btn>
            </template>
            <user-social-btns :user="user"></user-social-btns>
          </div>
        </div>
      </div>
    </header>
    <div class="nav nav-tab-line justify-content-center bg-white text-center shadow-6">
      <div class="nav-item">
        <router-link :to="{ name: 'users.show' }" class="nav-link" exact>最新动态</router-link>
      </div>
      <div class="nav-item">
        <router-link :to="{ name: 'users.threads' }" class="nav-link" exact>讨论 <span class="text-gray-70 pl-1">{{ user.cache.comments_count }}</span></router-link>
      </div>
      <!--<div class="nav-item"><a href="#" class="nav-link">回复 234</a></div>-->
      <div class="nav-item">
        <router-link :to="{ name: 'users.following' }" class="nav-link" exact>关注 <span class="text-gray-70 pl-1">{{ user.followings_count }}</span></router-link>
      </div>
      <div class="nav-item">
        <router-link :to="{ name: 'users.followers' }" class="nav-link" exact>粉丝 <span class="text-gray-70 pl-1">{{ user.followers_count }}</span></router-link>
      </div>
    </div>

    <div class="container pt-4">
      <div class="row">
        <div class="col-md-9">
          <router-view :user="user"></router-view>
        </div>
        <div class="col-md-3">
          <hot-tags></hot-tags>
          <new-users class="mt-2"></new-users>
          <user-ranking class="mt-2"></user-ranking>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Resource from '@utils/resource'

  import HotTags from "@components/hot-tags"
  import UserRanking from "@components/user-ranking"
  import NewUsers from "@components/new-users"
  import FollowBtn from '@components/follow-btn'
  import UserSocialBtns from '@components/user-social-btns'

  export default {
    name: 'show',
    components: {FollowBtn, HotTags, UserRanking, NewUsers, UserSocialBtns},
    data() {
      return {
        user: {}
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    beforeRouteUpdate(to, from, next) {
      if (to.params.username != from.params.username) {
        this.getUser(to.params.username)
      }

      next()
    },
    created() {
      this.getUser(this.$route.params.username)
    },
    methods: {
      async getUser(id) {
        let resource = new Resource(`users/${id}`)

        this.user = await resource.get().catch(() => {
          this.$router.replace({name: 'pages.not-found'})
        })
      },
      async follow() {
        let resource = new Resource(`user/${this.$route.params.username}/follow`)

        await resource.post()

        this.user.has_followed = true
        this.user.followers_count++
      },
      async unfollow() {
        let resource = new Resource(`user/${this.$route.params.username}/unfollow`)

        await resource.post()

        this.user.has_followed = false
        this.user.followers_count--
      }
    }
  }
</script>
