import React, { useState, useEffect }from 'react'
import store from '../store';
import { Layout, Menu, Breadcrumb, Card } from 'antd'
import { useLocation, Link } from "react-router-dom"
import {
    PieChartOutlined,
    UserOutlined,
    BellOutlined
} from '@ant-design/icons'
//import { createBrowserHistory } from 'history'
import RouterSwitch from './RouterSwitch'
import './BasicLayout.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function BasicLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const [open, setOpen] = useState(store.getState().open);
    //导航高亮随着路由改变而改变
    const { pathname } = useLocation(); 
    useEffect(()=>{
            console.log(pathname)
    },[pathname])

function change(){
    setOpen(store.getState().open)
}

store.subscribe(change);
    const onCollapse = (collapsed: any) => {
        setCollapsed(collapsed);
    };
        return (
            <Layout style={{ minHeight: '100vh' }}>
                {/* <Router history={createBrowserHistory()} > */}
                    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ position: 'fixed',height: '100vh',overflow: 'auto',zIndex:2  }}>
                        <div className="logo" id="logo" />
                        {open !== "0" ?
                        <Menu theme="dark" defaultSelectedKeys={['/dashboard']} selectedKeys={[pathname]} mode="inline">
                            <Menu.Item key="/dashboard" icon={<PieChartOutlined />}>
                                <Link to="/dashboard">仪表盘</Link>
                            </Menu.Item>
                            <Menu.Item key="/assets" icon={<PieChartOutlined />}>
                                <Link to="/assets">资产列表</Link>
                            </Menu.Item>
                            <SubMenu key="/asset/fingerprint" icon={<UserOutlined />} title="资产管理">
                                <Menu.Item key="/asset/fingerprint">
                                    <Link to="/asset/fingerprint">资产指纹</Link></Menu.Item>
                                <Menu.Item key="/asset/log">
                                    <Link to="/asset/log">日志信息</Link></Menu.Item>
                                    <Menu.Item key="/asset/operating">
                                    <Link to="/asset/operating">操作审计</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="/loop" icon={<UserOutlined />} title="安全检查">
                                <Menu.Item key="/loop">
                                    <Link to="/loop">漏洞管理</Link></Menu.Item>
                                <Menu.Item key="/baseline">
                                    <Link to="/baseline">基线检查</Link></Menu.Item>
                                    <Menu.Item key="/weak">
                                    <Link to="/weak">弱密码检查</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="/agent_install" icon={<UserOutlined />} title="系统设置">
                                <Menu.Item key="/agent_install">
                                    <Link to="/agent_install">安装策略</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                        :
                        <Menu theme="dark" defaultSelectedKeys={['/agent']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                <Link to="/agent">仪表盘</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<PieChartOutlined />}>
                                <Link to="/agent">资产列表</Link>
                            </Menu.Item>
                            <SubMenu key="/agent" icon={<UserOutlined />} title="资产管理">
                                <Menu.Item key="/agent">
                                    <Link to="/agent">资产指纹</Link></Menu.Item>
                                <Menu.Item key="/agent">
                                    <Link to="/agent">日志信息</Link></Menu.Item>
                                    <Menu.Item key="/agent">
                                    <Link to="/agent">操作审计</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="/agent" icon={<UserOutlined />} title="安全检查">
                                <Menu.Item key="/agent">
                                    <Link to="/agent">漏洞管理</Link></Menu.Item>
                                <Menu.Item key="/agent">
                                    <Link to="/agent">基线检查</Link></Menu.Item>
                                    <Menu.Item key="/agent">
                                    <Link to="/agent">弱密码检查</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="/agent" icon={<UserOutlined />} title="系统设置">
                                <Menu.Item key="/agent">
                                    <Link to="/agent">安装策略</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
}
                    </Sider>
                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        <Header style={{ position: "fixed",width:"100%",zIndex:1,right:0}} className="site-layout-background">
                            <div >
                        {open !== "0" ?
                            <Menu mode="horizontal" style={{ float: 'right' }}>
                                <Menu.Item key="/Page7">
                                    <Link to="/Page7">{<BellOutlined />}</Link>
                                </Menu.Item>
                                <Menu.Item key="/Page8">
                                    <Link to="/Page8">数据大屏</Link>
                                </Menu.Item>
                                <Menu.Item key="/help">
                                    <Link to="/help">帮助文档</Link>
                                </Menu.Item>
                                <SubMenu key="sub1" title="User">
                                    <Menu.Item key="/Personal/BasicData"><Link to="/user/info">个人资料</Link></Menu.Item>
                                    <Menu.Item onClick={()=>{ store.dispatch({type: 'token',value: null});}}><Link to="/login">退出</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                            :
                            <Menu mode="horizontal" style={{ float: 'right' }}>
                                <Menu.Item key="01">
                                    <Link to="/agent">{<BellOutlined />}</Link>
                                </Menu.Item>
                                <Menu.Item key="02">
                                    <Link to="/agent">数据大屏</Link>
                                </Menu.Item>
                                <Menu.Item key="03">
                                    <Link to="/agent">帮助文档</Link>
                                </Menu.Item>
                                <SubMenu key="04" title="User">
                                    <Menu.Item key="04-1"><Link to="/agent">个人资料</Link></Menu.Item>
                                    <Menu.Item onClick={()=>{ store.dispatch({type: 'token',value: null});}}><Link to="/login">退出</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
}</div>
                        </Header>
                        <Content style={{ margin: '64px 16px 0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                            </Breadcrumb>
                                <RouterSwitch />
                        </Content>
                        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                    </Layout>
                {/* </Router> */}
            </Layout>
        );
    }

export default BasicLayout