import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './index.css';
import data from './data'
import { Link } from 'react-router-dom'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			collapsed: false,
			selKey: data.menus[0].children[0].key,
			openKey: data.menus[0].key
		}
		this.onCollapse = this.onCollapse.bind(this)
		this.menuClickHandle = this.menuClickHandle.bind(this)
	}
	onCollapse (collapsed) {
		this.setState({ collapsed });
	}
	menuClickHandle = e => {
    this.setState({
      selKey: e.key
    })
	}
	
  render () {
		const { selKey, openKey } = this.state
		return (
			<Sider
          collapsible
          collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
        >
				<div className="logo" />
				<Menu theme="dark" defaultSelectedKeys={[selKey]} defaultOpenKeys={[openKey]} mode="inline" onClick={this.menuClickHandle}>
				{ 
          data.menus.map(d => 
            <SubMenu 
            	key={d.key}
            	title={<span><Icon type={d.type} /><span>{d.title}</span></span>}
          	>
							{
								d.children.map(c => 
									<Menu.Item key={c.key}>
										<Link to={c.index}>
											{c.title}
										</Link>
									</Menu.Item>
								)
							}
          	</SubMenu>
          )
        }
				</Menu>
			</Sider>
		)
	}
}
export default SiderDemo;