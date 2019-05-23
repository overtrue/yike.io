<template>
  <div class="page-threads-show" v-if="ready">
    <div v-if="currentUser.has_banned">
      <user-locked />
    </div>
    <div v-else-if="$user() && !$user().has_activated">
      <div class="box-body py-4 text-center">
        <h1 class="display-4 text-gray-40">
          <alert />
        </h1>
        您需要先激活账户以使用此功能
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-md-9 m-auto">
        <div class="box box-flush">
          <form>
            <div class="card">
              <div class="card-header pt-3 border-bottom-0">
                <div class="input-group input-group">
                  <input type="text" ref="title_input" class="form-control form-control-lg" v-model="form.title" placeholder="请在这里输入标题（请精准表达）">
                </div>
              </div>
              <editor v-model="form.content.markdown" :toolbar="false" :options="{maxLines: Infinity}" placeholder="请使用 Markdown 格式详细并精准的表达，不得少于30个字符~"></editor>
              <div class="card-footer border-top p-2 d-flex justify-content-between">
                <div class="left-actions d-flex align-items-center">
                  <span class="text-muted">发布到</span>
                  <div class="dropdown ml-1">
                    <el-select filterable v-model="form.node_id">
                      <el-option v-for="item in nodes" :key="item.id" :value="item.id" :label="item.title"></el-option>
                    </el-select>
                  </div>
                </div>
                <div class="right-actions">
                  <button type="button" class="btn btn-primary" :disabled="!formReady" @click="showCaptcha(false)">立即发布</button>
                  <button type="button" class="btn btn-secondary ml-1" :disabled="!formReady" @click="submit(true)">保存为草稿</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Editor from '$components/editor'
import UserLocked from '$components/user-locked'
import localforage from 'localforage'
import Alert from '$icons/Alert'
import { Select as ElSelect, Option as ElOption } from 'element-ui'
import 'element-ui/lib/theme-chalk/select.css'

export default {
  name: 'thread-form',
  components: {
    Editor,
    Alert,
    ElSelect,
    ElOption,
    UserLocked
  },
  data () {
    return {
      ready: false,
      nodes: [],
      busing: false,
      form: {
        node_id: null,
        type: 'markdown',
        is_draft: true,
        title: '',
        content: {
          markdown: '',
          body: ''
        },
        ticket: null,
        randstr: null
      }
    }
  },
  watch: {
    form: {
      deep: true,
      handler () {
        localforage.setItem('thread.form', this.form)
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
    formReady () {
      return (
        !this.busing &&
        this.form.title.length >= 5 &&
        this.form.node_id > 0 &&
        this.form.content.markdown &&
        this.form.content.markdown.length >= 30
      )
    }
  },
  mounted () {
    this.loadNodes()
    if (this.$route.name == 'threads.edit') {
      this.loadThread(this.$route.params.id)
        .then(this.syncFromCache)
        .then(() => {
          this.ready = true
        })
    } else {
      this.syncFromCache()
      this.ready = true
    }
    this.$nextTick(() => {
      if (this.ready) {
        this.$refs['title_input'].focus()
      }
    })
  },
  methods: {
    syncFromCache () {
      localforage.getItem('thread.form', (err, form) => {
        if (!err && typeof form === 'object') {
          this.form = Object.assign(this.form, form)
        }
      })
    },
    clearCache () {
      localforage.removeItem('thread.form')
    },
    loadNodes () {
      this.busing = true
      return this.$http
        .get('nodes')
        .then(response => {
          this.nodes = response.data
          this.busing = false
        })
        .finally(() => (this.busing = false))
    },
    loadThread (id) {
      return this.$http
        .get(`threads/${id}`)
        .then(thread => (this.form = Object.assign(this.form, thread)))
    },
    showCaptcha (draft) {
      let captcha = new TencentCaptcha(
        process.env.VUE_APP_CAPTCHA_ID_PUBLISH,
        res => {
          if (res.ret === 0) {
            this.form.ticket = res.ticket
            this.form.randstr = res.randstr
            this.submit(draft)
          } else {
            return this.$message.error('请先完成验证！')
          }
        }
      )
      captcha.show()
    },
    submit (draft = true) {
      if (!this.form.ticket) {
        return this.$message.error('请先完成验证！')
      }
      this.form.is_draft = draft
      this.busing = true
      let promise = null
      let isEdit = this.$route.name == 'threads.edit'

      if (isEdit) {
        promise = this.$http
          .patch(`threads/${this.$route.params.id}`,this.form)
      } else {
        promise = this.$http.post('threads', this.form)
      }

      promise
        .then(response => {
          this.$message.success(
            '内容已' + (draft ? '保存为草稿' : isEdit ? '更新' : '发布')
          )
          this.$router.replace({
            name: 'threads.show',
            params: { id: response.id }
          })
          this.clearCache()
        })
        .finally(() => (this.busing = false))
    }
  }
}
</script>

<style lang="scss">
.editor-container {
  overflow: auto;
  height: calc(100vh - 370px);
}
</style>
