<template>
  <div class="page-user-show" v-if="user.id">
    <header class="page-header d-flex align-items-end bg-grey-blue py-2" style="background-image: url(/banners/shanghai.jpg)">
      <div class="user-profile container position-relative w-100 text-white p-2 d-md-flex flex-row align-items-center">
        <img :src="user.avatar" alt="User avatar" class="avatar avatar-120" />
        <div class="ml-md-3">
          <h1 class="mt-2 mb-0">{{ user.name }} <a class="ml-md-1 d-block d-md-inline text-gray-90 text-16">@{{ user.username }}</a></h1>
          <div class="my-1">{{ user.bio }}</div>

          <div class="extends text-white d-none d-md-block d-lg-flex">
            <div class="mr-1" v-if="user.extends.location"><map-maker-icon class="mr-1"></map-maker-icon>{{ user.extends.location }}</div>
            <div class="mr-1" v-if="user.extends.company"><domain-icon class="mr-1"></domain-icon>{{ user.extends.company }}</div>
            <div class="mr-1" v-if="user.extends.home_url"><link-icon class="mr-1"></link-icon> <a class="text-white" :href="user.extends.home_url">{{ user.extends.home_url }}</a></div>
            <div class="mr-1"><calendar-check-icon class="mr-1"></calendar-check-icon>加入于 {{ user.created_at_timeago }}</div>
          </div>
          <div class="pt-2"><user-social-btns :user="user" :spacing="2"></user-social-btns></div>
        </div>
        <template v-if="currentUser && currentUser.id != user.id">
          <follow-btn :item="user" class="d-inline-block ml-md-auto"></follow-btn>
        </template>
      </div>
    </header>
    <div class="user-show-navbar bg-white">
      <div class="container">
        <div class="nav nav-tab-line justify-content-center text-center shadow-6 align-items-stretch">
          <div class="nav-item">
            <router-link :to="{ name: 'users.show' }" class="nav-link" exact>最新动态</router-link>
          </div>
          <div class="nav-item">
            <router-link :to="{ name: 'users.threads' }" class="nav-link" exact>讨论 <span class="text-gray-70 pl-1">{{ user.cache.threads_count }}</span></router-link>
          </div>
          <!--<div class="nav-item"><a href="#" class="nav-link">回复 234</a></div>-->
          <div class="nav-item">
            <router-link :to="{ name: 'users.following' }" class="nav-link" exact>关注 <span class="text-gray-70 pl-1">{{ user.cache.followings_count }}</span></router-link>
          </div>
          <div class="nav-item">
            <router-link :to="{ name: 'users.followers' }" class="nav-link" exact>粉丝 <span class="text-gray-70 pl-1">{{ user.cache.followers_count }}</span></router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container pt-4">
      <div class="row">
        <div class="col-lg-9">
          <router-view></router-view>
        </div>
        <div class="col-lg-3">
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
      min-height: 40vh;
      overflow-y: visible;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
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
    .avatar {
      border: 2px solid #fff;
    }
    .user-profile {
      z-index: 2;
      text-shadow: 1px 1px 10px #3D465E;
    }

    @media (max-width: 768px) {
      .user-profile {
        text-align: center;
      }
      .user-social-btns {
        justify-content: center !important;
      }
    }
  }
</style>
