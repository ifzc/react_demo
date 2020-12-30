import React from 'react';
import { Card } from 'antd';
import { Layout } from 'antd';
import UserCenter from '../../../components/userCenter/UserCenter';
import { Form, Input, Button, Table, Tag, Space} from 'antd';
const { Header, Content } = Layout;

class SetUp extends React.Component {

    render() {
        return (
            <Layout className="personal-active">
                <UserCenter />
                <Layout className="site-layout">
                    <Header style={{ padding: 0 }} />
                    <Content style={{ margin: '16px' }}>
                        <Card style={{ textAlign: 'left' }}>
                        <FormLayoutDemo />
                        <Table columns={LogTable} dataSource={data} />
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
//
const FormLayoutDemo = () => {
    const [form] = Form.useForm();
  
    return (
      <>
        <Form
          layout='inline'
          form={form}
        >
          <Form.Item label="Field A">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </>
    );
  };
  //表格
  const LogTable = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text:any) => <a href="##">{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags:any) => (
        <>
          {tags.map((tag:any)=> {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text:any, record:any) => (
        <Space size="middle">
          <a href="##">Invite {record.name}</a>
          <a href="##">Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
export default SetUp