<template>
  <div class="user-card d-flex align-items-center">
    <img src="https://pigjian.com/images/default_avatar.png" class="avatar-40" alt="">
    <div class="ml-2">
      <h5 class="mb-0">安小超超超</h5>
      <slot name="description"><small>3天前 &middot; 5 分钟</small></slot>
    </div>
    <slot name="appends"></slot>
  </div>
</template>
