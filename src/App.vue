<template>
  <div id="app" v-cloak>
    <Navbar />
    <div class="main-content container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Navbar from '@components/Navbar'

  export default {
    name: 'app',
    components: {
      Navbar,
    }
  }
</script>
