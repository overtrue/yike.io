<template>
  <div class="oauth-redirect text-center p-5">
    <div v-if="$route.name=='auth.oauth_redirect'">Redirecting to {{ $route.params.platform }}...</div>
    <div v-else>Fetching user info...</div>
  </div>
</template>

<script>
export default {
  name: 'oauth',
  mounted () {
    let platform = this.$route.params.platform
    if (this.$route.name === 'auth.oauth_redirect') {
      this.$http.get('oauth/redirect-url/' + platform).then(redirectUrl => {
        window.location = redirectUrl
      })
    } else {
      this.$http.get('oauth/callback/' + platform).then(response => {
        this.$store.dispatch('setToken', response.token)
        this.$store.dispatch('setUser', response.user)
        this.$store.dispatch('loadUser')
        this.$message.success('欢迎回来~')

        if (window.opener) {
          window.opener.location.reload()
          window.close()
        } else {
          window.location.href = '/'
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
