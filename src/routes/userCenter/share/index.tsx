import { useState } from 'react';
import axios from '../../../utils/http'
import { Card, Layout, Table, Button, Form, Radio, Tooltip, Dropdown, Menu, message } from 'antd';
import UserCenter from '../../../components/userCenter/UserCenter';
import ModalFrom from '../../../components/userFrom/Modal'
import UserName from '../../../components/userFrom/UserName'
import Password from '../../../components/userFrom/Password'
import ConfirmPassword from '../../../components/userFrom/ConfirmPassword'
import Email from '../../../components/userFrom/Email'
import Phone from '../../../components/userFrom/Phone'
import Captcha from '../../../components/userFrom/Captcha'
const { Header, Content } = Layout;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}
export default function ShareAccount() {
  const [visible, setVisible] = useState(false)
  const [fromType, setFromType] = useState("添加子账号")
  const [clickNum, setClickNum] = useState(0)
  const [ifPhone, setIfPhone] = useState(0)
  const [editId, setEditId] = useState(0)
  //const [editType, setEditType] = useState(0)
  const [form] = Form.useForm();
  const setCaptchaValue = {
    form: form,
    fromType: "",
    type: "child",
    ifPhone: ifPhone
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
      render: (row:any) => <div><Dropdown overlay={menu} placement="bottomCenter"><Button style={{ margin: '0 10px 0 0' }} onMouseOver={()=>over(row)}>编辑</Button></Dropdown><Button type="primary" danger size={"small"}>删除</Button></div>,
    }
  ];

  if (fromType === "添加子账号") {
    setCaptchaValue.fromType = "1"
  } else {
    setCaptchaValue.fromType = "2"
  }
  const over = (text:any) => {
    setEditId(text.id)
  }
  //let num = 1
  const addChildrenAccount = () => {
    setClickNum(clickNum + 1)
    setVisible(true)
    setFromType("添加子账号");
  }
  const editChildrenAccount = (menu: any) => {
    if (menu.key === '1') {
      setIfPhone(1)
    } else if (menu.key === '2') {
      setIfPhone(2)
    } else {
      setIfPhone(0)
    }
    setFromType("编辑子账号");
    setVisible(true)
    setClickNum(clickNum + 1)
    //清空表单值
    form.setFieldsValue({
      authority: "",
      alert: ""
    })
  }
  //编辑菜单
  const menu = (
    <Menu onClick={editChildrenAccount}>
      <Menu.Item key="2">
        <Button type="text" size={"small"}>手机号</Button>
      </Menu.Item>
      <Menu.Item key="1">
        <Button type="text" size={"small"}>邮箱</Button>
      </Menu.Item>
      <Menu.Item key="0">
        <Button type="text" size={"small"}>其他</Button>
      </Menu.Item>
    </Menu>
  );
  const getFromValue = (value: any) => {
    let editCode={
      sub_id:editId,
      code:value.code,
      message:'',
      send_type:''
    }
    if(ifPhone===2){
      editCode.message=value.phone
      editCode.send_type='1'
    }else{
      editCode.message=value.email
      editCode.send_type='2'
    }
    console.log(editCode)
    axios.patch('/sub_user', editCode).then((res: any) => {
      if (res.data.status === "200") {
        message.success(res.data.msg);
      } else {
        message.error(res.data.msg);
      }
    })
  }
  let madalValue = {
    clickNum: clickNum,
    visible: visible,
    fromType: fromType,
    from: form,
    getFromValue: getFromValue
  }
  return (
    <Layout className="personal-active">
      <UserCenter />
      <Layout className="site-layout">
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '16px' }}>
          <Card style={{ textAlign: 'left' }}>
            <Button type="primary" style={{ float: 'right', margin: '0 0 20px 0' }} onClick={addChildrenAccount}>添加子账号</Button>
            <Table rowKey="id" columns={LogTable} dataSource={data} />
          </Card>
          <ModalFrom value={madalValue}>
            <Form
              {...formItemLayout}
              form={form}
              initialValues={{
                authority: "a",
                alert: "接受"
              }}
              name="form_in_modal"
              className="labelFrom"
            >
              {ifPhone === 0 &&
                <div>
                  <UserName status={1} />
                  <Password status={1} />
                  <ConfirmPassword status={1} />
                  {fromType==="添加子账号" &&
                  <div>
                  <Email />
                  <Captcha value={setCaptchaValue} />
                  <Phone status={1} />
                  <Captcha value={setCaptchaValue} />
                  </div>
              }
                  <Form.Item label="权限" name="authority">
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button value="a">只读</Radio.Button>
                      <Tooltip placement="top" title="可读、可执行操作、不可下发任务">
                        <Radio.Button value="b">部分权限</Radio.Button>
                      </Tooltip>
                      <Radio.Button value="d">同主账号权限</Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="短信或邮箱告警" name="alert">
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button value="接受">接受</Radio.Button>
                      <Radio.Button value="不接受">不接受</Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </div>
              }
              {ifPhone === 1 &&
                <div>
                  <Email />
                  <Captcha value={setCaptchaValue} />
                </div>}
              {ifPhone === 2 &&
                <div>
                  <Phone status={1} />
                  <Captcha value={setCaptchaValue} />
                </div>
              }
            </Form>
          </ModalFrom>
        </Content>
      </Layout>
    </Layout>
  );
}

const data = [
  {
    id: 1,
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
    id: 2,
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