<template>
  <div class="user-media d-flex" v-if="type == 'default'">
    <router-link :to="{name: 'users.show', params:{id: user.id}}">
      <img :src="user.avatar" class="avatar-40" :alt="user.name"/>
    </router-link>
    <div class="ml-2">
      <div>
        <router-link :to="{name: 'users.show', params: {id: user.id}}">
          <slot name="name"><h6 class="mb-0 d-inline-block" :class="nameClasses">{{ user.name }}</h6></slot>
          <slot name="name-appends"></slot>
        </router-link>
      </div>
      <slot name="description">
        <div class="text-12 text-gray-70">{{ user.bio }}</div>
      </slot>
    </div>
    <slot name="appends" :data="user"></slot>
  </div>

  <div class="user-media text-center d-inline-block p-1" v-else>
    <a href="#">
      <img :src="user.avatar" class="avatar-40" :alt="user.username">
      <slot></slot>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'UserMedia',
    props: {
      type: {
        type: String,
        default: 'default',
      },
      user: {
        type: Object
      },
      nameClasses: {
        type: String,
        default: 'text-black-50 text-14'
      }
    }
  }
</script>
