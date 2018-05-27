<template>
  <div :id="id" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li :data-target="idSelector" data-slide-to="0" class="active"></li>
      <li :data-target="idSelector" data-slide-to="1"></li>
      <li :data-target="idSelector" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="https://source.unsplash.com/random//800x260?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://source.unsplash.com/random//800x260?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://source.unsplash.com/random//800x260?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" :href="idSelector" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"><arrow-left></arrow-left></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" :href="idSelector" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"><arrow-right></arrow-right></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
  import ArrowLeft from "@icons/arrow-left"
  import ArrowRight from "@icons/arrow-right"

  export default {
    name: 'Banner',
    components: {ArrowLeft, ArrowRight},
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      id() {
        return 'banner-'+this.name
      },
      idSelector() {
        return '#'+this.id
      }
    },
    data() {
      return {
        banners: []
      }
    },
    methods: {
      loadBanners() {
        //
      }
    }
  }
</script>

<style lang="scss">

</style>
