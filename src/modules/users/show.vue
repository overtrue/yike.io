<template>
  <div class="page-user-show">
    <header class="page-header bg-grey-blue py-4 text-white">
      <div class="bg-image"><img src="https://source.unsplash.com/random/1440x300" alt=""></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 d-flex align-items-center">
            <img src="https://source.unsplash.com/random/100x100" alt="User avatar" class="avatar-120"/>

            <div class="px-md-4">
              <h4>{{ currentUser.name }}</h4>
              <p>{{ currentUser.bio }}</p>
              <div class="text-white">
                <a href="#" class="text-white mr-1">124 <span class="text-white-60">粉丝</span></a>
                <a href="#" class="text-white mx-1">84 <span class="text-white-60">关注</span></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-end">
            <button class="btn btn-outline-light mx-1">关注 TA</button>
            <a href="" class="text-20 btn mx-1 btn-icon btn-twitter">
              <twitter-icon></twitter-icon>
            </a>
            <a href="" class="text-20 btn mx-1 btn-icon btn-facebook">
              <facebook-icon></facebook-icon>
            </a>
            <a href="" class="text-20 btn mx-1 btn-icon btn-dark">
              <instagram-icon></instagram-icon>
            </a>
          </div>
        </div>
      </div>
    </header>
    <nav class="nav justify-content-center py-2 bg-white text-center shadow-6">
      <div class="nav-item"><a href="#" class="nav-link active">最新动态</a></div>
      <div class="nav-item"><a href="#" class="nav-link text-gray-60">讨论 12</a></div>
      <div class="nav-item"><a href="#" class="nav-link text-gray-60">回复 234</a></div>
      <div class="nav-item"><a href="#" class="nav-link text-gray-60">关于</a></div>
    </nav>

    <div class="container pt-4">
      <div class="row">
        <div class="col-md-9">
          <ul class="timeline">
            <li class="timeline-item">
              <div class="timeline-heading">
                <user-media class="align-items-start">
                  <template slot="description"><small class="text-muted">3 分钟前</small></template>
                  <template slot="appends"><span class="text-gray-70 ml-2">评论了 <a href="#">《这是一篇测试文章》</a>：</span> </template>
                </user-media>
              </div>
              <div class="timeline-body">
                <div class="box cursor-pointer text-gray-50">
                  你这写得很棒哦老铁！一般我用的组件都没见过像您写得这么好用的，真是非常的棒棒哦！下次直接用你的了，哈哈。
                </div>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-heading">
                <user-media>
                  <template slot="description"><small class="text-muted">28 分钟前</small></template>
                  <template slot="appends"><span class="text-gray-70 ml-2">评论了 <a href="#">《求求大家帮忙看一下问题，找不到原因了》</a>：</span> </template>
                </user-media>
              </div>
              <div class="timeline-body">
                <div class="box cursor-pointer text-gray-50">大哥你第二段代码里少了一个分号你不晓得？</div>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-heading">
                <user-media>
                  <template slot="description"><small class="text-muted">1 天前</small></template>
                  <template slot="appends"><span class="text-gray-70 ml-2">发布了 <a href="#">《求解 stringObject.split(RegExp) 出现字符串分隔错误？》</a>：</span> </template>
                </user-media>
              </div>
              <div class="timeline-body">
                <div class="box cursor-pointer text-gray-50">
                  <div class="box-heading">string.split(RegExp)方法使用正则表达式分隔字符串，当正则表达式含有小括号()的时候翻个的字符串会出现错误，但是通过string.match(RegExp)的时候返回的值是我想要的是正确的
                    例如...</div>
                </div>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-heading">
                <user-media>
                  <template slot="description"><small class="text-muted">2 天前</small></template>
                  <template slot="appends"><span class="text-gray-70 ml-2">回复了 <a href="#">@overtrue</a> 的帖子 <a href="#">《求解 stringObject.split(RegExp) 出现字符串分隔错误？》</a>：</span> </template>
                </user-media>
              </div>
              <div class="timeline-body">
                <div class="box cursor-pointer text-gray-50">我擦，我的问题和你的一毛一样，请问兄弟问题解决了没有啊？😭😭😭</div>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-heading">
                <user-media>
                  <template slot="description"><small class="text-muted">4 天前</small></template>
                  <template slot="appends"><span class="text-gray-70 ml-2">关注了 <a href="#">@overtrue</a></span></template>
                </user-media>
              </div>
              <div class="timeline-body d-flex justify-content-between flex-wrap">
                <user-card></user-card>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <hot-tags></hot-tags>
          <new-users class="mt-2"></new-users>
          <user-ranking class="mt-2"></user-ranking>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import TwitterIcon from '@icons/twitter'
  import FacebookIcon from '@icons/facebook'
  import InstagramIcon from '@icons/instagram'
  import UserMedia from "@components/user-media"

  import HotTags from "@components/hot-tags"
  import UserRanking from "@components/user-ranking"
  import UserCard from "@components/user-card"
  import NewUsers from "@components/new-users"

  export default {
    name: 'show',
    components: {UserMedia, UserCard, TwitterIcon, FacebookIcon, InstagramIcon, HotTags, UserRanking, NewUsers},
    computed: {
      ...mapGetters(['currentUser'])
    }
  }
</script>
