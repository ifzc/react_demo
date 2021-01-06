import React, { useState } from 'react'
import './LoginLayout.scss'
import { Layout, Menu, Row, Col, Divider, Tabs, Card, Form, Button, Modal, Tooltip } from 'antd';
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
                    <Row style={{ 'width': '1200px', 'margin': '0 auto' }}>
                        <Col span={13}><img src="/images/login/logo_white.png" alt="" /></Col>
                        <Col span={11}>
                            <Menu mode="horizontal">
                                <Menu.Item>
                                    <a href="https://www.duoyinsu.com" target="_blank" rel="noopener noreferrer">安识科技<div></div></a>
                                </Menu.Item>
                                <SubMenu title="安全产品">
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
                    <Row justify="space-between" align="middle" style={{ 'width': '1100px', 'margin': '0 auto' }}>
                        <Col className="gutter-row gutter-row-img" span={12}>
                            <img src="/images/login/login.png" alt="" style={{ 'width': '100%' }} />
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div><LoginFromCard Login={Login} /></div>
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
function LoginFromCard(Login: any) {
    const callback = (key: any) => {
        console.log(key);
    }
    const loginTab = { Login: Login, fromKey: 1 }
    return (
        <Card style={{ width: 350, 'margin': '0 auto' }}>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="登录" key="1"><LoginFrom tab={loginTab} /></TabPane>
                <TabPane tab="注册" key="2"><LoginFrom tab={2} /></TabPane>
            </Tabs>
        </Card>
    )
}
//from
function LoginFrom(tab: any) {
    console.log(tab)
    const [visible, setVisible] = useState(false);
    const [fromType, setFromType] = useState("免密登录");
    const [manner, setManner] = useState(true);
    const onFinish = (values: any) => {
        //登陆成功执行
        if (tab.tab.fromKey === 1) {
            tab.tab.Login.Login()
        }
        console.log('主', values);
    };

    const onCreate = (values: any) => {
        console.log('弹出层', values);
        setVisible(false);
    };
    let mannerImg;
    if (tab.tab.fromKey === 1) {
        if (manner) {
            mannerImg = <div className="manner-box">
                <Tooltip placement="right" color={"#fff"} visible title={'使用扫码登录'}>
                    <img src="/images/login/qrlogin.png" alt="" style={{ 'width': '30px' }} onClick={() => { setManner(false) }} />
                </Tooltip>
            </div>
        } else {
            mannerImg = <div>
                <div className="manner-box">
                    <Tooltip placement="right" color={"#fff"} visible title={'使用密码登录'}>
                        <img src="/images/login/namelogin.png" alt="" style={{ 'width': '30px' }} onClick={() => { setManner(true) }} />
                    </Tooltip>
                </div>
                <div className="qr-code"><p className="qr-code-status-success">二维码加载成功, 请扫码进行确认!</p><img src="/images/login/qrcode.png" alt="" /><p className="qr-code-description">打开多因素令牌APP 或 微信小程序，进入“扫码登录”</p></div>
            </div>
        }
    }
    return (
        <div>
            {mannerImg}
            { manner &&
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <UserName status={0} />
                    <Password status={0} />
                    {tab.tab === 2 ?
                        <div><ConfirmPassword status={0} /><Phone status={0} /><Captcha />
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">同意条款并注册</Button>
                            </Form.Item>
                            <Form.Item>注册表示您同意<a href="https://www.duoyinsu.com/productService.html" target="_blank">《安识科技服务条款》</a></Form.Item>
                        </div>
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
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">登 录</Button>
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
                </Form>
            }
        </div>
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
            centered
            visible={visible}
            title={fromType}
            okText="确认"
            cancelText="取消"
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