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

var myH1 = React.createElement('h1', {}, '这是一个大大的h1')

// <div id="mydiv" title="this is a div">这是一个div</div>
var myDiv = React.createElement('div', { title: 'this is a div', id: 'mydiv'}, '这是一个div', myH1)

// ReactDOM.render('要渲染的虚拟DOM元素', '要渲染到页面的哪个位置中')
// 注意ReactDOM.render() 方法的第二个参数，和Vue不一样，不接受字符串'#app'这样的字符串，而是需要传递一个原生的dom对象
ReactDOM.render(myDiv, document.getElementById('app'))