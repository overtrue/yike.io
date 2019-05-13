<template>
  <div @click="toggle">
    <template v-if="!item[actions[action]]">
      <slot name="on"></slot>
    </template>
    <template v-else>
      <slot name="off"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    relation: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      types: {
        thread: 'App\\Thread',
        user: 'App\\User',
        node: 'App\\Node'
      },
      actions: {
        like: 'has_liked',
        follow: 'has_followed',
        subscribe: 'has_subscribed'
      }
    }
  },
  methods: {
    toggle () {
      // let action = !this.item[this.actions[this.action]] ? this.action : `${this.action}`

      this.$http.post(`relations/${this.action}`, {
        followable_type: this.types[this.relation],
        followable_id: this.item.id
      }).then(() => {
        this.item[this.actions[this.action]] = !this.item[
          this.actions[this.action]
        ]
        this.$emit('after-toggle', this.item[this.actions[this.action]])
      })
    }
  }
}
</script>
