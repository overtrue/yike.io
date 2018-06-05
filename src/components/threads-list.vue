<template>
  <div class="threads-items">
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex align-items-center justify-content-between cursor-pointer"
          v-for="item in threads" @click="$router.push({name: 'threads.show', params:{id: item.id}})">
        <div class="d-flex align-items-center">
          <a href="#" class="mr-2"><img :src="item.user.avatar" alt="" class="avatar-30"></a>
          <div class="text-gray-50">{{ item.title }}</div>
        </div>
        <div class="ml-auto d-flex align-items-center justify-content-end">
          <div class="text-gray-60 d-flex justify-content-between align-items-center">
            <a class="p-1"><like-icon></like-icon> 24</a>
            <a class="p-1"><comment-icon></comment-icon> 189</a>
            <a class="p-1"><view-icon></view-icon> 2804</a>
          </div>
          <div class="ml-1 text-gray-60"><small>{{ item.created_at_timeago }}</small></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import LikeIcon from "@icons/heart"
  import CommentIcon from "@icons/comment"
  import ViewIcon from "@icons/eye"

  export default {
    name: 'threads-list',
    components: {LikeIcon, CommentIcon, ViewIcon},
    props: {
      threads: []
    },
  }
</script>

<style scoped>

</style>
