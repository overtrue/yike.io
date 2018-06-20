<template>
  <div class="page-user-show" v-if="user.id">
    <header class="page-header bg-grey-blue py-4 text-white">
      <div class="bg-image"><img src="/banners/sunrise.jpg" alt=""></div>
    </header>
    <div class="bg-white">
      <div class="nav nav-tab-line justify-content-center align-items-center container text-center shadow-6">
        <div class="nav-item user-avatar">
          <img :src="user.avatar" alt="User avatar" class="avatar-200"/>
        </div>
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
        <div class="nav-item d-flex justify-content-end">
          <template v-if="currentUser && currentUser.id != user.id">
            <follow-btn :user="user"></follow-btn>
          </template>
        </div>
      </div>
    </div>

    <div class="container pt-4">
      <div class="row">
        <div class="col-md-3">
          <h3 class="mb-0">{{ user.name }}</h3>
          <div class="text-gray-50">@{{ user.username }}</div>
          <div class="py-1">{{ user.bio }}</div>
          <div class="extends text-gray-50">
            <div v-if="user.extends.location"><map-maker-icon class="text-gray-70 mr-1"></map-maker-icon>{{ user.extends.location }}</div>
            <div v-if="user.extends.company"><domain-icon class="text-gray-70 mr-1"></domain-icon>{{ user.extends.company }}</div>
            <div v-if="user.extends.home_url"><link-icon class="text-gray-70 mr-1"></link-icon> <a :href="user.extends.home_url">{{ user.extends.home_url }}</a></div>
            <div><calendar-check-icon class="text-gray-70 mr-1"></calendar-check-icon>加入于 {{ user.created_at_timeago }}</div>
            <div class="mt-1"><user-social-btns :user="user" :spacing="2"></user-social-btns></div>
          </div>
        </div>
        <div class="col-md-6">
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

<style scoped lang="scss">
  .page-user-show {
    .bg-image {
      overflow: hidden;
    }
    .page-header {
      height: 50vh;
      overflow-y: visible;
    }
    .nav {
      background: transparent;
      position: relative;
      box-shadow: none;
    }
    .user-avatar {
      position: absolute;
      top: -120px;
      border-radius: 100%;
      border: 5px solid #fff;
      left: 0;
      z-index: 99;
    }
  }
</style>
