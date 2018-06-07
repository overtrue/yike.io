<template>
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
        <user-card :user="currentUser"></user-card>
      </div>
    </li>
  </ul>
</template>

<script>
  import UserCard from "@components/user-card"
  import UserMedia from "@components/user-media"
  import { mapGetters } from 'vuex'

  export default {
    components: {UserCard, UserMedia},
    computed: {
      ...mapGetters(['currentUser']),
    }
  }
</script>
