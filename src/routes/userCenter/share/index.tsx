import { useState } from 'react';
import { Card, Layout, Table, Button  } from 'antd';
import UserCenter from '../../../components/userCenter/UserCenter';
import ModalFrom from '../../../components/userFrom/Modal'
const { Header, Content } = Layout;

let madalValue={
    visible:false,
    fromType:"添加子账号"
}
export default function ShareAccount(){ 
    const addChildrenAccount=()=>{
        console.log("添加子账号")
        madalValue.fromType="添加子账号"
        madalValue.visible=true
    }
        return (
            <Layout className="personal-active">
                <UserCenter />
                <Layout className="site-layout">
                    <Header style={{ padding: 0 }} />
                    <Content style={{ margin: '16px' }}>
                        <Card style={{ textAlign: 'left' }}>
                        <Button type="primary" style={{float:'right',margin:'0 0 20px 0'}} onClick={addChildrenAccount}>添加子账号</Button>
                        <Table columns={LogTable} dataSource={data} />
                        </Card>
                        {madalValue.visible &&
                        <ModalFrom value={madalValue}>1111</ModalFrom>
}
                    </Content>
                </Layout>
            </Layout>
        );
}
const editChildrenAccount=()=>{
    madalValue.fromType="编辑子账号"
    madalValue.visible=true
}
  //表格
  const LogTable = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '邮箱',
      key: 'email',
      dataIndex: 'email',
    },
    {
        title: '是否接收告警',
        dataIndex: 'is',
        key: 'is',
      },
      {
        title: '权限',
        dataIndex: 'co',
        key: 'co',
      },
      {
        title: '更新时间',
        dataIndex: 'time1',
        key: 'time1',
      },
      {
        title: '创建时间',
        key: 'time2',
        dataIndex: 'time2',
      },
      {
        title: '操作',
        dataIndex: '',
        key: 'x',
        render: () => <div><Button type="primary" size={"small"} style={{margin:'0 10px 0 0'}} onClick={editChildrenAccount}>编辑</Button><Button type="primary" danger  size={"small"}>删除</Button></div>,
      }
  ];
  
  const data = [
    {
      key: '1',
      name: 'name',
      phone: '18545612356',
      email: '18681810490@163.com',
      is: '接收',
      co: '	同主账号权限',
      time1: '	2020-11-27 16:32:45',
      time2: '2020-11-27 16:27:15',
      operating: 'operating',
    },
    {
        key: '2',
        name: 'ceshi2',
        phone: '14545454545',
        email: 'xieshaodong@duoyinsu.com',
        is: '不接收',
        co: '只读',
        time1: '2020-12-10 14:13:10',
        time2: '2020-11-27 16:55:49',
        operating: 'operating',
      },
  ];