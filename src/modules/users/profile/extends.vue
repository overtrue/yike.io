<template>
  <div class="boxes">
    <div class="box">
      <div class="box-heading border-bottom">
        <h5>拓展资料</h5>
      </div>
      <form class="w-50" @submit.prevent="submit">
        <div class="form-group row d-flex align-items-center">
          <label for="github-form" class="col-sm-2 col-form-label">
            <button type="button" class="text-16 btn btn-dark btn-icon mx-auto">
              <github-icon></github-icon>
            </button>
          </label>
          <div class="col-sm-10 pl-0">
            <input type="text" class="form-control" id="github-form" v-model="links.github">
          </div>
        </div>
        <div class="form-group row d-flex align-items-center">
          <label for="twitter-form" class="col-sm-2 col-form-label">
            <button type="button" class="text-16 btn btn-twitter btn-icon mx-auto">
              <twitter-icon></twitter-icon>
            </button>
          </label>
          <div class="col-sm-10 pl-0">
            <input type="text" class="form-control" id="twitter-form" v-model="links.twitter">
          </div>
        </div>
        <div class="form-group row d-flex align-items-center">
          <label for="facebook-form" class="col-sm-2 col-form-label">
            <button type="button" class="text-16 btn btn-facebook btn-icon mx-auto">
              <facebook-icon></facebook-icon>
            </button>
          </label>
          <div class="col-sm-10 pl-0">
            <input type="text" class="form-control" id="facebook-form" v-model="links.facebook">
          </div>
        </div>
        <div class="form-group row d-flex align-items-center">
          <label for="instagram-form" class="col-sm-2 col-form-label">
            <button type="button" class="text-16 btn btn-orange btn-icon text-white mx-auto">
              <instagram-icon></instagram-icon>
            </button>
          </label>
          <div class="col-sm-10 pl-0">
            <input type="text" class="form-control" id="instagram-form" v-model="links.instagram">
          </div>
        </div>
        <div class="form-group row d-flex align-items-center">
          <label for="telegram-form" class="col-sm-2 col-form-label">
            <button type="button" class="text-16 btn btn-teal-blue btn-icon text-white mx-auto">
              <telegram-icon></telegram-icon>
            </button>
          </label>
          <div class="col-sm-10 pl-0">
            <input type="text" class="form-control" id="telegram-form" v-model="links.telegram">
          </div>
        </div>
        <div class="form-group row d-flex align-items-center">
          <label for="steam-form" class="col-sm-2 col-form-label">
            <button type="button" class="text-16 btn btn-payne-grey btn-icon text-white mx-auto">
              <steam-icon></steam-icon>
            </button>
          </label>
          <div class="col-sm-10 pl-0">
            <input type="text" class="form-control" id="steam-form" v-model="links.steam">
          </div>
        </div>
        <div class="form-group row d-flex align-items-center">
          <div class="col-sm-10 offset-sm-2 pl-0">
            <button class="btn btn-primary rounded">确定</button>
          </div>
        </div>
      </form>
    </div>
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
    components: {TwitterIcon, GithubIcon, FacebookIcon, InstagramIcon, TelegramIcon, SteamIcon},
    data() {
      return {
        links: {
          twitter: '',
          github: '',
          facebook: '',
          instagram: '',
          telegram: '',
          stream: '',
        }
      }
    },
    created() {
      this.links = this.$user().extends
    },
    methods: {
      submit() {
        this.api('users').patch(this.$user().username, {
          extends: this.links
        }).then(() => {
          this.$message.success('修改成功！')
        })
      }
    }
  }
</script>
