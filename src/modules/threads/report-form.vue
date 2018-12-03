<template>
  <el-dialog title="举报文章" :visible="visible" width="30%" @close="close">
    <form>
      <div class="form-group">
        <textarea class="form-control" rows="6" placeholder="请详细描述举报原因" v-model="remark"></textarea>
      </div>
    </form>
    <div slot="footer" class="dialog-footer">
      <button class="btn btn-sm btn-success" @click="report">提 交</button>
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
  data () {
    return {
      remark: ''
    }
  },
  methods: {
    report () {
      this.$http
        .post(`threads/${this.$route.params.id}/report`, {
          remark: this.remark
        })
        .then(() => {
          this.close()
          this.$message.success('举报成功！')
        })
    },
    close () {
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
