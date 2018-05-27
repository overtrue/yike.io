<template>
  <div class="user-card align-items-center d-flex" v-if="type == 'default'">
    <a href=""><img src="https://pigjian.com/images/default_avatar.png" class="avatar-40" alt=""></a>
    <div class="ml-2" v-if="!onlyAvatar">
      <a href="#"><h6 class="mb-0 text-black-50 text-13">安小超超超</h6></a>
      <slot name="description"><div class="text-12">Tencent Inc.</div></slot>
    </div>
    <slot name="appends"></slot>
  </div>

  <div class="user-card text-center d-inline-block p-1" v-else>
    <a href="#">
      <img src="https://pigjian.com/images/default_avatar.png" class="avatar-40" alt="">
      <slot></slot>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'UserCard',
    props: {
      type: {
        type: String,
        default: 'default',
      }
    }
  }
</script>
