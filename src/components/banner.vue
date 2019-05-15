<template>
  <div :id="id" class="carousel slide" data-ride="carousel" v-if="banner">
    <ol class="carousel-indicators" v-if="banner.banners.length > 1">
      <li :data-target="idSelector" :data-slide-to="i - 1" class="active" v-for="i in banner.banners.length" :key="i"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" v-for="item of banner.banners" :key="item.id">
        <a :href="item.url || 'javascript:;'">
          <img class="d-block w-100" :src="item.image_url" alt="First slide">
          <div class="carousel-caption" v-if="item.title || item.description">
            <h1 v-if="item.title">{{ item.title }}</h1>
            <p v-if="item.description">{{ item.description }}</p>
          </div>
        </a>
      </div>
    </div>
    <a class="carousel-control-prev" :href="idSelector" role="button" data-slide="prev" v-if="banner.banners.length > 1">
      <span class="carousel-control-prev-icon" aria-hidden="true">
        <arrow-left></arrow-left>
      </span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" :href="idSelector" role="button" data-slide="next" v-if="banner.banners.length > 1">
      <span class="carousel-control-next-icon" aria-hidden="true">
        <arrow-right></arrow-right>
      </span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import ArrowLeft from '$icons/ArrowLeft'
import ArrowRight from '$icons/ArrowRight'

export default {
  name: 'Banner',
  components: { ArrowLeft, ArrowRight },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    id () {
      return 'banner-' + this.name
    },
    idSelector () {
      return '#' + this.id
    }
  },
  data () {
    return {
      banner: null
    }
  },
  methods: {
    loadBanner () {
      this.$http.get('banners/' + this.name).then(banner => {
        this.banner = banner
      }).catch(err => {})
    }
  },
  mounted () {
    this.loadBanner()
  }
}
</script>

<style lang="scss">
.carousel-item {
  display: flex !important;
  align-items: center;
  justify-content: stretch;
  max-height: 300px;
  border-radius: 2px;
  overflow: hidden;
}
</style>
