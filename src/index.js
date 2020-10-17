import React from './react';    // react api
import ReactDOM from './react-dom';  // react 渲染dom
// import './index.css';
// import App from './App';
// jsx 是一种语法，在webpack打包的时候 bable会编译成js
let element = (
  <div title="123"> 
		<h3 className="title" > hello, react</h3>
	</div> 
)

// bable编译后  https://www.babeljs.cn/repl
//React.createElement（类型，属性，...children）


// 虚拟dom就是一个对象，以js对象的方式描述虚拟dom
console.log(element)


// 渲染
ReactDOM.render(
  element,
  document.getElementById('root')
);

// ReactDOM.render('虚拟dom', '容器')

