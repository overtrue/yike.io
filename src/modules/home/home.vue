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

          <threads-list></threads-list>
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
  import Banner from "@components/banner"
  import HotTags from "@components/hot-tags"
  import UserRanking from "@components/user-ranking"
  import NewUsers from "@components/new-users"
  import ThreadsList from "@components/threads-list"

  export default {
    components: {Banner, HotTags, UserRanking, NewUsers, ThreadsList}
  }
</script>
