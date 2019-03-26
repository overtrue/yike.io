<template>
  <div class="user-social-btns d-flex justify-content-start flex-wrap">
    <a
      class="btn btn-dark btn-icon"
      :href="'https://github.com/'+user.extends.github"
      target="_blank"
      :class="btnClass"
      v-if="user.extends.github"
    >
      <github-icon></github-icon>
    </a>
    <a
      class="btn btn-twitter btn-icon"
      :href="'https://twitter.com/' + user.extends.twitter"
      target="_blank"
      :class="btnClass"
      v-if="user.extends.twitter"
    >
      <twitter-icon></twitter-icon>
    </a>
    <a
      class="btn btn-facebook btn-icon"
      :href="'https://www.facebook.com/' + user.extends.facebook"
      target="_blank"
      :class="btnClass"
      v-if="user.extends.facebook"
    >
      <facebook-icon></facebook-icon>
    </a>
    <a
      class="btn btn-orange btn-icon text-white"
      :href="'https://www.instagram.com/' + user.extends.instagram"
      target="_blank"
      :class="btnClass"
      v-if="user.extends.instagram"
    >
      <instagram-icon></instagram-icon>
    </a>
    <a
      class="btn btn-teal-blue btn-icon text-white"
      :href="'https://t.me/' + user.extends.telegram"
      target="_blank"
      :class="btnClass"
      v-if="user.extends.telegram"
    >
      <telegram-icon></telegram-icon>
    </a>
    <a
      class="btn btn-payne-grey btn-icon text-white"
      :href="'https://steamcommunity.com/id/'+user.extends.steam"
      target="_blank"
      :class="btnClass"
      v-if="user.extends.steam"
    >
      <steam-icon></steam-icon>
    </a>
  </div>
</template>

<script>
import TwitterIcon from '$icons/Twitter'
import GithubIcon from '$icons/GithubCircle'
import FacebookIcon from '$icons/Facebook'
import InstagramIcon from '$icons/Instagram'
import TelegramIcon from '$icons/Telegram'
import SteamIcon from '$icons/Steam'

export default {
  name: 'user-social-btns',
  props: {
    user: {
      type: Object,
      required: true
    },
    size: {
      type: Number,
      default: 16
    },
    spacing: {
      type: Number,
      default: 8
    }
  },
  computed: {
    btnClass () {
      return `text-${this.size} spacing-${this.spacing}`
    }
  },
  components: {
    TwitterIcon,
    GithubIcon,
    FacebookIcon,
    InstagramIcon,
    TelegramIcon,
    SteamIcon
  }
}
</script>

<style scoped lang="scss">
.user-social-btns {
  @each $size in 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 20
  {
    .spacing-#{$size} {
      margin-left: #{$size}px;
      margin-right: #{$size}px;
      margin-bottom: #{$size}px;
    }
  }
}
</style>
