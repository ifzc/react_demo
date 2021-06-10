import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from '../utils/http'
import store from '../store';
import './LoginLayout.scss'
import { Layout, Menu, Row, Col, Divider, Tabs, Card, Form, Button, Modal, Spin } from 'antd';
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

export default function LoginLayout() {
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
                            <div><LoginFromCard /></div>
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
    const [tabLogin, setTabLogin] = useState("登录");
    const [tabRegistered, setTabRegistered] = useState("注册");
    const [activeKey, setActiveKey] = useState("1");
    const callback = (key: any) => {
        setActiveKey(key)
    }
    const changeActive = (key: any) => {
        if(key !== "3"){
        setActiveKey(key)
        setTabRegistered("注册新账号")
        setTabLogin("绑定已有账号")
        }else{
            setActiveKey("1")
        }
    }
    const loginTab = { fromKey: 1, changeActive: changeActive, tabLogin: tabLogin }
    const registeredTab = { fromKey: 2, changeActive: changeActive, tabRegistered: tabRegistered }
    return (
        <Card style={{ width: 350, 'margin': '0 auto' }}>
            <Tabs activeKey={activeKey} onChange={callback}>
                <TabPane tab={tabLogin} key="1"><LoginFrom tab={loginTab} /></TabPane>
                <TabPane tab={tabRegistered} key="2"><LoginFrom tab={registeredTab} /></TabPane>
            </Tabs>
        </Card>
    )
}
//from
let dysUid = "";
function LoginFrom(tab: any) {
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const [fromType, setFromType] = useState("免密登录");
    const [manner, setManner] = useState(true);
    const [qrImg, setQrImg] = useState("");
    const [loading,setLoading] = useState(true);

    const storeInfo = (res:any) =>{
        store.dispatch({type: 'token',value: res.data.token})
                store.dispatch({type: 'role',value: res.data.role})
                store.dispatch({type: 'open',value: res.data.user_status})
                store.dispatch({type: 'children',value: res.data.sub_user})
                if(res.data.user_status === "0"){//未开通apollo
                    history.push("/agent");
                }else{
                    history.push("/dashboard");
                }
    }
    //未注册平台账号扫码登录 注册过平台账号第一次扫码登录

    let eventId = "";
    const nameLogin = () => {
        setManner(false)
        //定时请求接口=> 拿到二维码图片路径=> 更改img-url
        axios.get('/code').then((res: any) => {
            if (res.data.status === "200") {
                setQrImg(res.data.code_info.qrcode_url);
                eventId = res.data.code_info.event_id;
                qrLogob()
                setLoading(false)
                let test:any = document.querySelector(".qr-code-status-success")
                if(test !==null && test !=="" && test !==undefined){
                    test.innerHTML="二维码加载成功, 请扫码进行确认!"
                }
                
            }
        })
    }
    const qrLogob = () => {
        let event_id = { event_id: eventId }
        //扫码登录
        axios.post('/code', event_id).then((res: any) => {
            console.log(res.data.msg.status)
            if (res.data.status === "200") {
                storeInfo(res)
            } else if (res.data.status === "201") {//未注册平台账号扫码登录 
                setManner(true)
                statusAccount = "1";
                tab.tab.changeActive(statusAccount)
                dysUid = res.data.dys_uid
            }
            //注册过平台账号第一次扫码登录
            else if (res.data.status === "202") {
                statusAccount = "2";
                tab.tab.changeActive(statusAccount)
                dysUid = res.data.dys_uid
                console.log("202")
            }else if(res.data.msg.status !== "604" && !manner){
                console.log("jin")
                setTimeout((function () { qrLogob() }), 2000);
            }
        })
    }
    let statusAccount;
    const onFinish = (values: any) => {
        //登陆成功执行
        if (tab.tab.fromKey === 1) {
            if (tab.tab.tabLogin === "登录") {
                axios.post('/login', values).then((res: any) => {
                    if (res.status === 200) {
                        if (res.data.status === "200") {
                            storeInfo(res)
                        }
                    }
                })
            } else {
                //绑定多因素
                values.dys_uid = dysUid
                axios.put('/bind', values).then((res: any) => {
                    if (res.status === 200) {
                        if (res.data.status === "200") {
                            storeInfo(res)
                        }
                    }
                })
            }
        } else {
            if (tab.tab.tabRegistered === "注册") {
                axios.post('/register', values).then((res: any) => {
                    if (res.data.status === "200") {
                        tab.tab.changeActive("3");
                        setManner(false);
                    }
                })
            } else {
                //注册并绑定多因素
                values.dys_uid = dysUid
                console.log(dysUid)
                axios.post('/bind', values).then((res: any) => {
                    if (res.data.status === "200") {
                        storeInfo(res)
                    }
                })
            }
        }
        form.resetFields();
    };
    /* const axiosPost=(url:any,values:any)=>{
        axios.post(url, values).then((res: any) => {
            if(res.status === 200){
            if (res.data.status === "200") {
                storeInfo(res)
            }
            }
        })
    } */
    const onCreate = (values: any) => {
        if (fromType === "免密登录") {
            axios.post('/free_login', values).then((res: any) => {
                console.log(res);
                if (res.data.status === "200") {
                    storeInfo(res)
                }

            })
        } else {
            axios.post('/forget', values).then((res: any) => {
                console.log(res);
                if (res.data.status === "200") {
                tab.tab.changeActive("3")
                }

            })
        }
        setVisible(false);
    };

    //调用父组件传过来的事件 changeActive
    let mannerImg;
    if (tab.tab.fromKey === 1 && tab.tab.tabLogin !== "绑定已有账号") {
        if (manner) {
            mannerImg = <div className="manner-box">
                <img src="/images/login/qrlogin.png" alt="" style={{ 'width': '30px' }} onClick={nameLogin} />
                <span className="manner-box-span">使用扫码登录</span>
            </div>
        } else {
            mannerImg = <div>
                <img src="/images/login/namelogin.png" alt="" style={{ 'width': '30px' }} onClick={() => { setManner(true) }} />
                <span className="manner-box-span">使用密码登录</span>
                <div className="qr-code"><Spin spinning={loading}><p className="qr-code-status-success"></p><img src={qrImg} alt="" /></Spin><p className="qr-code-description">打开多因素令牌APP 或 微信小程序，进入“扫码登录”</p></div>
            </div>
        }
    }
    const [form] = Form.useForm();
    const setCaptchaValue = {
        form: form,
        fromType: "1",
        col:16
    }
    return (
        <div>
            {mannerImg}
            { manner &&
                <Form
                    name="normal_login"
                    form={form}
                    className="login-form"
                    onFinish={onFinish}
                >
                    <UserName status={0} />
                    <Password status={0} />
                    {tab.tab.fromKey === 2 ?
                        <div><ConfirmPassword status={0} /><Phone status={0} /><Captcha value={setCaptchaValue} />
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">同意条款并注册</Button>
                            </Form.Item>
                            <Form.Item>注册表示您同意<a href="https://www.duoyinsu.com/productService.html" target="_blank" rel="noopener noreferrer">《安识科技服务条款》</a></Form.Item>
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
    //form.resetFields();
    const setCaptchaValue = {
        form: form,
        fromType: ""
    }
    if (fromType === "重置密码") {
        setCaptchaValue.fromType = "2"
    } else {
        setCaptchaValue.fromType = "3"
    }
    return (
        <Modal
        className="loginModel"
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
                        onCreate(values);
                        form.resetFields();
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
                <Captcha value={setCaptchaValue} />
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