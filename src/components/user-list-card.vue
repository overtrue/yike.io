<template>
  <div class="box box-flush text-gray-50" v-if="users.length > 0">
    <div class="box-body" v-if="title">
      <div class="d-flex align-items-center justify-content-between">
        <div class="text-13">{{ title }}</div>
        <!--<button class="btn btn-ghost btn-icon"><arrow-right></arrow-right></button>-->
      </div>
    </div>
    <ul class="plan-list px-2 pb-2" :class="{'pt-2':!title}">
      <user-media type="vertical w25" v-for="item in users" :key="item.id" :user="item"></user-media>
    </ul>
  </div>
</template>

<script>
import UserMedia from '$components/user-media'
import ArrowRight from '$icons/ArrowRight'

export default {
  name: 'user-list-card',
  components: { UserMedia, ArrowRight },
  props: {
    title: {
      type: String,
      default: null
    },
    users: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>
