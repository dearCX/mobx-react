import React, { Component } from 'react';
import { Avatar, Divider } from 'antd';
import './index.css';
class Header extends Component {
  
  render () {
    const { onQuit } = this.props
    return (
      <div className="user-info">
        <Avatar icon="user" />
        <span className="user">用户名</span>
        <Divider type="vertical" />
        <span className="quit" onClick={onQuit}>退出</span>
      </div>
    )
  }
}
export default Header