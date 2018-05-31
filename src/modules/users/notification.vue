<template>
  <div class="page-notification-show">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="box">
          <div class="box-heading text-right border-bottom pb-2">
            <button class="btn btn-sm btn-outline-secondary">全部已读</button>
          </div>
          <ul class="list-group list-group-flush" v-if="notifications.length > 0">
            <li class="list-group-item list-group-item-action border-top-0 "><a href="#" class="text-blue">@jcc</a> 发布了新文章 <a href="#" class="text-blue">《如何高效开发小程序？》</a></li>
            <li class="list-group-item list-group-item-action text-gray-60"><a href="#" class="text-blue">@jcc</a> 发布了新文章 <a href="#" class="text-blue">《如何高效开发小程序？》</a></li>
            <li class="list-group-item list-group-item-action text-gray-60"><a href="#" class="text-blue">@jcc</a> 发布了新文章 <a href="#" class="text-blue">《如何高效开发小程序？》</a></li>
          </ul>
          <div class="text-center text-gray-80" v-else>
            无新通知
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        notifications: [{}]
      }
    }
  }
</script>
