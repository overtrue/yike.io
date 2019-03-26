<template>
  <relation-btn :relation="relation" action="subscribe" :item="item">
    <button slot="on" class="btn btn-sm text-gray-50">
      <volume-high /><span class="pl-1">订阅</span>
    </button>
    <button class="btn btn-sm" slot="off" :class="{'btn-primary': !hovering, 'btn-danger': hovering}" @mouseenter="hovering=true" @mouseleave="hovering=false">
      <volume-mute v-if="hovering"></volume-mute>
      <check-icon v-else></check-icon>
      <span class="pl-1">{{ hovering ? '取消订阅' : '已订阅'}}</span>
    </button>
  </relation-btn>
</template>

<script>
import RelationBtn from './relation-btn'
import VolumeMute from '$icons/VolumeMute'
import VolumeHigh from '$icons/VolumeHigh'
import CheckIcon from '$icons/Check'

export default {
  name: 'subscribe-btn',
  components: {
    RelationBtn,
    VolumeMute,
    VolumeHigh,
    CheckIcon
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
  data () {
    return {
      hovering: false
    }
  }
}
</script>
