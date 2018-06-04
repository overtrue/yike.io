<template>
  <div class="editor">
    <div class="editor-toolbar border-bottom d-flex align-items-center px-2">
      <button class="btn btn-link p-1 text-20" type="button" @click="toggleHeading(2)"><format-header2-icon></format-header2-icon></button>
      <button class="btn btn-link p-1 text-20" type="button" @click="toggleHeading(3)"><format-header3-icon></format-header3-icon></button>
      <button class="btn btn-link p-1 text-20" type="button" @click="toggleBold"><format-bold-icon></format-bold-icon></button>
      <button class="btn btn-link p-1 text-20" type="button" @click="toggleItalic"><format-italic-icon></format-italic-icon></button>
      <button class="btn btn-link p-1 text-20" type="button" @click="toggleBlockquote"><format-quote-open-icon></format-quote-open-icon></button>
      <button class="btn btn-link p-1 text-20" type="button" @click="insertCode"><code-tags-icon></code-tags-icon></button>
      <button class="btn btn-link p-1 text-20" type="button" @click="toggleUnorderedList"><format-list-bulleted-icon></format-list-bulleted-icon></button>
      <button class="btn btn-link p-1 text-20" type="button" @click="toggleOrderedList"><format-list-numbers-icon></format-list-numbers-icon></button>
      <button class="btn btn-link p-1 text-20" type="button" @click="insertLink"><link-icon></link-icon></button>
    </div>
    <div class="editor-container p-2">
      <textarea id="editor" cols="30" rows="20" placeholder="请在这里输入你的内容"></textarea>
    </div>
  </div>
</template>

