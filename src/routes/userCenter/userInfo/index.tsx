import React from 'react'
import { Card } from 'antd';
import { Layout } from 'antd';
import UserCenter from '../../../components/userCenter/UserCenter';
const { Header, Content } = Layout;
class UserInfo extends React.Component<any, any> {
    render() {
        return (
            <Layout className="personal-active">
                <UserCenter />
                <Layout className="site-layout">
                    <Header style={{ padding: 0 }} />
                    <Content style={{ margin: '16px' }}>
                        <Card style={{textAlign: 'left'}}>
                            <p>账 号：<span></span></p>
                            <p>手 机：<span></span></p>
                            <p>邮 箱：<span></span></p>
                            <p>token ：<span></span></p>
                            <p>授权类型：<span></span></p>
                            <p>授权台数：<span></span></p>
                            <p>过期时间：<span></span></p>
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default UserInfo