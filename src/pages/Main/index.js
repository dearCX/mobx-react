import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import SiderDemo from './../../components/Sides'
// import { Link } from 'react-router-dom'
import Routers from './../../router';
import { withRouter } from 'react-router-dom';
import HeaderContent from './../../components/Header'

const { Header, Content, Footer } = Layout;

class Main extends Component {
    constructor (props) {
      super(props)
      this.state = {
        loggedIn : localStorage.getItem('loggedIn')
      }
      this.loginOut = this.loginOut.bind(this)
    }
    loginOut () {
      localStorage.setItem('loggedIn', '')
      this.setState({loggedIn: false})
      this.props.history.push('/')
      window.location.reload()
    }
    render () {
      return (
        <div>
          <Layout style={{ minHeight: '100vh' }}>
            <SiderDemo></SiderDemo>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <HeaderContent onQuit={this.loginOut}/>
              </Header>
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <Routers></Routers>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </div>
      )
    }
}
export default withRouter(Main);