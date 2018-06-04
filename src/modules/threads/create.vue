<template>
  <div class="page-threads-show">
    <div class="row">
      <div class="col-md-9 m-auto">
        <div class="box box-flush">
          <form>
            <div class="box-heading box-body border-bottom mb-0">
              <div class="input-group input-group-lg">
                <input type="text" class="form-control border-0 px-0 text-24" v-model="form.title" placeholder="请在这里输入标题">
              </div>
            </div>
            <editor v-model="form.content"></editor>
            <div class="box-footer border-top p-2 d-flex justify-content-between">
              <div class="left-actions d-flex align-items-center">
                <span class="text-muted">发布到</span>
                <div class="dropdown ml-1">
                  <div class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    小程序开发
                  </div>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
                <span class="text-muted ml-2">标签</span>
                <button class="btn btn-ghost btn-icon ml-2"><plus-icon></plus-icon></button>
              </div>
              <div class="right-actions">
                <button type="button" class="btn btn-primary">立即发布</button>
                <button type="button" class="btn btn-secondary ml-1">保存为草稿</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Editor from "@components/editor"

  export default {
    components: {
      Editor,
    },
    data() {
      return {
        form: {
          content: '安正超'
        }
      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .form-control:focus {
    border: none;
    box-shadow: none;
  }
</style>
