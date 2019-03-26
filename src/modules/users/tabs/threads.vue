<template>
  <threads-list :threads="threads" @page-changed="handlePageChanged" />
</template>

<script>
import ThreadsList from '$components/threads-list'

export default {
  name: 'user-threads',
  components: { ThreadsList },
  data () {
    return {
      threads: {}
    }
  },
  methods: {
    loadThreads (page = 1) {
      this.$http
        .get(`threads?user_id=${this.$parent.user.id}&page=${page}`)
        .then(threads => {
          this.threads = threads
        })
    },
    handlePageChanged (page) {
      this.loadThreads(page)
    }
  },
  mounted () {
    this.loadThreads()
  }
}
</script>
