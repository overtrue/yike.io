<template>
    <div class="user-social-btns d-flex justify-content-start">
        <button type="button" class="btn btn-dark btn-icon" :class="btnClass" v-if="user.extends.github">
          <github-icon></github-icon>
        </button>
        <button type="button" class="btn btn-twitter btn-icon" :class="btnClass" v-if="user.extends.twitter">
          <twitter-icon></twitter-icon>
        </button>
        <button type="button" class="btn btn-facebook btn-icon" :class="btnClass" v-if="user.extends.facebook">
          <facebook-icon></facebook-icon>
        </button>
        <button type="button" class="btn btn-orange btn-icon text-white" :class="btnClass" v-if="user.extends.instagram">
          <instagram-icon></instagram-icon>
        </button>
        <button type="button" class="btn btn-teal-blue btn-icon text-white" :class="btnClass" v-if="user.extends.telegram">
          <telegram-icon></telegram-icon>
        </button>
        <button type="button" class="btn btn-payne-grey btn-icon text-white" :class="btnClass" v-if="user.extends.steam">
          <steam-icon></steam-icon>
        </button>
    </div>
</template>

<script>
  import TwitterIcon from '@icons/twitter'
  import GithubIcon from '@icons/github-circle'
  import FacebookIcon from '@icons/facebook'
  import InstagramIcon from '@icons/instagram'
  import TelegramIcon from '@icons/telegram'
  import SteamIcon from '@icons/steam'

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
    computed:{
      btnClass() {
        return `text-${this.size} spacing-${this.spacing}`
      }
    },
    components: {TwitterIcon, GithubIcon, FacebookIcon, InstagramIcon, TelegramIcon, SteamIcon},
  }
</script>

<style scoped lang="scss">
    .user-social-btns {
        @each $size in 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19, 20 {
            .spacing-#{$size} {
                margin-left: #{$size}px;
                margin-right: #{$size}px;
            }
        }
    }
</style>
