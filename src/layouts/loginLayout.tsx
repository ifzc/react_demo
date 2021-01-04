import React from 'react'
import { Layout } from 'antd';
import { Menu } from 'antd';

const { Header, Footer, Content } = Layout;

const { SubMenu } = Menu;
export default function loginLayout() {
    return (
        <>
            <Layout>
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
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
}