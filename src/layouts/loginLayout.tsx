import React, { useState } from 'react'
import './LoginLayout.scss'
import { Layout, Menu, Row, Col, Divider, Tabs, Card, Form, Button, Modal } from 'antd';
import UserName from '../components/userFrom/UserName'
import Password from '../components/userFrom/Password'
import ConfirmPassword from '../components/userFrom/ConfirmPassword'
import Phone from '../components/userFrom/Phone'
import Captcha from '../components/userFrom/Captcha'
const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;
const { SubMenu } = Menu;
interface Values {
    /* title: string;
    description: string;
    modifier: string; */
}

interface CollectionCreateFormProps {
    fromType: string;
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}

export default function LoginLayout(Props: any) {
    const Login = () => {
        // 接受父组件传递过来的函数，调用并传值给父组件
        Props.login(true)
    }
    return (
        <>
            <Layout className="login-layout">
                <Header>
                    <Row>
                        <Col span={8} offset={4}><img src="/images/login/logo_blue.png" alt="" /></Col>
                        <Col span={8}>
                            <Menu mode="horizontal">
                                <Menu.Item>
                                    <a href="https://www.duoyinsu.com" target="_blank" rel="noopener noreferrer">安识科技<div></div></a>
                                </Menu.Item>
                                <SubMenu title="Navigation Three - Submenu">
                                    <Menu.Item><a href="https://v.duoyinsu.com" target="_blank" rel="noopener noreferrer">伏特分布式漏洞扫描</a></Menu.Item>
                                    <Menu.Item><a href="https://insight.duoyinsu.com" target="_blank" rel="noopener noreferrer">洞悉威胁情报监控</a></Menu.Item>
                                    <Menu.Item>
                                        <a href="https://athena.secpulse.com/web/index.php?r=user%2Flogin" target="_blank" rel="noopener noreferrer">雅典娜漏洞管理平台</a>
                                    </Menu.Item>
                                </SubMenu>
                                <Menu.Item>
                                    <a href="https://www.duoyinsu.com/service.html" target="_blank" rel="noopener noreferrer">安全服务</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href="https://www.secpulse.com/" target="_blank" rel="noopener noreferrer">安全社区</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href="https://www.duoyinsu.com/contactus.html" target="_blank" rel="noopener noreferrer">联系我们</a>
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Header>
                <Divider />
                <Content>
                    <Row justify="space-between" align="middle" style={{ 'width': '60%', 'margin': '0 auto' }}>
                        <Col className="gutter-row gutter-row-img" span={12}>
                            <img src="/images/login/login.png" alt="" style={{ 'width': '100%' }} />
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div>{/* <Button type="primary" onClick={Login}>Primary Button</Button> */}<LoginFromCard /></div>
                        </Col>
                    </Row>
                    <div className="login-layout-text"><p>与云端防护中心规则联动</p>
                        <p>实时感知防御入侵事件</p></div>
                </Content>
                <Divider />
                <Footer><p>Copyright©2016 - <span className="current-year">2021</span>上海安识网络科技有限公司All Rights Reserved.</p>
                    <p>沪ICP备16016474号<img src="/images/login/beian.png" alt="" />沪公网安备 31010402005087号</p></Footer>
            </Layout>
        </>
    );
}

//tab
function LoginFromCard() {
    const callback = (key: any) => {
        console.log(key);
    }
    return (
        <Card style={{ width: 350, 'margin': '0 auto' }}>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="登录" key="1"><LoginFrom fromKey={1} /></TabPane>
                <TabPane tab="注册" key="2"><LoginFrom fromKey={2} /></TabPane>
            </Tabs>
        </Card>
    )
}
//from
function LoginFrom(key: any) {
    const onFinish = (values: any) => {
        console.log('主',values);
    };
    const [visible, setVisible] = useState(false);
    const [fromType, setFromType] = useState("免密登录");

    const onCreate = (values: any) => {
        console.log('弹出层', values);
        setVisible(false);
    };
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <UserName status={0} />
            <Password status={0} />
            {key.fromKey === 2 ?
                <div><ConfirmPassword status={0} /><Phone status={0} /><Captcha /></div>
                : <div className="login-other-options">
                    <Form.Item>
                        <Button type="link" onClick={() => {
                            setVisible(true);
                            setFromType("免密登录")
                        }}>免密登录</Button>
                        <Button type="link" onClick={() => {
                            setVisible(true);
                            setFromType("重置密码")
                        }}>忘记密码</Button>
                    </Form.Item>
                </div>}
            <CollectionCreateForm
                fromType={fromType}
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
            </Button>
            </Form.Item>
        </Form>
    );
}

//弹出层表单
const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    fromType,
    visible,
    onCreate,
    onCancel,
}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title={fromType}
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{ modifier: 'public' }}
            >
                <Phone status={0} />
                <Captcha />
                {fromType === "重置密码" &&
                    <div>
                        <Password status={0} />
                        <ConfirmPassword status={0} />
                    </div>
                }
            </Form>
        </Modal>
    );
};