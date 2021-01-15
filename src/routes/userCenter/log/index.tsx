import React from 'react';
import { Card } from 'antd';
import { Layout } from 'antd';
import UserCenter from '../../../components/userCenter/UserCenter';
import { Form, Input, Button, Table} from 'antd';
import Time from '../../../components/table/Time'
import PaginationNum from '../../../components/table/pagination'
const { Header, Content } = Layout;

function SetUp(props:any){
const changeSize=(value:any)=>{
  console.log("changeSize")
console.log(value)
}
        return (
            <Layout className="personal-active">
                <UserCenter />
                <Layout className="site-layout">
                    <Header style={{ padding: 0 }} />
                    <Content style={{ margin: '16px' }}>
                        <Card style={{ textAlign: 'left' }}>
                        <FormLayoutDemo />
                        <Table columns={LogTable} pagination={false} dataSource={data} />
                        <PaginationNum change={changeSize}/>
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        );
}
//
const FormLayoutDemo = () => {
    const [form] = Form.useForm();
  
    return (
      <>
        <Form
          layout='inline'
          form={form}
          style={{margin:'0 0 20px 0'}}
        >
          <Form.Item label="日志搜索：">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item>
            <Time />
          </Form.Item>
          <Form.Item>
            <Button type="primary" style={{margin:'0 10px 0 0'}}>查询</Button>
            <Button>重置</Button>
          </Form.Item>
        </Form>
      </>
    );
  };
  //表格
  const LogTable = [
    {
      title: '操作',
      dataIndex: 'operating',
      key: '1',
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      key: '2',
    },
    {
      title: '获取时间',
      key: '3',
      dataIndex: 'getTime',
      /* render: (text:any, record:any) => (
        <Space size="middle">
          <a href="##">Invite {record.name}</a>
          <a href="##">Delete</a>
        </Space>
      ), */
    },
  ];
  
  const data = [
    {
      key: '1',
      operating: 'operating',
      ip: "duoyinsu",
      getTime: '2020-2-20',
    },
    {
      key: '2',
      operating: 'operating',
      ip: "duoyinsu",
      getTime: '2020-2-20',
    },
    {
      key: '3',
      operating: 'operating',
      ip: "duoyinsu",
      getTime: '2020-2-20',
    },
  ];
export default SetUp