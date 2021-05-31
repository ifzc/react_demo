import React, { useState }from 'react'
import { Tabs, Card, Button  } from 'antd';
import SearchForm from '../../components/table/search';
import TableBasic from '../../components/table/TableBasic'
import TableOptional from '../../components/table/TableOptional'

import './index.scss'

const { TabPane } = Tabs;

export default function FingerprintDetail() {

    const callback = (key:string) => {
        console.log(key);
      }
      //换页
      const changeSize=(value:any)=>{
        console.log(value)
        }
      
      //列表相关
    const columnsStateMap = {
        password_last_time: {
            show: false,
            order: 2,
        }, password_expiration_time: {
            show: false,
            order: 2,
        }, get_time: {
            show: false,
            order: 2,
        }
    }

      let advancedTable = {
        count: 11,
        columns: userInfoColumns,
        data: userInfoData,
        columnsStateMap: columnsStateMap,
        changeSize: changeSize,
        selectedChange: null,
        ifRowSelection:false
    }
    //查询接口
    const searchCondition =(val:any)=>{
      console.log(val)
    }
    
    //引用查询条件
    let userInfo={inputList:[{placeholder:"用户名/shell",label:"用户搜索",name:"keyword"}],searchCondition:searchCondition}
      
    return(
        <Tabs defaultActiveKey="1" onChange={callback} className="detail">
    <TabPane tab="用户信息" key="1">
      <SearchForm data={userInfo}/>
      <TableOptional props={advancedTable} />
    </TabPane>
    <TabPane tab=" 软件清单" key="2">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="监听端口" key="3">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="运行进程" key="4">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab=" 运行服务" key="5">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab=" web站点" key="6">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="数据库信息" key="7">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="日志信息" key="8">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="补丁信息" key="9">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab=" 共享文件" key="10">
      Content of Tab Pane 2
    </TabPane>
  </Tabs>
    )
}

const userInfoData = [
  {
      id: 1,
      username: 'Administrator',
      status: '启用',
      description: `管理计算机(域)的内置帐户`,
      local_group_members: "	*Administrators *Performance Log Users",
      global_group_members: "	*None",
      last_login_time: "2020-01-09 16:15:35",
      password_last_time: '2020-01-09 16:15:35',
      password_expiration_time: "2020-01-09 16:15:35",
      get_time: "2020-01-09 16:15:35",
      update_time: "2020-01-09 16:15:35",
  },
  {
      id: 2,
      username: 'Guest',
      status: '禁用',
      description: `供来宾访问计算机或访问域的内置帐户`,
      local_group_members: "*Administrators *Guests",
      global_group_members: "	*None",
      last_login_time: "2020-01-09 16:15:35",
      password_last_time: '2020-01-09 16:15:35',
      password_expiration_time: "2020-01-09 16:15:35",
      get_time: "2020-01-09 16:15:35",
      update_time: "2020-01-09 16:15:35",
  }
];
const userInfoColumns = [
  {
      title: '用户名',
      dataIndex: 'username',
      key: 'username'
  },
  {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: true,
      onFilter: true,
      width: 80,
      valueEnum: {
          启用: { text: '启用', status: 'Default' },
          禁用: { text: '禁用', status: 'Success' },
      },
  },
  {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
  },
  {
      title: '本地组成员',
      dataIndex: 'local_group_members',
      key: 'local_group_members',
  }, {
      title: '全局组成员',
      dataIndex: 'global_group_members',
      key: 'global_group_members',
  },
  {
      title: '上次登录时间',
      dataIndex: 'last_login_time',
      key: 'last_login_time'
  },
  {
      title: '上次设置密码时间',
      dataIndex: 'password_last_time',
      key: 'password_last_time'
  },
  {
      title: '密码到期时间',
      dataIndex: 'password_expiration_time',
      key: 'password_expiration_time',
  },
  {
      title: '获取时间',
      dataIndex: 'get_time',
      key: 'get_time'
  },
  {
      title: '更新时间',
      dataIndex: 'update_time',
      key: 'update_time',
  }
];