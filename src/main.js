// JS 打包入口文件

// 在 React 学习中，需要安装 两个包 react react-dom
// 1.1 react 是专门用来创建React组件、组件生命周期等
// 1.2 react-dom 里面主要封装了和 dom 操作相关的包，比如要把 组件渲染到页面上
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 在react 中，如果要创建 DOM 元素，只能使用 React 提供的 JS API 来创建，不能【直接】像Vue中那样，手写 HTML 元素
// React.createElement 方法用于创建虚拟 dom 对象，接受3个以上参数
// 参数1: 是个字符串参数，表示要创建的元素类型
// 参数2: 是个属性对象，表示 创建的元素上，有哪些属性
// 参数3: 从第三个参数的位置开始，后面可以方好多的虚拟DOM对象，这些参数，表示当前元素的子节点

// var myH1 = React.createElement('h1', {}, '这是一个大大的h1')

// <div id="mydiv" title="this is a div">这是一个div</div>
// var myDiv = React.createElement('div', { title: 'this is a div', id: 'mydiv'}, '这是一个div', myH1)

// 由于，React 官方发现，如果直接让用户手写 JS 代码创建元素，用户会疯掉，用户就开始寻找新的框架，于是
// React 官方，就提出了一套 JSX 语法规范，书写类似 HTML 那样的代码，快速定义虚拟DOM结构
// 问题是，JSX（符合xml规范的JS语法） 的原理是什么？
// 注意：千万要记住，哪怕你在JS中可以写 JSX 语法了，但是，JSX 内部在运行的时候，也是先把 类似 HTML 这样的标签代码
// 转换为了React.createElment的形式
// 也就是说，哪怕我们写的是 JSX 这样的标签，也并不是直接把 我们的HTML标签渲染到页面上，而是先转换成 React.createElement 这样的JS代码，在渲染到页面上；（
// JSX 是一个对程序员友好的语法糖）

// 如果要直接使用 JSX 语法，需要先安装相关的 语法转换工具
// 运行yarn add babel-preset-react -D
var myDiv = <div>
  这是使用 JSX 创建的div元素
</div>

// ReactDOM.render('要渲染的虚拟DOM元素', '要渲染到页面的哪个位置中')
// 注意ReactDOM.render() 方法的第二个参数，和Vue不一样，不接受字符串'#app'这样的字符串，而是需要传递一个原生的dom对象
ReactDOM.render(myDiv, document.getElementById('app'))