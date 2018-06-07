<template>
    <div class="user-card box d-inline-block" v-if="user">
        <user-media :user="user">
          <template slot="name-appends">
            <follow-btn :user="user"></follow-btn>
          </template>
          <template slot="description">
            <router-link class="text-12" :to="{name: 'users.show', params: {id: user.id}}">@{{ user.username }}</router-link>
          </template>
        </user-media>
        <div class="text-gray-70 py-2">{{ user.bio }}</div>
        <div><map-maker-icon></map-maker-icon> Beijing, China</div>
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
  .user-card { min-width: 20vw; }
</style>
