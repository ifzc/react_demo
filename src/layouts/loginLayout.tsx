import React from 'react'
import './LoginLayout.scss'
import { Layout } from 'antd';
import { Menu } from 'antd';
import { Row, Col, Divider } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };
const { Header, Footer, Content } = Layout;

const { SubMenu } = Menu;
export default function LoginLayout() {
    return (
        <>
            <Layout className="login-layout">
                <Header>
                    <Menu mode="horizontal">
                        <Menu.Item>
                            <a href="https://www.duoyinsu.com" target="_blank" rel="noopener noreferrer">安识科技<div></div></a>
                        </Menu.Item>
                        <SubMenu title="Navigation Three - Submenu">
                            <Menu.Item><a href="https://v.duoyinsu.com" target="_blank">伏特分布式漏洞扫描</a></Menu.Item>
                            <Menu.Item><a href="https://insight.duoyinsu.com" target="_blank">洞悉威胁情报监控</a></Menu.Item>
                            <Menu.Item>
                                <a href="https://athena.secpulse.com/web/index.php?r=user%2Flogin" target="_blank">雅典娜漏洞管理平台</a>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item>
                            <a href="https://www.duoyinsu.com/service.html" target="_blank">安全服务</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="https://www.secpulse.com/" target="_blank">安全社区</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="https://www.duoyinsu.com/contactus.html" target="_blank">联系我们</a>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={12}>
                            <div style={style}><img src="../../../../public/imges/login/login.png" /></div>
                            <div><p>与云端防护中心规则联动</p>
                                <p>实时感知防御入侵事件</p></div>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div style={style}>col-6</div>
                        </Col>
                    </Row>
                </Content>
                <Footer><p>Copyright©2016 - <span className="current-year">2021</span>上海安识网络科技有限公司All Rights Reserved.</p>
                    <p>沪ICP备16016474号<img src="../../../../public/imges/login/beian.png" />沪公网安备 31010402005087号</p></Footer>
            </Layout>
        </>
    );
}