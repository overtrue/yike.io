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
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">https://github.com/</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="github-form"
                v-model="links.github"
                placeholder="username"
              >
            </div>
          </div>
        </div>
        <div class="form-group row d-flex align-items-center">
          <label for="twitter-form" class="col-sm-2 col-form-label">
            <button type="button" class="text-16 btn btn-twitter btn-icon mx-auto">
              <twitter-icon></twitter-icon>
            </button>
          </label>
          <div class="col-sm-10 pl-0">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon2">https://twitter.com/</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="twitter-form"
                v-model="links.twitter"
                placeholder="username"
              >
            </div>
          </div>
        </div>
        <div class="form-group row d-flex align-items-center">
          <label for="facebook-form" class="col-sm-2 col-form-label">
            <button type="button" class="text-16 btn btn-facebook btn-icon mx-auto">
              <facebook-icon></facebook-icon>
            </button>
          </label>
          <div class="col-sm-10 pl-0">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">https://www.facebook.com/</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="facebook-form"
                v-model="links.facebook"
                placeholder="username"
              >
            </div>
          </div>
        </div>
        <div class="form-group row d-flex align-items-center">
          <label for="instagram-form" class="col-sm-2 col-form-label">
            <button type="button" class="text-16 btn btn-orange btn-icon text-white mx-auto">
              <instagram-icon></instagram-icon>
            </button>
          </label>
          <div class="col-sm-10 pl-0">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon4">https://www.instagram.com/</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="instagram-form"
                v-model="links.instagram"
                placeholder="username"
              >
            </div>
          </div>
        </div>
        <div class="form-group row d-flex align-items-center">
          <label for="telegram-form" class="col-sm-2 col-form-label">
            <button type="button" class="text-16 btn btn-teal-blue btn-icon text-white mx-auto">
              <telegram-icon></telegram-icon>
            </button>
          </label>
          <div class="col-sm-10 pl-0">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon5">https://t.me/</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="telegram-form"
                v-model="links.telegram"
                placeholder="username"
              >
            </div>
          </div>
        </div>
        <div class="form-group row d-flex align-items-center">
          <label for="steam-form" class="col-sm-2 col-form-label">
            <button type="button" class="text-16 btn btn-payne-grey btn-icon text-white mx-auto">
              <steam-icon></steam-icon>
            </button>
          </label>
          <div class="col-sm-10 pl-0">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon6">https://steamcommunity.com/id/</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="steam-form"
                v-model="links.steam"
                placeholder="username"
              >
            </div>
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
import TwitterIcon from '$icons/Twitter'
import GithubIcon from '$icons/GithubCircle'
import FacebookIcon from '$icons/Facebook'
import InstagramIcon from '$icons/Instagram'
import TelegramIcon from '$icons/Telegram'
import SteamIcon from '$icons/Steam'

export default {
  components: {
    TwitterIcon,
    GithubIcon,
    FacebookIcon,
    InstagramIcon,
    TelegramIcon,
    SteamIcon
  },
  data () {
    return {
      links: {
        twitter: '',
        github: '',
        facebook: '',
        instagram: '',
        telegram: '',
        stream: ''
      }
    }
  },
  created () {
    this.links = this.$user().extends
  },
  methods: {
    submit () {
      this.$http
        .patch(`users/${this.$user().username}`, {
          extends: this.links
        })
        .then(() => {
          this.$message.success('修改成功！')
        })
    }
  }
}
</script>
