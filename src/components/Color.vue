<template>
  <div class="container text-center my-4">
    <h3 class="my-4 text-gray-50">Text Colors</h3>
    <div class="row d-flex justify-content-center text">
      <span v-for="item in aliasItems" :key="item" :class="'text-' + item">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</span>
    </div>
    <div class="row d-flex justify-content-center text">
      <span v-for="item in colorItems" :key="item" :class="'text-' + item">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</span>
    </div>
    <h3 class="my-4 text-gray-50">Buttons</h3>
    <div class="row d-flex justify-content-center">
      <button v-for="item in aliasItems" :key="item" class="btn" :class="'btn-' + item">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</button>
      <button class="btn btn-link">Link</button>
    </div>
    <div class="row mt-2 d-flex justify-content-center">
      <button v-for="item in colorItems" :key="item" class="btn" :class="'btn-' + item">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</button>
    </div>
    <h3 class="my-4 text-gray-50">Background Colors</h3>
    <div class="row d-flex justify-content-center">
      <div class="box-container d-flex flex-column">
        <div v-for="item in aliasItems" :key="item" :class="'bg-' + item" class="box">
          <span class="text-white">{{ '.bg-' + item }}</span>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="box-container d-flex flex-column">
        <div v-for="item in colorItems" :key="item" :class="'bg-' + item" class="box">
          <span class="text-white">{{ '.bg-' + item }}</span>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="box-container d-flex flex-column">
        <div v-for="item in grayItems" :key="item" :class="'bg-gray-' + item" class="box">
          <span class="text-white">{{ '.bg-gray-' + item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        grayItems: [5, 10, 15, 20, 30, 40, 50, 60, 70, 75, 80, 85,90, 92, 94, 96, 97, 98],
        aliasItems: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
        colorItems: ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan', 'teal-blue', 'tiffany', 'orchid', 'bronze', 'facebook', 'twitter', 'pinterest', 'raisin-black', 'charcoal', 'payne-grey', 'grey-blue',
        ],
      }
    }
  }
</script>

<style lang="scss">
  .box-container {
    width: 200px;
    height: auto;
  }
  .box {
    width: 200px;
    height: 30px;
  }
  .btn {
    margin: 5px;
  }
  .text span[class*="text-"] {
    margin-right: 20px;
  }
</style>
