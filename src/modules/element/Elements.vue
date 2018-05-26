<template>
  <div class="container text-center my-4">
    <h3 class="my-5 display-2 text-gray-50">Text Colors</h3>
    <div class="row d-flex justify-content-center text">
      <div v-for="item in aliasItems" :key="item" class="text-item" :class="'text-' + item">{{ '.text-' + item }}</div>
    </div>
    <div class="row d-flex justify-content-center text">
      <div v-for="item in colorItems" :key="item" class="text-item" :class="'text-' + item">{{ '.text-' + item }}</div>
    </div>
    <h3 class="my-5 display-2 text-gray-50">Buttons</h3>
    <div v-for="(size, index) in ['btn-lg', 'normal', 'btn-sm']" :key="'buttons-' + index">
      <h3 class="my-4 text-gray-50" :class="size">{{ size + ' buttons' }}</h3>
      <div class="row d-flex justify-content-center">
        <button v-for="item in aliasItems" :key="item" class="btn" :class="size + ' btn-' + item">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</button>
      </div>
      <div class="row mt-2 d-flex justify-content-center">
        <button v-for="item in colorItems" :key="item" class="btn" :class="size + ' btn-' + item">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</button>
      </div>
    </div>
    <div v-for="(size, index) in ['btn-lg', '', 'btn-sm']" :key="'outline-button-' + index">
      <h3 class="my-4 text-gray-50" :class="size">{{ size + ' outline buttons' }}</h3>
      <div class="row d-flex justify-content-center">
        <button v-for="item in aliasItems" :key="item" class="btn" :class="size + ' btn-outline-' + item">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</button>
      </div>
      <div class="row mt-2 d-flex justify-content-center">
        <button v-for="item in colorItems" :key="item" class="btn" :class="size + ' btn-outline-' + item">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</button>
      </div>
    </div>
    <h3 class="my-5 display-2 text-gray-50">Background Colors</h3>
    <div class="row d-flex justify-content-center">
      <div class="box-container d-flex">
        <div v-for="item in aliasItems" :key="item" :class="'bg-' + item" class="color-box">
          <span class="text-white">{{ '.bg-' + item }}</span>
        </div>
      </div>
    </div>
    <div class="row mt-4 d-flex justify-content-center flex-wrap">
        <div v-for="item in colorItems" :key="item" :class="'bg-' + item" class="color-box">
          <span class="text-white">{{ '.bg-' + item }}</span>
        </div>
    </div>
    <div class="row mt-4 d-flex justify-content-center flex-wrap">
        <div v-for="item in grayDegrees" :key="item" :class="'bg-gray-' + item" class="color-box">
          <span class="text-white">{{ '.bg-gray-' + item }}</span>
        </div>
    </div>

    <h3 class="my-5 display-2 text-gray-50">Box shadow</h3>
    <div class="row mt-4 d-flex justify-content-center flex-wrap">
      <div v-for="item in shadowDegrees" :key="item" :class="'shadow-' + item" class="p-2 react-box">
        <span>{{ '.shadow-' + item }}</span>
      </div>
    </div>

    <h3 class="my-5 display-2 text-gray-50">Icons</h3>
    <div class="row mt-4 d-flex justify-content-center flex-wrap">
      <div class="icon-item"><menu-icon decorative /></div>
      <div class="icon-item"><android-icon decorative /></div>
      <div class="icon-item"><ubuntu-icon /></div>
      <div class="icon-item"><account-circle-icon /></div>
      <div class="icon-item"><bell-icon /></div>
      <div class="icon-item"><msg-processing /></div>
    </div>
    <div class="mt-4"><a href="https://materialdesignicons.com/">https://materialdesignicons.com/</a></div>
  </div>
</template>

<script>
  import AndroidIcon from "@icons/android"
  import UbuntuIcon from "@icons/ubuntu"
  import MenuIcon from "@icons/menu"
  import BellIcon from "@icons/bell"
  import MsgProcessing from "@icons/message-processing"
  import AccountCircleIcon from "@icons/account-circle"

  export default {
    components: {MenuIcon, AndroidIcon, UbuntuIcon, AccountCircleIcon, MsgProcessing, BellIcon},
    data() {
      return {
        grayDegrees: [5, 10, 15, 20, 30, 40, 50, 60, 70, 75, 80, 85,90, 92, 94, 96, 97, 98],
        shadowDegrees: [0, 6, 30, 60],
        aliasItems: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
        colorItems: ['blue', 'indigo', 'purple', 'pink', 'red','orange', 'yellow', 'green', 'teal', 'cyan', 'teal-blue', 'tiffany', 'orchid', 'bronze', 'facebook', 'twitter', 'pinterest', 'raisin-black', 'charcoal', 'payne-grey', 'grey-blue'],
      }
    }
  }
</script>

<style lang="scss">
  .text-item { width: 160px; border: 1px solid #eee; padding: 10px 10px; margin: 5px; background: #FFF; }
  .btn {
    margin: 5px;
  }
  .color-box {
    display: inline-block;
    width: 140px;
    height: 50px;
    margin: 5px;
    line-height: 50px;
    text-align: center;
  }

  .icon-item {
    display: inline-block;
    padding: 0 10px;
    font-size: 30px;
    color: #666;
    border: 1px solid currentColor;
    border-radius: 6px;
    margin: 5px;
  }

  .react-box {
    height: 120px;
    line-height: 80px;
    width: 25%;
    margin: 50px;
    background: #fff;
  }
</style>
