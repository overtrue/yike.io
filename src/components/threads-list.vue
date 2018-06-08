<template>
  <div class="threads-items">
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex align-items-center justify-content-between cursor-pointer"
          v-for="item in threads.data" :key="item.id" @click="$router.push({name: 'threads.show', params:{id: item.id}})">
        <div class="d-flex align-items-center">
          <a href="#" class="mr-2"><img :src="item.user.avatar" alt="" class="avatar-30"></a>
          <div class="text-gray-50">{{ item.title }}</div>
        </div>
        <div class="ml-auto d-flex align-items-center justify-content-end">
          <div class="text-gray-60 d-flex justify-content-between align-items-center">
            <a class="p-1"><like-icon></like-icon> {{ item.cache.likes_count }}</a>
            <a class="p-1"><comment-icon></comment-icon> {{ item.cache.comments_count }}</a>
            <a class="p-1"><view-icon></view-icon> {{ item.cache.views_count }}</a>
          </div>
          <div class="ml-1 text-gray-60"><small>{{ item.created_at_timeago }}</small></div>
        </div>
      </li>
      <li class="list-group-item d-flex align-items-center justify-content-center p-5" v-if="threads['data'] && threads.data.length == 0">
        空空如也~
      </li>
    </ul>
    <paginator :meta="threads.meta" @change="handleChange"></paginator>
  </div>
</template>

<script>
  import Paginator from "@components/paginator"
  import LikeIcon from "@icons/heart"
  import CommentIcon from "@icons/comment"
  import ViewIcon from "@icons/eye"

  export default {
    name: 'threads-list',
    components: {LikeIcon, CommentIcon, ViewIcon, Paginator},
    props: {
      threads: {
        type: Object,
        default() {
          return {
            data: [],
            meta: {
              total: 1,
              per_page: 1,
              from: 1,
              to: 1,
              last_page: 1,
              current_page: 1
            }
          }
        }
      }
    },
    methods: {
      handleChange(page) {
        this.$emit('page-changed', page)
      }
    }
  }
</script>

<style scoped>

</style>
