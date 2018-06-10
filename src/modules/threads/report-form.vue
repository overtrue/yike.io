<template>
  <el-dialog title="举报文章" :visible="visible" width="30%" @close="close">
    <form>
      <div class="form-group">
        <textarea class="form-control" rows="6" placeholder="请输入举报信息" v-model="remark"></textarea>
      </div>
    </form>
    <div slot="footer" class="dialog-footer">
      <button class="btn btn-sm btn-outline-danger" @click="report">举 报</button>
    </div>
  </el-dialog>
</template>

<script>
  import { Dialog } from 'element-ui'
  import 'element-ui/lib/theme-chalk/dialog.css'

  export default {
    components: {
      'el-dialog': Dialog
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        remark: ''
      }
    },
    methods: {
      report() {
        this.api(`threads/${this.$route.params.id}/report`).post({
          remark: this.remark
        })

        this.close()
        this.$message.success('举报成功！')
      },
      close() {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss">
  textarea {
    resize: none;
  }
</style>
