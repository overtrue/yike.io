<template>
  <div class="user-card box d-inline-block" v-if="user">
    <div class="d-flex">
      <router-link :to="{name:'users.show', params: {username: user.username}}">
        <img :src="user.avatar" class="avatar-40" :alt="user.name"/>
      </router-link>
      <div class="ml-2 d-flex flex-column">
        <router-link :to="{name:'users.show', params: {username: user.username}}">
          <h6 class="mb-0 text-16 d-inline-block">{{ user.name }}</h6>
        </router-link>
        <router-link class="text-12 text-muted" :to="{name: 'users.show', params: {id: user.username}}">@{{ user.username }}</router-link>
      </div>
      <follow-btn :user="user" class="ml-auto"></follow-btn>

    </div>
    <div class="text-gray-70">
      <div class="py-2">{{ user.bio }}</div>
      <div>
        <map-maker-icon></map-maker-icon>
        Beijing, China
      </div>
    </div>
  </div>
</template>

<script>
  import UserMedia from "@components/user-media"
  import FollowBtn from '@components/follow-btn'
  import MapMakerIcon from "@icons/map-marker"
  import PlusIcon from "@icons/plus"

  export default {
    name: 'UserCard',
    props: {
      user:{
        type: Object,
        required: true
      }
    },
    components: {UserMedia, FollowBtn, MapMakerIcon, PlusIcon}
  }
</script>

<style scoped>
  .user-card { min-width: 25vw; }
</style>
