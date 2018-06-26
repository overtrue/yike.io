<template>
  <div class="editor">
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
    <div class="editor-container" :class="editorClass">
      <textarea id="editor" :placeholder="placeholder"></textarea>
    </div>
  </div>
</template>

<script>
  import CodeMirror from "codemirror"
  import EmojiCompleter from '../emoji-completer'
  import PlusIcon from "@icons/plus"
  import LinkIcon from "@icons/link"
  import FormatHeader1Icon from "@icons/format-header-1"
  import FormatHeader2Icon from "@icons/format-header-2"
  import FormatHeader3Icon from "@icons/format-header-3"
  import FormatBoldIcon from "@icons/format-bold"
  import FormatItalicIcon from "@icons/format-italic"
  import FormatQuoteOpenIcon from "@icons/format-quote-open"
  import CodeTagsIcon from "@icons/code-tags"
  import FormatListBulletedIcon from "@icons/format-list-bulleted"
  import FormatListNumbersIcon from "@icons/format-list-numbers"

  require("codemirror/mode/gfm/gfm")
  require('codemirror/addon/edit/continuelist')
  require('codemirror/addon/edit/matchbrackets')
  require('codemirror/addon/edit/closebrackets')
  require('codemirror/addon/edit/matchtags')
  require("codemirror/addon/display/placeholder")
  require("codemirror/keymap/sublime")
  require('../theme/yike.css')

  export default {
    name: 'editor',
    props: {
      value: {
        type: String,
        default: ""
      },
      toolbar: {
        type: Boolean,
        default: true
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
        default() {
          return {}
        }
      }
    },
    components: {
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
      LinkIcon,
    },
    data() {
      return {
        contentBackup: false,
        editor: null,
        editSession: null,
        selection: null,
        undoManager: null,
        tribute: null,
      }
    },
    watch: {
      value() {
        if (this.contentBackup == this.value) {return}
        if (this.value) {
          this.editor.setValue(this.value, 1)
        }
      }
    },
    methods: {
      init() {
        this.initEditor()
      },

      initEditor() {
        this.editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
          keyMap: "sublime",
          mode:  "markdown",
          lineWrapping: true,
          autoCloseBrackets: true,
          matchBrackets: true,
          matchBothTags: true,
          value: this.value || '',
          profile: 'html',
          extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
        })
        this.editor.on('change', EmojiCompleter)
        this.editor.on('change', (editor) => {
          let content = editor.getValue()
          this.$emit('input', content)
          this.contentBackup = content
        })
      }
    },
    mounted() {
      this.init()
      String.prototype.capitalize = function() {
        return this.replace(/(?:^|\s)\S/g, a => a.toUpperCase())
      }
    }
  }
</script>

<style lang="scss">
  .editor-container {
    width: 100%;

    .ace-yike {
      min-height: 50px;
    }
  }
  .ace_gutter {
    -webkit-font-smoothing: antialiased;
  }
</style>
