<template>
  <div class="page-threads-show">
    <div class="row">
      <div class="col-md-9">
        <div class="box">
          <form>
            <div class="box-heading border-bottom">
              <div class="input-group input-group-lg">
                <input type="text" class="form-control border-0">
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-3">
        <div class="box p-0">
          <div class="tags p-2">
            <span class="badge badge-primary mr-1">小程序</span>
            <span class="badge badge-secondary mr-1">OAuth</span>
            <span class="badge badge-success">授权</span>
          </div>
          <div class="border-top d-flex justify-content-center p-2">
            <button class="btn btn-primary mr-2">立即发布</button>
            <button class="btn btn-secondary">保存草稿</button>
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
        content: ''
      }
    },
    watch: {
    }
  }
</script>

<style lang="scss" scoped>
  .form-control:focus {
    border: none;
    box-shadow: none;
  }
</style>
