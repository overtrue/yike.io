<template>
  <div class="user-card box" v-if="user">
    <div class="d-flex flex-md-row flex-column">
      <div class="d-flex align-items-center">
        <router-link :to="{name:'users.show', params: {username: user.username}}">
          <img :src="user.avatar" class="avatar-40" :alt="user.name">
        </router-link>
        <div class="ml-2">
          <router-link :to="{name:'users.show', params: {username: user.username}}">
            <h6 class="mb-0 text-16 d-inline-block">{{ user.name }}</h6>
          </router-link>
          <router-link
            class="text-12 ml-1 text-muted"
            :to="{name: 'users.show', params: {id: user.username}}"
          >@{{ user.username }}</router-link>
        </div>
      </div>
      <follow-btn :item="user" class="ml-md-auto mt-1 mtsm-0"></follow-btn>
    </div>
    <div class="text-gray-70">
      <div class="py-2">{{ user.bio }}</div>
      <div>
        <map-marker-icon></map-marker-icon>Beijing, China
      </div>
    </div>
  </div>
</template>

<script>
import UserMedia from '$components/user-media'
import FollowBtn from '$components/buttons/follow-btn'
import MapMarkerIcon from '$icons/MapMarker'
import PlusIcon from '$icons/Plus'

export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: { UserMedia, FollowBtn, MapMarkerIcon, PlusIcon }
}
</script>
