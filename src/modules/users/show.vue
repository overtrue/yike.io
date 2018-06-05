<template>
  <div class="page-user-show">
    <header class="page-header bg-grey-blue py-4 text-white">
      <div class="bg-image"><img src="https://source.unsplash.com/random/1440x300" alt=""></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 d-flex align-items-center">
            <img :src="user.avatar" alt="User avatar" class="avatar-120"/>

            <div class="px-md-4">
              <h4>{{ user.name }}</h4>
              <p>{{ user.bio }}</p>
              <div class="text-white">
                <router-link :to="{ name: 'users.followers' }" class="text-white mr-1">{{ user.followers_count }} <span class="text-white-60">粉丝</span></router-link>
                <router-link :to="{ name: 'users.following' }" class="text-white mx-1">{{ user.followings_count }} <span class="text-white-60">关注</span></router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-end">
            <template v-if="currentUser && currentUser.id != user.id">
              <button class="btn btn-outline-light mx-1" @click="follow" v-if="!user.has_followed">关注 TA</button>
              <button class="btn btn-outline-warning mx-1" @click="unfollow" v-else>取消关注</button>
            </template>
            <a href="" class="text-20 btn mx-1 btn-icon btn-twitter">
              <twitter-icon></twitter-icon>
            </a>
            <a href="" class="text-20 btn mx-1 btn-icon btn-facebook">
              <facebook-icon></facebook-icon>
            </a>
            <a href="" class="text-20 btn mx-1 btn-icon btn-dark">
              <instagram-icon></instagram-icon>
            </a>
          </div>
        </div>
      </div>
    </header>
    <div class="nav nav-tab-line justify-content-center bg-white text-center shadow-6">
      <div class="nav-item">
        <router-link :to="{ name: 'users.show' }" class="nav-link" exact>最新动态</router-link>
      </div>
      <div class="nav-item">
        <router-link :to="{ name: 'users.threads' }" class="nav-link" exact>讨论 12</router-link>
      </div>
      <!--<div class="nav-item"><a href="#" class="nav-link">回复 234</a></div>-->
      <div class="nav-item">
        <router-link :to="{ name: 'users.following' }" class="nav-link" exact>关注 {{ user.followings_count }}</router-link>
      </div>
      <div class="nav-item">
        <router-link :to="{ name: 'users.followers' }" class="nav-link" exact>粉丝 {{ user.followers_count }}</router-link>
      </div>
    </div>

    <div class="container pt-4">
      <div class="row">
        <div class="col-md-9">
          <router-view></router-view>
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

  import TwitterIcon from '@icons/twitter'
  import FacebookIcon from '@icons/facebook'
  import InstagramIcon from '@icons/instagram'

  import HotTags from "@components/hot-tags"
  import UserRanking from "@components/user-ranking"
  import NewUsers from "@components/new-users"

  export default {
    name: 'show',
    components: {TwitterIcon, FacebookIcon, InstagramIcon, HotTags, UserRanking, NewUsers},
    data() {
      return {
        user: {}
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    beforeRouteUpdate(to, from, next) {
      if (to.params.id != from.params.id) {
        this.getUser(to.params.id)
      }

      next()
    },
    created() {
      this.getUser(this.$route.params.id)
    },
    methods: {
      async getUser(id) {
        let resource = new Resource(`user/${id}`)

        this.user = await resource.get()
      },
      async follow() {
        let resource = new Resource(`user/${this.$route.params.id}/follow`)

        await resource.post()

        this.user.has_followed = true
        this.user.followers_count++
      },
      async unfollow() {
        let resource = new Resource(`user/${this.$route.params.id}/unfollow`)

        await resource.post()

        this.user.has_followed = false
        this.user.followers_count--
      }
    }
  }
</script>
