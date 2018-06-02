<template>
  <div class="page-user-show">
    <header class="page-header bg-grey-blue py-4 text-white">
      <div class="bg-image"><img src="https://source.unsplash.com/random/1440x300" alt=""></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 d-flex align-items-center">
            <img :src="currentUser.avatar" alt="User avatar" class="avatar-120"/>

            <div class="px-md-4">
              <h4>{{ currentUser.name }}</h4>
              <p>{{ currentUser.bio }}</p>
              <div class="text-white">
                <router-link :to="{ name: 'users.followers' }" class="text-white mr-1">124 <span class="text-white-60">粉丝</span></router-link>
                <router-link :to="{ name: 'users.following' }" class="text-white mx-1">84 <span class="text-white-60">关注</span></router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-end">
            <button class="btn btn-outline-light mx-1">关注 TA</button>
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
        <router-link :to="{ name: 'users.following' }" class="nav-link" exact>关注 21</router-link>
      </div>
      <div class="nav-item">
        <router-link :to="{ name: 'users.followers' }" class="nav-link" exact>粉丝 111</router-link>
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

  import TwitterIcon from '@icons/twitter'
  import FacebookIcon from '@icons/facebook'
  import InstagramIcon from '@icons/instagram'

  import HotTags from "@components/hot-tags"
  import UserRanking from "@components/user-ranking"
  import NewUsers from "@components/new-users"

  export default {
    name: 'show',
    components: {TwitterIcon, FacebookIcon, InstagramIcon, HotTags, UserRanking, NewUsers},
    computed: {
      ...mapGetters(['currentUser'])
    }
  }
</script>
