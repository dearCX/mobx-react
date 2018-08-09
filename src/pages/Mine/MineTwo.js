import React, { Component } from 'react';
import { Button } from 'antd'

class MineTwo extends Component {
    constructor (props) {
      super(props)
      this.toHome = this.toHome.bind(this)
    }
    toHome () {
      this.props.history.push('/home/two')
    }
    render () {
      return (
        <div>
          <h1>这是mineTwo页面</h1>
          <Button type="primary" onClick={this.toHome}>跳转至homeTwo页面</Button>
        </div>
      )
    }
}
export default MineTwo;