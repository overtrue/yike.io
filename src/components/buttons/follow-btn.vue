<template>
  <relation-btn
    relation="user"
    action="follow"
    :item="item"
    v-if="currentUser.id && item.id != currentUser.id"
  >
    <template slot="on">
      <button v-if="simple" class="btn btn-rounded btn-ghost btn-icon ml-auto" title="关注 TA">
        <plus-icon></plus-icon>
      </button>
      <button v-else class="btn btn-rounded btn-outline-teal-blue mx-1" title="关注 TA">
        <plus-icon></plus-icon>关注 TA
      </button>
    </template>
    <template slot="off">
      <button
        v-if="simple"
        class="btn btn-icon ml-auto"
        :class="{'btn-ghost': !hovering, 'btn-danger': hovering}"
        @mouseenter="hovering=true"
        @mouseleave="hovering=false"
        title="取消关注 TA"
      >
        <check-icon v-if="!hovering"></check-icon>
        <close-icon v-else></close-icon>
      </button>
      <button
        v-else
        class="btn mx-1"
        :class="{'btn-teal-blue': !hovering, 'btn-danger': hovering}"
        @mouseenter="hovering=true"
        @mouseleave="hovering=false"
        title="取消关注 TA"
      >
        <check-icon v-if="!hovering"></check-icon>
        <close-icon v-else></close-icon>
        {{ hovering ? '取消关注' : '正在关注' }}
      </button>
    </template>
  </relation-btn>
</template>

<script>
import RelationBtn from './relation-btn'
import PlusIcon from '$icons/Plus'
import CheckIcon from '$icons/Check'
import CloseIcon from '$icons/Close'
import { mapGetters } from 'vuex'

export default {
  name: 'follow-btn',
  components: {
    RelationBtn,
    PlusIcon,
    CheckIcon,
    CloseIcon
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hovering: false
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  }
}
</script>
