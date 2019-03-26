<template>
  <relation-btn :relation="relation" action="like" :item="item" @after-toggle="afterToggle">
    <a class="btn btn-sm btn-link text-gray-50" slot="on" href="javascript:void(0)">
      <thumb-up-icon></thumb-up-icon> {{ item.cache.likes_count }}
    </a>
    <a class="btn btn-sm btn-primary" slot="off" href="javascript:void(0)">
      <thumb-up-icon></thumb-up-icon> {{ item.cache.likes_count }}
    </a>
  </relation-btn>
</template>

<script>
import RelationBtn from './relation-btn'
import ThumbUpIcon from '$icons/ThumbUp'

export default {
  name: 'like-btn',
  components: {
    RelationBtn,
    ThumbUpIcon
  },
  props: {
    relation: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    afterToggle (bool) {
      bool ? this.item.cache.likes_count++ : this.item.cache.likes_count--
    }
  }
}
</script>
