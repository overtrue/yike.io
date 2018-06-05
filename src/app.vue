<template>
  <div id="app">
    <Navbar />
    <div class="alert alert-warning text-center m-0" role="alert" v-if="!currentUser.has_activated">
      您的邮箱尚未验证，以免影响你的使用，请先<a href="#" class="text-blue">验证邮箱</a>！
    </div>
    <div class="main-content" :class="{'container my-3': withContainer}">
      <router-view />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Navbar from '@components/navbar'

  export default {
    name: 'app',
    components: {
      Navbar,
    },
    computed: {
      ...mapGetters(['currentUser']),
      withContainer() {
        if (typeof this.$route.meta['container'] != 'undefined') {
          return !!this.$route.meta['container']
        }

        return true
      }
    }
  }
</script>
