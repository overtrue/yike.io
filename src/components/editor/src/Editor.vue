<template>
  <div class="editor">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            data-toggle="tab"
            href="#form-tab-editor"
            role="tab"
            aria-controls="form-tab-editor"
            aria-selected="true"
          >编辑</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click="preview"
            data-toggle="tab"
            href="#form-tab-preview"
            role="tab"
            aria-controls="form-tab-editor"
            aria-selected="false"
          >预览</a>
        </li>
        <li class="nav-item ml-auto">
          <div v-if="toolbar" class="editor-toolbar border-bottom d-flex align-items-center px-2">
            <!--<button class="btn btn-link p-1 text-18 text-grey-blue" type="button" @click="toggleHeading(2)"><format-header2-icon></format-header2-icon></button>-->
            <!--<button class="btn btn-link p-1 text-18 text-grey-blue" type="button" @click="toggleHeading(3)"><format-header3-icon></format-header3-icon></button>-->
            <!--<button class="btn btn-link p-1 text-18 text-grey-blue" type="button" @click="toggleBold"><format-bold-icon></format-bold-icon></button>-->
            <!--<button class="btn btn-link p-1 text-18 text-grey-blue" type="button" @click="toggleItalic"><format-italic-icon></format-italic-icon></button>-->
            <!--<button class="btn btn-link p-1 text-18 text-grey-blue" type="button" @click="toggleBlockquote"><format-quote-open-icon></format-quote-open-icon></button>-->
            <!--<button class="btn btn-link p-1 text-18 text-grey-blue" type="button" @click="insertCode"><code-tags-icon></code-tags-icon></button>-->
            <!--<button class="btn btn-link p-1 text-18 text-grey-blue" type="button" @click="toggleUnorderedList"><format-list-bulleted-icon></format-list-bulleted-icon></button>-->
            <!--<button class="btn btn-link p-1 text-18 text-grey-blue" type="button" @click="toggleOrderedList"><format-list-numbers-icon></format-list-numbers-icon></button>-->
            <!--<button class="btn btn-link p-1 text-18 text-grey-blue" type="button" @click="insertLink"><link-icon></link-icon></button>-->
          </div>
        </li>
      </ul>
    </div>
    <div class="tab-content card-body" id="form-tab-content">
      <div class="tab-pane fade show active" id="form-tab-editor" style="margin-left: -0.35rem;">
        <textarea id="editor" :placeholder="placeholder"></textarea>
      </div>
      <div class="tab-pane fade" id="form-tab-preview" style="min-height: 100%;">
        <markdown-body v-model="html"></markdown-body>
      </div>
    </div>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import EmojiCompleter from '../emoji-completer'
import AtCompleter from '../at-completer'
import '../attachment'
import { mapGetters } from 'vuex'
import PlusIcon from '$icons/Plus'
import LinkIcon from '$icons/Link'
import FormatHeader1Icon from '$icons/FormatHeader1'
import FormatHeader2Icon from '$icons/FormatHeader2'
import FormatHeader3Icon from '$icons/FormatHeader3'
import FormatBoldIcon from '$icons/FormatBold'
import FormatItalicIcon from '$icons/FormatItalic'
import FormatQuoteOpenIcon from '$icons/FormatQuoteOpen'
import CodeTagsIcon from '$icons/CodeTags'
import FormatListBulletedIcon from '$icons/FormatListBulleted'
import FormatListNumbersIcon from '$icons/FormatListNumbered'
import MarkdownBody from '$components/markdown-body'

require('codemirror/mode/gfm/gfm')
require('codemirror/addon/edit/continuelist')
require('codemirror/addon/edit/matchbrackets')
require('codemirror/addon/edit/closebrackets')
require('codemirror/addon/edit/matchtags')
require('codemirror/addon/display/placeholder')
require('codemirror/keymap/sublime')
require('../theme/yike.css')

export default {
  name: 'editor',
  props: {
    value: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Boolean,
      default: false
    },
    editorClass: {
      type: String,
      default: 'p-2'
    },
    placeholder: {
      type: String,
      default: '请在这里输入你的内容'
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    MarkdownBody,
    PlusIcon,
    FormatHeader1Icon,
    FormatHeader2Icon,
    FormatHeader3Icon,
    FormatBoldIcon,
    FormatItalicIcon,
    FormatQuoteOpenIcon,
    FormatListNumbersIcon,
    FormatListBulletedIcon,
    CodeTagsIcon,
    LinkIcon
  },
  data () {
    return {
      contentBackup: false,
      editor: null,
      editSession: null,
      selection: null,
      undoManager: null,
      tribute: null,
      html: '预览生成中...'
    }
  },
  watch: {
    value () {
      if (this.contentBackup === this.value) {
        return
      }
      this.setValue()
    }
  },
  computed: {
    ...mapGetters(['authToken'])
  },
  methods: {
    init () {
      this.initEditor()
    },

    initEditor () {
      this.editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
        keyMap: 'sublime',
        mode: 'markdown',
        lineWrapping: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        matchBothTags: true,
        value: this.value || '',
        profile: 'html',
        extraKeys: { Enter: 'newlineAndIndentContinueMarkdownList' }
      })
      this.editor.on('change', EmojiCompleter)
      this.editor.on('change', AtCompleter)
      this.editor.on('change', editor => {
        let content = editor.getValue()
        this.$emit('input', content)
        this.contentBackup = content
      })
      window.inlineAttachment.editors.codemirror4.attach(this.editor, {
        uploadFieldName: 'file',
        jsonFieldName: 'url',
        uploadUrl: this.$http.defaults.baseURL + '/files/upload',
        extraHeaders: {
          Authorization: `Bearer ${this.authToken}`
        }
      })
    },

    setValue () {
      if (this.value) {
        this.editor.setValue(this.value, 1)
      }
    },
    preview () {
      if (this.value.length <= 0) {
        return (this.html = '请先输入内容')
      }
      this.html = '预览生成中...'
      this.$http
        .post('contents/preview', { markdown: this.value })
        .then(html => (this.html = html))
    }
  },
  mounted () {
    this.init()
    this.setValue()
  }
}
</script>

<style lang="scss">
.ace_gutter {
  -webkit-font-smoothing: antialiased;
}
</style>
