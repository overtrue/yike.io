<template>
  <div class="page-user-show" v-if="user.id">
    <header class="page-header bg-grey-blue py-4 text-white">
      <div class="bg-image"><img src="/banners/sunrise.jpg" alt=""></div>
    </header>
    <div class="user-show-navbar bg-white">
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-lg-2 col-md-3 d-flex align-items-center">
            <img :src="user.avatar" alt="User avatar" :class="{'avatar-200 position-absolute mb-2': !navFixed, 'avatar-40': navFixed}" />
            <div>
              <div class="ml-1 lh-1" :class="navFixed ? 'text-16' : 'text-22'">{{ user.name }}</div>
              <div class="text-gray-50 ml-1">@{{ user.username }}</div>
            </div>
          </div>
          <div class="col-lg-7 col-md-6 nav nav-tab-line justify-content-center text-center shadow-6">
            <div class="nav-item">
              <router-link :to="{ name: 'users.show' }" class="nav-link" exact>最新动态</router-link>
            </div>
            <div class="nav-item">
              <router-link :to="{ name: 'users.threads' }" class="nav-link" exact>讨论 <span class="text-gray-70 pl-1">{{ user.cache.comments_count }}</span></router-link>
            </div>
            <!--<div class="nav-item"><a href="#" class="nav-link">回复 234</a></div>-->
            <div class="nav-item">
              <router-link :to="{ name: 'users.following' }" class="nav-link" exact>关注 <span class="text-gray-70 pl-1">{{ user.cache.followings_count }}</span></router-link>
            </div>
            <div class="nav-item">
              <router-link :to="{ name: 'users.followers' }" class="nav-link" exact>粉丝 <span class="text-gray-70 pl-1">{{ user.cache.followers_count }}</span></router-link>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-end col-lg-3 col-md-3">
            <template v-if="currentUser && currentUser.id != user.id">
              <follow-btn :user="user"></follow-btn>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="container pt-4">
      <div class="row">
        <div class="col-lg-2 col-md-3">
          <h3 class="mb-1">{{ user.name }}</h3>
          <div class="text-gray-50 text-16">@{{ user.username }}</div>
          <div class="my-1">{{ user.bio }}</div>
          <div class="extends text-gray-50">
            <div class="pt-1" v-if="user.extends.location"><map-maker-icon class="text-gray-70 mr-1"></map-maker-icon>{{ user.extends.location }}</div>
            <div class="pt-1" v-if="user.extends.company"><domain-icon class="text-gray-70 mr-1"></domain-icon>{{ user.extends.company }}</div>
            <div class="pt-1" v-if="user.extends.home_url"><link-icon class="text-gray-70 mr-1"></link-icon> <a :href="user.extends.home_url">{{ user.extends.home_url }}</a></div>
            <div class="pt-1"><calendar-check-icon class="text-gray-70 mr-1"></calendar-check-icon>加入于 {{ user.created_at_timeago }}</div>
            <div class="pt-2"><user-social-btns :user="user" :spacing="2"></user-social-btns></div>
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
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
  import FollowBtn from '@components/buttons/follow-btn'
  import MapMakerIcon from "@icons/map-marker"
  import DomainIcon from "@icons/domain"
  import LinkIcon from "@icons/link"
  import CalendarCheckIcon from "@icons/calendar-check"
  import UserSocialBtns from '@components/user-social-btns'

  export default {
    name: 'show',
    components: {FollowBtn, DomainIcon, CalendarCheckIcon, LinkIcon, MapMakerIcon, HotTags, UserRanking, NewUsers, UserSocialBtns},
    data() {
      return {
        user: {},
        navFixed: false
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
      this.$nextTick(this.registerEventListener)
    },
    methods: {
      async getUser(id) {
        let resource = new Resource(`users/${id}`)

        this.user = await resource.get().catch(() => {
          this.$router.replace({name: 'pages.not-found'})
        })
      },
      registerEventListener() {
        let vm = this
        window.addEventListener('scroll', () => {
          if (vm.$route.name.substr(0, 5) == 'users') {
            let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

            this.navFixed = top >= document.querySelector('.user-show-navbar').offsetTop
          }
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

<style scoped lang="scss">
  .page-user-show {
    .bg-image {
      overflow: hidden;

      img {
        width: 100%;
        height: auto;
      }
    }
    .page-header {
      height: 40vh;
      overflow-y: visible;
    }
    .user-show-navbar {
      position: sticky;
      top: -1px;
      z-index: 999;
      .nav {
        position: relative;
        background: transparent;
        box-shadow: none;
      }
    }
    .avatar-200 {
      bottom: -50px;
      border-radius: 100%;
      border: 5px solid #fff;
      left: 0;
      z-index: 99;
    }
  }
</style>
