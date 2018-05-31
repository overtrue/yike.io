<template>
  <div class="page-threads-show">
    <div class="row">
      <div class="col-md-9">
        <div class="box">
          <form>
            <div class="box-heading border-bottom">
              <div class="input-group input-group-lg">
                <input type="text" class="form-control border-0" v-model="form.title">
              </div>
            </div>
            <textarea class="form-control border-0" id="thread-content" cols="30" rows="20"></textarea>
          </form>
        </div>
      </div>
      <div class="col-md-3">
        <div class="box p-0">
          <div class="tags p-2">
            <span class="btn btn-outline-secondary m-1">小程序</span>
            <span class="btn btn-outline-primary m-1">OAuth</span>
            <span class="btn btn-outline-success m-1">授权</span>
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
  import CodeMirror from "codemirror"
  import PlusIcon from "@icons/plus"

  require("@sass/markdown.scss")
  require("codemirror/mode/gfm/gfm")
  require("codemirror/addon/display/placeholder")
  require("codemirror/keymap/sublime")

  export default {
    components: {PlusIcon},
    data() {
      return {
        editor: {},
        form: {
          content: ''
        }
      }
    },
    mounted() {
      this.setupEditor()
    },
    methods: {
      setupEditor() {
        let vm = this

        this.editor = CodeMirror.fromTextArea(document.getElementById('thread-content'), {
          keyMap: "sublime",
          mode:  "markdown",
          lineWrapping: true,
          autoCloseBrackets: true,
          matchBrackets: true,
          value: vm.form.content || '',
          profile: 'html'
        })

        this.editor.on('change', function(editor){
          vm.form.content = editor.getValue()
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .form-control:focus {
    border: none;
    box-shadow: none;
  }
</style>
