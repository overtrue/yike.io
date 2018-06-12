<template>
  <div>
    <span v-if="!item.has_liked" @click="like">
      <like-icon class="text-gray-60 cursor-pointer"></like-icon> {{item.likers_count}}
    </span>
    <span v-else @click="unlike">
      <like-icon class="text-pink cursor-pointer"></like-icon> {{item.likers_count}}
    </span>
  </div>
</template>

<script>
  import LikeIcon from "@icons/heart"

  export default {
    name: 'like-btn',
    components: {LikeIcon},
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      async like() {
        if (!this.$user().id) {
          this.$router.push({name: 'auth.login'})
        }

        await this.api(`threads/${this.$route.params.id}/like`).post()

        this.item.has_liked = true
        this.item.likers_count++
      },
      async unlike() {
        await this.api(`threads/${this.$route.params.id}/unlike`).post()

        this.item.has_liked = false
        this.item.likers_count--
      }
    }
  }
</script>
