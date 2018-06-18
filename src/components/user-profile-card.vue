<template>
  <div class="user-card box text-center" v-if="user">
    <div>
      <router-link :to="{name:'users.show', params: {username: user.username}}">
        <img :src="user.avatar" class="avatar-80" :alt="user.name"/>
      </router-link>
    </div>
    <h6 class="mt-1 mb-0 text-22 d-inline-block"><router-link :to="{name:'users.show', params: {username: user.username}}">{{ user.name }}</router-link></h6>
    <div><router-link class="text-12 text-muted" :to="{name: 'users.show', params: {username: user.username}}">@{{ user.username }}</router-link></div>
    <div class="text-gray-70">
      <div class="py-1">{{ user.bio }}</div>
    </div>
    <user-social-btns :user="user" :size="12" :spacing="2" class="flex-wrap justify-content-center"></user-social-btns>
    <div class="d-flex mt-2 pt-2 border-top align-items-center justify-content-between">
      <router-link to="{name: 'users.following', params: {username: user.username}}">
        <div class="text-20 text-gray-40">{{ user.cache.followings_count }}</div>
        <div class="text-gray-70">关注</div>
      </router-link>
      <router-link to="{name: 'users.followers', params: {username: user.username}}">
        <div class="text-20 text-gray-40">{{ user.cache.followers_count }}</div>
        <div class="text-gray-70">粉丝</div>
      </router-link>
      <router-link to="{name: 'users.threads', params: {username: user.username}}">
        <div class="text-20 text-gray-40">{{ user.cache.threads_count }}</div>
        <div class="text-gray-70">讨论</div>
      </router-link>
    </div>
    <follow-btn :user="user" class="mt-2 ml-auto"></follow-btn>
  </div>
</template>

<script>
  import UserMedia from "@components/user-media"
  import FollowBtn from '@components/follow-btn'
  import MapMakerIcon from "@icons/map-marker"
  import PlusIcon from "@icons/plus"
  import UserSocialBtns from '@components/user-social-btns'

  export default {
    name: 'user-profile-card',
    props: {
      user:{
        type: Object,
        required: true
      }
    },
    components: {UserMedia, FollowBtn, MapMakerIcon, PlusIcon, UserSocialBtns}
  }
</script>

<style scoped>
</style>
