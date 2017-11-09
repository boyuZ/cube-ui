webpackJsonp([23],{463:function(s,t,a){s.exports=a(533)},533:function(s,t,a){var v=a(11)(null,a(534),null,null,null);s.exports=v.exports},534:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Toast")]),s._v(" "),a("p",[a("code",{pre:!0},[s._v("Toast")]),s._v(" component.You can use it to show non-modal tip message without user interaction.")]),s._v(" "),a("h3",[s._v("Example")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Duration of display")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showToastTime"')]),s._v(">")]),s._v("Toast - time 1s"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showToastTime0"')]),s._v(">")]),s._v("Toast - time 0"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showToastTime() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" toast = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Toast time 1s'")]),s._v("\n      })\n      toast.show()\n    },\n    showToastTime0() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" toast = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Toast time 0'")]),s._v("\n      })\n      toast.show()\n      setTimeout("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        toast.hide()\n      }, "),a("span",{attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(")\n    }\n  }\n}\n")])]),s._v(" "),a("p",[s._v("Set "),a("code",{pre:!0},[s._v("time")]),s._v(" to change the duration of display.If set to 0, the toast will not hide automatically and you must invoke the component's "),a("code",{pre:!0},[s._v("hide")]),s._v(" method manually to hide it.")])]),s._v(" "),a("li",[a("p",[s._v("Show mask layer")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showToastMask"')]),s._v(">")]),s._v("Toast- with mask"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showToastMask () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" toast = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Loading...'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("mask")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      })\n      toast.show()\n    }\n  }\n}\n")])]),s._v(" "),a("p",[s._v("Set "),a("code",{pre:!0},[s._v("mask")]),s._v(" to "),a("code",{pre:!0},[s._v("true")]),s._v(" to display mask.")])]),s._v(" "),a("li",[a("p",[s._v("Tip type")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showToastType"')]),s._v(">")]),s._v("Toast - type"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showToastType() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" toast = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Correct'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'correct'")]),s._v("\n      })\n      toast.show()\n    }\n  }\n}\n")])]),s._v(" "),a("p",[s._v("Set "),a("code",{pre:!0},[s._v("type")]),s._v(" to change the tip icon.You can see accepted types in the following "),a("code",{pre:!0},[s._v("Props configuration")]),s._v(".")])])]),s._v(" "),a("h3",[s._v("Props configuration")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Attribute")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Accepted Values")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",[s._v("toast type(different types of icons)")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("loading/correct/error/warn")]),s._v(" "),a("td",[s._v("loading")])]),s._v(" "),a("tr",[a("td",[s._v("mask")]),s._v(" "),a("td",[s._v("whether to show mask layer")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("true/false")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("txt")]),s._v(" "),a("td",[s._v("tip text")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("''")])]),s._v(" "),a("tr",[a("td",[s._v("time")]),s._v(" "),a("td",[s._v("display duration, millisecond")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("3000")])])])])])}]}}});