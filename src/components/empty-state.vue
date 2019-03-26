<template>
  <div class="text-center p-5 text-gray-50">
    <div class="container">
      <h1 class="display-4">
        <slot name="icon">
          <empty-icon></empty-icon>
        </slot>
      </h1>
      <h2>
        <slot name="title">{{ title }}</slot>
      </h2>
      <p class="lead">
        <slot name="message">{{ message }}</slot>
      </p>
    </div>
  </div>
</template>

<script>
import EmptyIcon from '$icons/TooltipOutline'

export default {
  name: 'empty-state',
  components: { EmptyIcon },
  props: {
    title: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: '空空如也~~~'
    }
  }
}
</script>

<style scoped>
</style>
