ace.define('ace/theme/yike', ['require', 'exports', 'module', 'ace/lib/dom'], function (acequire, exports, module) {
  exports.isDark = false
  exports.cssClass = 'ace-yike'
  exports.cssText = `.ace-yike .ace_gutter {
background: #F5F7FA;
color: #A0AABF;
overflow : hidden;
border-right: 1px solid #D3DAEA;
}
.ace-yike .ace_print-margin {
width: 1px;
background: #e8e8e8;
}
.ace-yike .ace_strong,
.ace-yike .ace_constant,
.ace-yike .ace_heading {
font-weight: 600;
}
.ace-yike .ace_markup.ace_heading {
font-weight: 400;
}
.ace-yike .ace_emphasis,
.ace-yike .ace_list {
font-style: italic;
}
.ace-yike .ace_markup.ace_list {
font-style: normal;
}
.ace-yike {
line-height: 28px;
font-family: "Ubuntu Mono", Monaco;
letter-spacing: 0 !important;
background-color: #FFFFFF;
color: #555;
}
.ace-yike .ace_cursor {
color: black;
}
.ace-yike .ace_invisible {
color: rgb(191, 191, 191);
}
.ace-yike .ace_constant.ace_buildin {
color: rgb(88, 72, 246);
}
.ace-yike .ace_constant.ace_language {
color: rgb(88, 92, 246);
}
.ace-yike .ace_constant.ace_library {
color: rgb(6, 150, 14);
}
.ace-yike .ace_invalid {
background-color: rgb(153, 0, 0);
color: white;
}
.ace-yike .ace_fold {
}
.ace-yike .ace_support.ace_function {
color: rgb(60, 76, 114);
}
.ace-yike .ace_support.ace_constant {
color: rgb(6, 150, 14);
}
.ace-yike .ace_support.ace_type,
.ace-yike .ace_support.ace_class
.ace-yike .ace_support.ace_other {
color: rgb(109, 121, 222);
}
.ace-yike .ace_variable.ace_parameter {
font-style:italic;
color:#FD971F;
}
.ace-yike .ace_keyword.ace_operator {
color: rgb(104, 118, 135);
}
.ace-yike .ace_comment {
color: #236e24;
}
.ace-yike .ace_comment.ace_doc {
color: #236e24;
}
.ace-yike .ace_comment.ace_doc.ace_tag {
color: #236e24;
}
.ace-yike .ace_constant.ace_numeric {
color: rgb(0, 0, 205);
}
.ace-yike .ace_variable {
color: rgb(49, 132, 149);
}
.ace-yike .ace_xml-pe {
color: rgb(104, 104, 91);
}
.ace-yike .ace_entity.ace_name.ace_function {
color: #0000A2;
}
.ace-yike .ace_heading {
}
.ace-yike .ace_marker-layer .ace_selection {
background: rgb(181, 213, 255);
}
.ace-yike .ace_marker-layer .ace_step {
background: rgb(252, 255, 0);
}
.ace-yike .ace_marker-layer .ace_stack {
background: rgb(164, 229, 101);
}
.ace-yike .ace_marker-layer .ace_bracket {
margin: -1px 0 0 -1px;
border: 1px solid rgb(192, 192, 192);
}
.ace-yike .ace_marker-layer .ace_active-line {
background: #F7FAFC;
}
.ace-yike .ace_gutter-active-line {
background-color : #E0E5EC;
}
.ace-yike .ace_marker-layer .ace_selected-word {
background: rgb(250, 250, 255);
border: 1px solid rgb(200, 200, 250);
}
.ace-yike .ace_storage,
.ace-yike .ace_keyword,
.ace-yike .ace_meta.ace_tag {
color: rgb(147, 15, 128);
}
.ace-yike .ace_string.ace_regex {
color: rgb(255, 0, 0)
}
.ace-yike .ace_entity.ace_other.ace_attribute-name {
color: #994409;
}
.ace-yike .ace_indent-guide {
background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}
`

  var dom = acequire('../lib/dom')
  dom.importCssString(exports.cssText, exports.cssClass)
})
