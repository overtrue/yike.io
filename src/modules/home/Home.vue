<template>
  <div class="page-home">
    <banner name="home"></banner>

    <div class="row mt-3">
      <div class="col-md-9">
        <div class="box box-flush">
          <div class="box-body">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#">综合讨论</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">精选</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">零回复</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">最新发布</a>
              </li>
            </ul>
          </div>

          <div class="threads-items">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center justify-content-between cursor-pointer" v-for="i in 10" @click="$router.push({name: 'threads.show', params:{id: 1}})">
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
        </div>
      </div>
      <div class="col-md-3">
        <hot-tags></hot-tags>
        <user-ranking class="mt-2"></user-ranking>
        <new-users class="mt-2"></new-users>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from "@components/Banner"
  import HotTags from "@components/HotTags"
  import UserRanking from "@components/UserRanking"
  import NewUsers from "@components/NewUsers"
  import LikeIcon from "@icons/heart"
  import CommentIcon from "@icons/comment"
  import ViewIcon from "@icons/eye"

  export default {
    components: {Banner, HotTags, UserRanking, NewUsers, LikeIcon, CommentIcon, ViewIcon}
  }
</script>
