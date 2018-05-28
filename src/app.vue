<template>
  <div id="app">
    <Navbar />
    <div class="main-content" :class="{'container my-3': withContainer}">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Navbar from '@components/navbar'

  export default {
    name: 'app',
    components: {
      Navbar,
    },
    computed: {
      withContainer() {
        if (typeof this.$route.meta['container'] != 'undefined') {
          return !!this.$route.meta['container']
        }

        return true
      }
    }
  }
</script>
