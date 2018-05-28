<template>
  <div class="user-media d-flex" v-if="type == 'default'">
    <a href="" @click="$router.push({name: 'users.show', params:{id: 1}})">
      <img src="https://pigjian.com/images/default_avatar.png" class="avatar-40" alt=""/>
    </a>
    <div class="ml-2">
      <div>
        <a href="#" @click="$router.push({name: 'users.show', params:{id: 1}})">
          <h6 class="mb-0 text-black-50 text-13 d-inline-block">安小超超超</h6>
          <slot name="name-appends"></slot>
        </a>
      </div>
      <slot name="description">
        <div class="text-12 text-gray-70">Tencent Inc.</div>
      </slot>
    </div>
    <slot name="appends"></slot>
  </div>

  <div class="user-media text-center d-inline-block p-1" v-else>
    <a href="#">
      <img src="https://pigjian.com/images/default_avatar.png" class="avatar-40" alt="">
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
      }
    }
  }
</script>
