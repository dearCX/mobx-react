import React, { Component } from 'react';
import { Button } from 'antd'

class Mine extends Component {
    constructor (props) {
      super(props)
      this.toHome = this.toHome.bind(this)
    }
    toHome () {
      this.props.history.push('/home/one')
    }
    render () {
      return (
        <div>
          <h1>这是mineOne页面</h1>
          <Button type="primary" onClick={this.toHome}>跳转至homeOne页面</Button>
          
        </div>
      )
    }
}
export default Mine;