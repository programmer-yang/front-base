## React

React 是一个用于构建用户界面的 JAVASCRIPT 库
React 主要用于构建 UI，很多人认为 React 是 MVC 中的 V（视图）

> `demo/04` 下有一个 react 环境

### JSX

JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。

```javascript
render () {
  const name = 'React'
  return (
    <div className="demo">
      Hello {name} !
    </div>
  )
}
```

### 组件

一些 HTML、css、js 的集合

```javascript
const HelloMessage = () => {
  const name = "React";
  return <div className="demo">Hello {name} !</div>;
};

const Demo = () => {
  return (
    <div>
      <HelloMessage />
    </div>
  );
};
```

### 有状态

有自己的生命周期、状态

```javascript
import React, { Component } from "react";

class Demo extends Component {
  state = {
    name: "React"
  };
  componentDidMount() {
    // ...
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}
```

### 无状态组件

没有自己的生命周期、状态，只有属性

```javascript
import React from "react";

const Demo = props => {
  return <div>Hello {props.name} !</div>;
};
```

### 状态

有状态组件中定义的`state`

### 属性

 上一层传递下来的`props`

### 方法

```javascript
import React, { Component } from "react";

class Demo extends Component {
  state = {
    name: "React"
  };
  clicl = () => {
    this.setState({
      name: "React 666"
    });
  };
  render() {
    return (
      <div>
        <p>Hello {this.state.name}</p>
        <button onClick={this.click}>click</button>
      </div>
    );
  }
}
```

### 单向数据流

React 中的数据永远是从上层到下层的
