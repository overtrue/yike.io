<template>
  <threads-list :threads="threads" @page-changed="handlePageChanged" />
</template>

<script>
  import ThreadsList from '@components/threads-list'

  export default {
    name: 'user-threads',
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    components: {ThreadsList},
    data() {
      return {
        threads: {}
      }
    },
    methods: {
      loadThreads(page = 1) {
        this.api('threads').get(`?user_id=${this.user.id}&page=${page}`).then(threads => {
          this.threads = threads
        })
      },
      handlePageChanged(page) {
        this.loadThreads(page)
      }
    },
    mounted() {
      this.loadThreads()
    }
  }
</script>
