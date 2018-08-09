import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Table, Button, Popconfirm, Icon } from 'antd'

@inject(stores => ({
  data: stores.home.data,
  categories: stores.home.categories,
  getCategories: stores.home.getCategories
}))
@observer

class Home extends Component {
    constructor (props) {
      super(props)
      this.state = {
        categories: {}
      }
      this.deleteData = this.deleteData.bind(this)
    }
    componentWillMount () {
      this.props.getCategories()
      const { categories } = this.props
      this.setState({
        categories: categories
      })
    }
    deleteData (id) {
      const { categories } = this.props
      console.log(categories.length)
      let data = categories.filter(c => c.objectID !== id)
      console.log(data.length)
      this.setState({categories : data})
    }
    render () {
      const { categories } = this.props
      const { data } = this.props
      const list = data
      console.log(list)
      const columns = [
        {
          title: '标题',
          dataIndex: 'title'
        },
        {
          title: '作者',
          dataIndex: 'author',
          width: 120
        },
        {
          title: '评论数',
          dataIndex: 'num_comments',
          width: 80
        },
        {
          title: '评论点',
          dataIndex: 'points',
          width: 80
        },
        {
          title: '链接地址',
          dataIndex: 'url'
        },
        {
          title: '操作',
          key: 'operation',
          width: 100,
          // render: () => <a href="javascript:;">action</a>
          render: (record) => {
            return (
              categories.length > 1
                ? (
                  <Popconfirm title="删除确认?" 
                              okText="确认" 
                              cancelText="取消" 
                              icon={<Icon type="question-circle-o" style={{ color: 'red' }} />} 
                              onConfirm={() => this.deleteData(record.objectID)}
                  >
                    <Button type="danger">删除</Button>
                  </Popconfirm>
                ) : null
            )
          }
        }
      ]
      return (
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Table dataSource={categories} columns={columns} bordered rowKey={(r,i)=>(i)}/>
        </div>
      )
    }
}
export default Home;