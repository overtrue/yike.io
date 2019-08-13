<template>
  <div class="box">
    <div class="box-heading border-bottom">
      <h5>修改头像</h5>
    </div>
    <img :src="url" class="rounded-circle shadow-6 avatar-120" alt="user avatar">
    <img :src="url" class="rounded-circle shadow-6 ml-2 avatar-60" alt="user avatar">
    <img :src="url" class="rounded-circle shadow-6 ml-2 avatar-30" alt="user avatar">

    <button class="btn btn-light d-block mt-2" id="pick-avatar">选择新头像</button>

    <avatar-cropper @uploaded="handleUploaded" trigger="#pick-avatar" :upload-url="uploadUrl" :upload-headers="uploadHeaders" />

    <button class="btn btn-primary mt-2" @click="submit" :disabled="!newUrl">保存</button>
  </div>
</template>

<script>
import AvatarCropper from 'vue-avatar-cropper'
import { mapGetters } from 'vuex'

export default {
  components: { AvatarCropper },
  data () {
    return {
      url: this.$parent.currentUser.avatar,
      newUrl: null
    }
  },
  computed: {
    ...mapGetters(['authToken']),
    uploadUrl () {
      return this.$http.defaults.baseURL + '/files/upload'
    },
    uploadHeaders () {
      return {
        Authorization: `Bearer ${this.authToken}`
      }
    }
  },
  methods: {
    handleUploaded (response) {
      if (!response['url']) {
        this.$message.error(response.error)
      }

      this.url = this.newUrl = response.url
    },
    async submit () {
      await this.$http
        .patch(`users/${this.$parent.currentUser.username}`, {
          avatar: this.newUrl
        })
        .then(() => {
          this.$message.success('头像已更新')
          this.$store.dispatch('loadUser')
        })
    }
  }
}
</script>