<script>
  import * as ace from 'brace';
  import 'brace/mode/markdown';
  import "../theme-yike"
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
  require('typeface-ubuntu-mono')

  export default {
    name: 'editor',
    props: {
      value: {
        type: String,
        default: ""
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
        editor: null,
        editSession: null,
        selection: null,
        undoManager: null,
        content: null,
      }
    },
    methods: {
      init() {
        this.editor = ace.edit('editor')
        this.editor.setOptions({
          maxLines: 50,
          minLines: 10,
          mode: "ace/mode/markdown",
          theme: "ace/theme/yike",
          showGutter: false,
          fontSize: 14,
        })
        this.editSession = this.editor.getSession()
        this.selection = this.editSession.getSelection()
        this.undoManager = this.editSession.getUndoManager()

        this.editor.setHighlightActiveLine(false)
        this.editor.setShowPrintMargin(false)

        this.editSession.setValue(this.value)
        this.editSession.setUseSoftTabs(true)
        this.editSession.setUseWrapMode(true)
        this.editor.getSelection().moveCursorFileEnd()

        this.editSession.on('change', () => {
          this.$emit('input', this.editor.getValue())
        })
      },

      /* Ctrl/Cmd-B */
      toggleBold() {
        if (!this.selection.isEmpty()) {
          const range = this.selection.getRange()
          const text = this.editSession.getTextRange(range)
          this.editSession.replace(range, `**${text}**`)
          this.selection.clearSelection()
          return
        }
        const { row, column } = this.selection.getCursor()
        this.editor.insert('****')
        this.moveCursor(row, column + 2)
      },
      /* Shift-Ctrl/Cmd-I */
      toggleItalic() {
        const selection = this.editor.getSelection()
        if (!selection.isEmpty()) {
          const range = selection.getRange()
          const text = this.editSession.getTextRange(range)
          this.editSession.replace(range, `*${text}*`)
          return
        }
        const position = selection.getCursor()
        this.editor.insert('**')
        this.moveCursor(position.row, position.column + 1)
      },
      /* Ctrl/Cmd-Alt-T */
      toggleStrikeThrough() {
        const selection = this.editor.getSelection()
        if (!selection.isEmpty()) {
          const range = selection.getRange()
          const text = this.editSession.getTextRange(range)
          this.editSession.replace(range, `~~${text}~~`)
          return
        }
        const position = selection.getCursor()
        this.editor.insert('~~~~')
        this.moveCursor(position.row, position.column + 2)
      },
      /* Shift-Ctrl/Cmd-M */
      toggleMarked() {
        const selection = this.editor.getSelection()
        if (!selection.isEmpty()) {
          const range = selection.getRange()
          const text = this.editSession.getTextRange(range)
          this.editSession.replace(range, `==${text}==`)
          return
        }
        const position = selection.getCursor()
        this.editor.insert('====')
        this.moveCursor(position.row, position.column + 2)
      },
      /* Shift-Ctrl/Cmd-U */
      toggleUnderline() {
        const selection = this.editor.getSelection()
        if (!selection.isEmpty()) {
          const range = selection.getRange()
          const text = this.editSession.getTextRange(range)
          this.editSession.replace(range, `++${text}++`)
          return
        }
        const position = selection.getCursor()
        this.editor.insert('++++')
        this.moveCursor(position.row, position.column + 2)
      },
      toggleSuperscript() {
        const selection = this.editor.getSelection()
        if (!selection.isEmpty()) {
          const range = selection.getRange()
          const text = this.editSession.getTextRange(range)
          this.editSession.replace(range, `^${text}^`)
          return
        }
        const position = selection.getCursor()
        this.editor.insert('^^')
        this.moveCursor(position.row, position.column + 1)
      },
      toggleSubscript() {
        const selection = this.editor.getSelection()
        if (!selection.isEmpty()) {
          const range = selection.getRange()
          const text = this.editSession.getTextRange(range)
          this.editSession.replace(range, `~${text}~`)
          return
        }
        const position = selection.getCursor()
        this.editor.insert('~~')
        this.moveCursor(position.row, position.column + 1)
      },
      /* Ctrl/Cmd-H */
      toggleHeading(level = 1) {
        const selection = this.editor.getSelection()
        const { row } = selection.getCursor()
        const lineText = this.editSession.getLine(row)
        const length = lineText.length

        level = level || lineText.search(/[^#]/)

        if (level == 0 || lineText.search(/[^#]/).length >= level) {
          return
        }

        // console.log(row, column, level, length)
        const range = {
          start: {
            row,
            column: 0
          },
          end: {
            row,
            column: length
          }
        }
        if (level >= 6) {
          return
        }
        const heading = level <= 0 ? '# ' : '#'.repeat(level)

        this.editSession.replace(range, `${heading} ${lineText.replace(/^(#+\s*)/, '')}`)
        this.editor.focus()
      },
      /* Ctrl/Cmd-. */
      toggleBlockquote() {
        const selection = this.editor.getSelection()
        const { row } = selection.getCursor()
        const lineText = this.editSession.getLine(row)
        const length = lineText.length
        const index = lineText.search(/[^>]/)
        // console.log(row, column, index, length)
        const range = {
          start: {
            row,
            column: 0
          },
          end: {
            row,
            column: length
          }
        }
        if (index <= 0) {
          this.editSession.replace(range, `> ${lineText}`)
        } else {
          this.editSession.replace(range, lineText.replace(/^(\s*)>\s+/, ''))
        }
        this.editor.focus()
      },
      /* Ctrl/Cmd-L */
      toggleUnorderedList() {
        const selection = this.editor.getSelection()
        const { row } = selection.getCursor()
        const lineText = this.editSession.getLine(row)
        const length = lineText.length
        const index = lineText.search(/[^\*]/)
        // console.log(row, column, index, length)
        const range = {
          start: {
            row,
            column: 0
          },
          end: {
            row,
            column: length
          }
        }
        if (index <= 0) {
          this.editSession.replace(range, `* ${lineText}`)
        } else {
          this.editSession.replace(range, lineText.replace(/^(\s*)\*\s+/, ''))
        }
        this.editor.focus()
      },
      /* Ctrl/Cmd-Alt-L */
      toggleOrderedList() {
        const selection = this.editor.getSelection()
        const { row } = selection.getCursor()
        const lineText = this.editSession.getLine(row)
        const length = lineText.length
        const index = lineText.search(/[^\d{1}]/)
        // console.log(row, column, index, length)
        const range = {
          start: {
            row,
            column: 0
          },
          end: {
            row,
            column: length
          }
        }
        if (index <= 0) {
          // follow last row order num
          // console.log(this.lastFocusRow, this.orderNum)
          if (this.lastFocusRow + 1 === row) {
            this.orderNum += 1
            this.lastFocusRow += 1
          } else {
            this.lastFocusRow = row
            this.orderNum = 1
          }
          this.editSession.replace(range, `${this.orderNum}. ${lineText}`)
        } else {
          this.lastFocusRow = row
          this.orderNum = 1
          this.editSession.replace(range, lineText.replace(/^(\s*)\d{1}\.\s+/, ''))
        }
        this.editor.focus()
      },
      insertHorizontalRule() {
        const horizontalRule = '\n\n----------\n\n'
        const selection = this.selection
        if (!selection.isEmpty()) {
          const range = selection.getRange()
          this.editSession.replace(range, horizontalRule)
          selection.clearSelection()
          this.editor.focus()
          return
        }
        this.editor.insert(horizontalRule)
        this.editor.focus()
      },
      /* Ctrl/Cmd-K */
      insertLink() {
        const selection = this.editor.getSelection()
        if (!selection.isEmpty()) {
          const range = selection.getRange()
          this.editSession.replace(range, '[](http://)')
          const { row, column } = selection.getSelectionAnchor()
          selection.clearSelection()
          this.moveCursor(row, column - 10)
          return
        }
        this.editor.insert('[](http://)')
        const { row, column } = selection.getSelectionAnchor()
        this.moveCursor(row, column - 10)
      },
      /* Ctrl/Cmd-I */
      insertImage() {
        const selection = this.selection
        if (!selection.isEmpty()) {
          const range = selection.getRange()
          this.editSession.replace(range, '![](http://)')
          const { row, column } = selection.getSelectionAnchor()
          selection.clearSelection()
          this.moveCursor(row, column - 10)
          return
        }
        this.editor.insert('![](http://)')
        const { row, column } = selection.getSelectionAnchor()
        this.moveCursor(row, column - 10)
      },
      /* Shift-Ctrl/Cmd-C */
      insertCode() {
        const code = '\n' +
          '```\n' +
          '```\n'
        const selection = this.selection
        if (!selection.isEmpty()) {
          const range = selection.getRange()
          this.editSession.replace(range, code)
          const { row, column } = selection.getSelectionAnchor()
          selection.clearSelection()
          this.moveCursor(row - 2, column + 3)
          return
        }
        this.editor.insert(code)
        const { row, column } = selection.getSelectionAnchor()
        this.moveCursor(row - 2, column + 3)
      },
      /* Ctrl/Cmd-Alt-T */
      insertTable() {
        const table = '\n\n' +
          '| Column 1 | Column 2 | Column 3 |\n' +
          '| -------- | -------- | -------- |\n' +
          '| Text     | Text     | Text     |\n\n'
        const selection = this.editor.getSelection()
        if (!selection.isEmpty()) {
          const range = selection.getRange()
          this.editSession.replace(range, table)
          selection.clearSelection()
          this.editor.focus()
          return
        }
        this.editor.insert(table)
        this.editor.focus()
      },

      moveCursor(row, column) {
        this.editor.moveCursorTo(row, column)
        this.editor.focus()
      },
    },
    mounted() {
      this.init()
      String.prototype.capitalize = function() {
        return this.replace(/(?:^|\s)\S/g, a => a.toUpperCase())
      }
    }
  }
</script>

<style scoped>
  .editor-container {
    width: 100%;
    overflow: auto;
    height: calc(100vh - 370px);
  }
  .ace_gutter {
    -webkit-font-smoothing: antialiased;
  }
</style>
