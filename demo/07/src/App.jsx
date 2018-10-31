import React, { Component } from 'react'
import { get } from './utils/require'

class Demo extends Component {
  componentDidMount() {
    get('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <img src="./hashiqi.jpeg" alt="" />
      </div>
    )
  }
}

export default Demo
