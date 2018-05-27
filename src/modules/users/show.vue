<template>
  <div class="page-user-show">
    <header class="page-header bg-grey-blue py-4 text-white">
      <div class="bg-image"><img src="https://source.unsplash.com/random/1440x300" alt=""></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 d-flex align-items-center">
            <img src="https://source.unsplash.com/random/100x100" alt="User avatar" class="avatar-120"/>

            <div class="px-md-4">
              <h4>安小超超超</h4>
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
    <nav class="nav justify-content-center py-2 bg-white text-center">
      <div class="nav-item"><a href="#" class="nav-link active">最新动态</a></div>
      <div class="nav-item"><a href="#" class="nav-link text-gray-60">讨论 12</a></div>
      <div class="nav-item"><a href="#" class="nav-link text-gray-60">回复 234</a></div>
      <div class="nav-item"><a href="#" class="nav-link text-gray-60">关于</a></div>
    </nav>
  </div>
</template>

<script>
  import TwitterIcon from '@icons/twitter'
  import FacebookIcon from '@icons/facebook'
  import InstagramIcon from '@icons/instagram'

  export default {
    name: 'show',
    components: {TwitterIcon, FacebookIcon, InstagramIcon}
  }
</script>

<style scoped>

</style>
