<template>
  <div id="clap" class="text-center clap d-flex align-items-center justify-content-center" @click="toggle">
    <span id="clap--icon" class="clap--icon">
      <thumb-up-outline v-if="!item.has_liked" />
      <thumb-up v-else />
    </span>
    <span id="clap--count" class="clap--count"></span>
    <span id="clap--count-total" class="clap--count-total"></span>
  </div>
</template>

<script>
import mojs from 'mo-js'
import ThumbUpOutline from '$icons/ThumbUpOutline'
import ThumbUp from '$icons/ThumbUp'
import RelationBtn from './relation-btn'
import { mapGetters } from 'vuex'

export default {
  components: { RelationBtn, ThumbUp, ThumbUpOutline },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      likers: this.item.cache.likes_count,
      animationTimeline: null
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    toggle () {
      if (!this.currentUser.id) {
        return this.$router.push({ name: 'auth.login' })
      }
      this.$http
        .post(`relations/like`, {
          followable_type: 'App\\Thread',
          followable_id: this.item.id
        })
        .then(() => {
          this.item.has_liked = !this.item.has_liked

          this.item.has_liked
            ? this.$parent.thread.cache.likes_count++
            : this.$parent.thread.cache.likes_count--
        })
    },
    repeatClapping () {
      const clapIcon = document.getElementById('clap--icon')

      this.updateNumberOfClaps()
      this.animationTimeline.replay()
      clapIcon.classList.add('checked')
    },
    updateNumberOfClaps () {
      const clapCount = document.getElementById('clap--count')
      const clapTotalCount = document.getElementById('clap--count-total')
      this.likers = this.$parent.thread.cache.likes_count

      if (this.item.has_liked) {
        clapCount.innerHTML = '-1'
        clapTotalCount.innerHTML = this.likers - 1
        this.likers--
      } else {
        clapCount.innerHTML = '+1'
        clapTotalCount.innerHTML = this.likers + 1
        this.likers++
      }
    }
  },
  mounted () {
    const vm = this
    const clap = document.getElementById('clap')
    const tlDuration = 300
    let clapHold

    const triangleBurst = new mojs.Burst({
      parent: clap,
      radius: { 50: 95 },
      count: 5,
      angle: 30,
      children: {
        shape: 'polygon',
        radius: { 6: 0 },
        scale: 1,
        stroke: 'rgba(211,84,0 ,0.5)',
        strokeWidth: 2,
        angle: 210,
        delay: 30,
        speed: 0.2,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: tlDuration
      }
    })
    const circleBurst = new mojs.Burst({
      parent: clap,
      radius: { 50: 75 },
      angle: 25,
      duration: tlDuration,
      children: {
        shape: 'circle',
        fill: 'rgba(149,165,166 ,0.5)',
        delay: 30,
        speed: 0.2,
        radius: { 3: 0 },
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      }
    })
    const countAnimation = new mojs.Html({
      el: '#clap--count',
      isShowStart: false,
      isShowEnd: true,
      y: { 0: -30 },
      opacity: { 0: 1 },
      duration: tlDuration
    }).then({
      opacity: { 1: 0 },
      y: -80,
      delay: tlDuration / 2
    })
    const countTotalAnimation = new mojs.Html({
      el: '#clap--count-total',
      isShowStart: false,
      isShowEnd: true,
      opacity: { 0: 1 },
      delay: (3 * tlDuration) / 2,
      duration: tlDuration,
      y: { 0: -3 }
    })
    const scaleButton = new mojs.Html({
      el: '#clap',
      duration: tlDuration,
      scale: { 1.3: 1 },
      easing: mojs.easing.out
    })
    clap.style.transform = 'scale(1, 1)' /* Bug1 fix */

    this.animationTimeline = new mojs.Timeline()
    this.animationTimeline.add([
      triangleBurst,
      circleBurst,
      countAnimation,
      countTotalAnimation,
      scaleButton
    ])

    clap.addEventListener('click', function () {
      vm.repeatClapping()
    })

    clap.addEventListener('mousedown', function () {
      clapHold = setInterval(function () {
        vm.repeatClapping()
      }, 400)
    })

    clap.addEventListener('mouseup', function () {
      clearInterval(clapHold)
    })
  }
}
</script>

<style lang="scss">
/*========================
    SASS definitions
  =======================*/
$btn-dimension: 60px;
$primary-color: rgba(189, 195, 199, 1);
$secondary-color: #0078ff;
@mixin debug {
  outline: 1px solid red;
}

/*========================
      BUTTON styles
    =======================*/
.clap--icon {
  color: $secondary-color;
}
.clap {
  position: relative;
  border-radius: 50%;
  background: #fff;
  font-size: 24px;
  width: $btn-dimension;
  height: $btn-dimension;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50%;
    //border: 1px solid $primary-color;
    width: $btn-dimension - 1px;
    height: $btn-dimension - 1px;
  }
  &:hover {
    cursor: pointer;
    background: #fff60;
    font-size: 26px;
    transition: all 0.3s ease-in;
    &:after {
      animation: shockwave 1s ease-in infinite;
    }
  }
  .clap--count {
    position: absolute;
    top: -$btn-dimension/1.6;
    left: $btn-dimension/4;
    font-size: 0.8rem;
    color: white;
    background: $secondary-color;
    border-radius: 50%;
    height: $btn-dimension/2;
    width: $btn-dimension/2;
    line-height: $btn-dimension/2;
  }
  .clap--count-total {
    position: absolute;
    font-size: 0.8rem;
    width: $btn-dimension;
    text-align: center;
    left: 0;
    bottom: -$btn-dimension/2.5;
    color: $primary-color;
  }
}
</style>
