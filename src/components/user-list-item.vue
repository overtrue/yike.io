<template>
  <div class="user-media d-flex align-items-center">
    <router-link :to="{name: 'users.show', params:{id: user.username}}">
      <img :src="user.avatar" class="avatar-40" :alt="user.name"/>
    </router-link>
    <div class="ml-2">
      <div>
        <router-link tag="a" class="d-inline-block" :to="{name: 'users.show', params: {id: user.username}}">
          <slot name="name"><h5 class="mb-0 text-gray-50">{{ user.name }}</h5></slot>
        </router-link>
        <slot name="name-appends">
          <router-link tag="a" class="ml-1 text-muted text-12 d-inline-block" :to="{name: 'users.show', params: {id: user.username}}">
            {{ user.username }}
          </router-link>
        </slot>
      </div>
      <slot name="description">
        <div class="text-12 text-gray-70">{{ user.bio }}</div>
      </slot>
    </div>
    <slot name="appends" :data="user">
      <follow-btn :user="user" :simple="true" class="ml-auto"></follow-btn>
    </slot>
  </div>
</template>

<script>
  import FollowBtn from '@components/follow-btn'
  export default {
    name: 'user-list-item',
    components: {FollowBtn},
    props: {
      user: {
        type: Object
      },
    }
  }
</script>
