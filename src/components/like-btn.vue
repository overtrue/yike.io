<template>
  <div @click="toggle">
    <template v-if="type == 'common'">
      <span>
        <like-icon class="cursor-pointer" :class="item.has_liked ? 'text-pink' : 'text-gray-60'"></like-icon> {{item.likers_count}}
      </span>
    </template>
    <template v-else>
      <a class="btn btn-sm" :class="item.has_liked ? 'btn-primary' : 'text-gray-50 btn-link'" href="javascript:void(0)">
        <thumb-up-icon></thumb-up-icon> {{ item.likers_count }}
      </a>
    </template>
  </div>
</template>

<script>
  import LikeIcon from "@icons/heart"
  import ThumbUpIcon from "@icons/thumb-up"

  export default {
    name: 'like-btn',
    components: {LikeIcon, ThumbUpIcon},
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      },
      type: {
        type: String,
        default: 'common'
      }
    },
    methods: {
      toggle() {
        if (this.item.has_liked) {
          this.unlike()
        } else {
          this.like()
        }
      },
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
