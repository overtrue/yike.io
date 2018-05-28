<template>
  <div class="threads-items">
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex align-items-center justify-content-between cursor-pointer" v-for="i in 20" @click="$router.push({name: 'threads.show', params:{id: 1}})">
        <div class="d-flex align-items-center">
          <a href="#" class="mr-2"><img src="https://source.unsplash.com/random/60x60" alt="" class="avatar-30"></a>
          <div class="text-gray-50">这几天找工作遇到的面试题目，20 多家公司 100 多道题目</div>
        </div>
        <div class="ml-auto d-flex align-items-center justify-content-end">
          <div class="text-gray-60 d-flex justify-content-between align-items-center">
            <a class="p-1"><like-icon></like-icon> 24</a>
            <a class="p-1"><comment-icon></comment-icon> 189</a>
            <a class="p-1"><view-icon></view-icon> 2804</a>
          </div>
          <div class="ml-1 text-gray-60"><small>30分钟前</small></div>
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
    components: {LikeIcon, CommentIcon, ViewIcon}
  }
</script>

<style scoped>

</style>
