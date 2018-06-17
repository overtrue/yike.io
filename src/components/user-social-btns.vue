<template>
    <div class="user-social-btns d-flex justify-content-end">
        <button type="button" :class="classes" class="btn btn-dark btn-icon">
          <github-icon></github-icon>
        </button>
        <button type="button" :class="classes" class="btn btn-twitter btn-icon">
          <twitter-icon></twitter-icon>
        </button>
        <button type="button" :class="classes" class="btn btn-facebook btn-icon">
          <facebook-icon></facebook-icon>
        </button>
        <button type="button" :class="classes" class="btn btn-orange btn-icon text-white">
          <instagram-icon></instagram-icon>
        </button>
        <button type="button" :class="classes" class="btn btn-teal-blue btn-icon text-white">
          <telegram-icon></telegram-icon>
        </button>
        <button type="button" :class="classes" class="btn btn-payne-grey btn-icon text-white">
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
        default: 16,
      }
    },
    computed: {
      classes() {
        return 'text-'+this.size
      }
    },
    components: {TwitterIcon, GithubIcon, FacebookIcon, InstagramIcon, TelegramIcon, SteamIcon},
  }
</script>

<style scoped>

</style>
