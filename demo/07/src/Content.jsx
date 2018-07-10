import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

@Form.create()
class Content extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">submit</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Content
