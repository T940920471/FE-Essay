(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{189:function(a,t,s){"use strict";s.r(t);var r=s(6),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("有了 CSS3，我们可以少些不少 JS 代码。CSS 3 不难，但很难用好。")]),a._v(" "),s("h1",{attrs:{id:"过渡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过渡"}},[a._v("#")]),a._v(" 过渡")]),a._v(" "),s("blockquote",[s("p",[a._v("CSS3 过渡是元素从一种样式逐渐改变为另一种样式的效果，要实现这一点，必须规定两项内容：指定要添加效果的 CSS 属性，执行效果持续时间。")])]),a._v(" "),s("p",[a._v("过渡是最常用的样式之一，平常使用场景为让一些交互效果变得更加生动流畅，不会显得那么生硬。")]),a._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("transition: CSS属性, 花费时间, 效果曲线(默认是 ease), 延迟时间(默认是 0);\n")])])]),s("p",[a._v("上面是简写模式，也可以分开写：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("transition-property: CSS属性;\ntransition-duration: 花费时间;\ntransition-timing-function: 效果曲线;\ntransition-delay: 延迟时间;\n")])])]),s("h1",{attrs:{id:"动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[a._v("#")]),a._v(" 动画")]),a._v(" "),s("p",[a._v("动画也是非常常用的样式之一，平常主要用来实现交互的动画效果，配合过渡让整个交互可以变得非常自然。")]),a._v(" "),s("h2",{attrs:{id:"语法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-2"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("animation: 动画名称, 一个周期花费时间, 运动曲线(默认是 ease), 动画延迟(默认是 0), 播放次数(默认是 1), 是否反向播放动画(默认 normal), 是否暂停动画(默认 runing);\n\nanimation-fill-mode: none | forwards | backwards | both;\nnone: 不改变默认行为;\nforwards: 当动画完成后，保持最后一个属性值（在最后一个关键帧定义）;\nbackwards: 在 animation-delay 所制定的一段时间内，动画显示之前，应用开始属性值（在第一个关键帧中定义）;\nboth: 向前向后都被应用\n")])])]),s("h1",{attrs:{id:"形状变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#形状变化"}},[a._v("#")]),a._v(" 形状变化")]),a._v(" "),s("h2",{attrs:{id:"旋转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旋转"}},[a._v("#")]),a._v(" 旋转")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("transform: rotate(30deg);\n")])])]),s("h2",{attrs:{id:"位移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位移"}},[a._v("#")]),a._v(" 位移")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("transform: translate(30px, 30px);\n")])])]),s("h2",{attrs:{id:"缩放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缩放"}},[a._v("#")]),a._v(" 缩放")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("transform: scale(.8);\n")])])]),s("h2",{attrs:{id:"偏离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#偏离"}},[a._v("#")]),a._v(" 偏离")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("transform: skew(10deg, 10deg);\n")])])]),s("h2",{attrs:{id:"翻滚"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#翻滚"}},[a._v("#")]),a._v(" 翻滚")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("transform: rotateX(180deg); // 以 X 轴翻滚\ntransform: rotateY(180deg); // 以 Y 轴翻滚\ntransform: rotate3d(10,10,10,90deg); // 以圆心 3d 翻滚\n")])])]),s("h1",{attrs:{id:"选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[a._v("#")]),a._v(" 选择器")]),a._v(" "),s("h1",{attrs:{id:"阴影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阴影"}},[a._v("#")]),a._v(" 阴影")]),a._v(" "),s("blockquote",[s("p",[a._v("以前没有 CSS3，或者需要兼容低版本浏览器的时候，阴影只能使用图片来实现。")])]),a._v(" "),s("h2",{attrs:{id:"语法-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-3"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("box-shadow: 水平阴影位置 垂直阴影位置 模糊距离 阴影的大小 阴影的颜色 阴影的方向(默认是从里到外，设置inset就是从外到里);\n")])])]),s("h1",{attrs:{id:"边框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#边框"}},[a._v("#")]),a._v(" 边框")]),a._v(" "),s("h2",{attrs:{id:"边框图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#边框图片"}},[a._v("#")]),a._v(" 边框图片")]),a._v(" "),s("h3",{attrs:{id:"语法-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-4"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("border-image: 图片url 图像边界向内偏移 图像边界的宽度(默认为边框宽度) 用于指定在边框外部绘制偏移的量(默认0) 铺满方式(重复repeat、拉伸stretch、铺满round，默认为拉伸);\n")])])]),s("h2",{attrs:{id:"边框圆角"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#边框圆角"}},[a._v("#")]),a._v(" 边框圆角")]),a._v(" "),s("h3",{attrs:{id:"语法-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-5"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("border-radius: n1, n2, n3, n4;\n")])])]),s("h1",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),s("h2",{attrs:{id:"background-clip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-clip"}},[a._v("#")]),a._v(" background-clip")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("border-box")]),a._v(" "),s("p",[a._v("背景从边框开始绘制")])]),a._v(" "),s("li",[s("p",[a._v("padding-box")]),a._v(" "),s("p",[a._v("背景从 padding 开始绘制")])]),a._v(" "),s("li",[s("p",[a._v("content-box")]),a._v(" "),s("p",[a._v("背景从 content 开始绘制")])])]),a._v(" "),s("h2",{attrs:{id:"background-origin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-origin"}},[a._v("#")]),a._v(" background-origin")]),a._v(" "),s("p",[a._v("background-origin 用来指定 background-position 的相对位置")]),a._v(" "),s("ul",[s("li",[a._v("border-box")]),a._v(" "),s("li",[a._v("padding-box")]),a._v(" "),s("li",[a._v("content-box")])]),a._v(" "),s("h2",{attrs:{id:"background-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-size"}},[a._v("#")]),a._v(" background-size")]),a._v(" "),s("p",[a._v("背景图片的大小，某些属性可配合 background-repeat，background-position 一起使用")]),a._v(" "),s("h2",{attrs:{id:"允许多张背景图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#允许多张背景图片"}},[a._v("#")]),a._v(" 允许多张背景图片")]),a._v(" "),s("h1",{attrs:{id:"反射-倒影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射-倒影"}},[a._v("#")]),a._v(" 反射（倒影）")]),a._v(" "),s("h2",{attrs:{id:"语法-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-6"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-webkit-box-reflect: 方向[above-上 | below-下 | right-右 ｜ left-左], 偏移量, 遮罩图片\n")])])]),s("h1",{attrs:{id:"文字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文字"}},[a._v("#")]),a._v(" 文字")]),a._v(" "),s("h2",{attrs:{id:"换行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#换行"}},[a._v("#")]),a._v(" 换行")]),a._v(" "),s("p",[s("code",[a._v("word-break: normal | break-all | keep-all")])]),a._v(" "),s("ul",[s("li",[a._v("normal：默认规则，只在单词间隔处换行；")]),a._v(" "),s("li",[a._v("keep-all：只在半角空格或连接线处换行；")]),a._v(" "),s("li",[a._v("break-all：允许单词内换行。")])]),a._v(" "),s("p",[s("code",[a._v("word-wrap: normal | break-word")])]),a._v(" "),s("ul",[s("li",[a._v("break-word：允许常单词或者 URL 换行；")]),a._v(" "),s("li",[a._v("normal：默认规则，只在断子点换行。")])]),a._v(" "),s("p",[s("code",[a._v("text-overflow: clip | ellipsis")])]),a._v(" "),s("ul",[s("li",[a._v("clip：超出直接隐藏；")]),a._v(" "),s("li",[a._v("ellipsis：超出现实省略号")])]),a._v(" "),s("h2",{attrs:{id:"文字阴影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文字阴影"}},[a._v("#")]),a._v(" 文字阴影")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("text-shadow: 水平阴影 垂直阴影 模糊距离 阴影颜色\n")])])]),s("h1",{attrs:{id:"颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#颜色"}},[a._v("#")]),a._v(" 颜色")]),a._v(" "),s("h2",{attrs:{id:"rgba"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rgba"}},[a._v("#")]),a._v(" rgba")]),a._v(" "),s("ul",[s("li",[a._v("rgb：颜色值")]),a._v(" "),s("li",[a._v("a：饱和度")])]),a._v(" "),s("h2",{attrs:{id:"hsla"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hsla"}},[a._v("#")]),a._v(" hsla")]),a._v(" "),s("ul",[s("li",[a._v("h：色相")]),a._v(" "),s("li",[a._v("s：饱和度")]),a._v(" "),s("li",[a._v("l：亮度")]),a._v(" "),s("li",[a._v("a：透明度")])]),a._v(" "),s("h1",{attrs:{id:"渐变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渐变"}},[a._v("#")]),a._v(" 渐变")]),a._v(" "),s("h1",{attrs:{id:"滤镜"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#滤镜"}},[a._v("#")]),a._v(" 滤镜")]),a._v(" "),s("p",[a._v("可以用来实现类似于公祭日那天网站变灰色。")]),a._v(" "),s("h1",{attrs:{id:"弹性布局-flex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弹性布局-flex"}},[a._v("#")]),a._v(" 弹性布局（Flex）")]),a._v(" "),s("h1",{attrs:{id:"栅格布局-grid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栅格布局-grid"}},[a._v("#")]),a._v(" 栅格布局（Grid）")]),a._v(" "),s("h1",{attrs:{id:"多列布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多列布局"}},[a._v("#")]),a._v(" 多列布局")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[a._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("#id")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("column-count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("column-rule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 2px solid #000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("news"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      123123412341238467219384u1rikdsm;faijspofiup1o823u4018734982934rdksa;lnoipjhpio1p283u412034\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("h1",{attrs:{id:"盒模型定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒模型定义"}},[a._v("#")]),a._v(" 盒模型定义")]),a._v(" "),s("p",[s("code",[a._v("box-sizing")]),a._v("：")]),a._v(" "),s("ul",[s("li",[a._v("border-box：IE 模型，元素宽高包含边框和 padding；")]),a._v(" "),s("li",[a._v("content-box：标准模型，元素宽高值包含 content。")])]),a._v(" "),s("h1",{attrs:{id:"媒体查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询"}},[a._v("#")]),a._v(" 媒体查询")]),a._v(" "),s("p",[a._v("用于响应式布局监听屏幕大小变化。")]),a._v(" "),s("h1",{attrs:{id:"混合模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#混合模式"}},[a._v("#")]),a._v(" 混合模式")])])}),[],!1,null,null,null);t.default=e.exports}}]);