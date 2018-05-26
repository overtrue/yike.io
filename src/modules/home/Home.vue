<template>
  <h1>Home Page</h1>
</template>

<script>
  import Resource from '@utils/resource'

  export default {
    created() {
      let user = new Resource('users')

      user.get()
    }
  }
</script>
