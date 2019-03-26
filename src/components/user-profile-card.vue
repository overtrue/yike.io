<template>
  <div class="user-card box box-flush text-center" v-if="user">
    <div class="box-body">
      <div>
        <router-link :to="{name:'users.show', params: {username: user.username}}">
          <img :src="user.avatar" class="avatar-80" :alt="user.name">
        </router-link>
      </div>
      <h6 class="mt-1 mb-0 text-22 d-inline-block">
        <router-link :to="{name:'users.show', params: {username: user.username}}">{{ user.name }}</router-link>
      </h6>
      <div>
        <router-link
          class="text-12 text-muted"
          :to="{name: 'users.show', params: {username: user.username}}"
        >@{{ user.username }}</router-link>
      </div>
      <div class="text-gray-50">
        <div class="py-1">{{ user.bio }}</div>
      </div>
      <user-social-btns
        :user="user"
        :size="12"
        :spacing="2"
        class="flex-wrap justify-content-center"
      ></user-social-btns>
    </div>
    <follow-btn :item="user" class="pb-2 ml-auto"></follow-btn>
  </div>
</template>

<script>
import UserMedia from '$components/user-media'
import FollowBtn from '$components/buttons/follow-btn'
import PlusIcon from '$icons/Plus'
import UserSocialBtns from '$components/user-social-btns'

export default {
  name: 'user-profile-card',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: { UserMedia, FollowBtn, PlusIcon, UserSocialBtns }
}
</script>

<style scoped>
</style>
