<template>
  <div class="text-center p-5 text-gray-40">
    <div class="display-1">
      <alert-circle-icon />
    </div>
    <div class="display-2">404</div>
    <div class="display-4">页面未找到~</div>
  </div>
</template>

<script>
import AlertCircleIcon from '$icons/AlertCircle'
export default {
  name: 'not-found',
  components: { AlertCircleIcon }
}
</script>

<style scoped>
</style>
