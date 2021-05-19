import React,{ useState,useEffect } from 'react'
import axios from '../../../utils/http'
import { Card, Layout } from 'antd';
import UserCenter from '../../../components/userCenter/UserCenter';
const { Header, Content } = Layout;

const UserInfo=()=> {
    const [info,setInfo]=useState({
        username:"",
        phone:"",
        email:"",
        token:"",
        status:"",
        expired_time:"",
        license_num:"",
        num:""
    })
    useEffect(() => {
        axios.get('/user').then((res: any) => {
            if (res.data.status === "200") {
                setInfo(res.data.msg)
            }
        })
      },[]);
        return (
            <Layout className="personal-active">
                <UserCenter />
                <Layout className="site-layout">
                    <Header style={{ padding: 0 }} />
                    <Content style={{ margin: '16px' }}>
                        <Card style={{textAlign: 'left'}}>
                            <p>账 号：<span>{info.username}</span></p>
                            <p>手 机：<span>{info.phone}</span></p>
                            <p>邮 箱：<span>{info.email}</span></p>
                            <p>token ：<span>{info.token}</span></p>
                            <p>授权类型：{info.status ==='0' ? <span>正式版</span> : <span>试用版</span>}</p>
                            <p>授权台数：<span>{info.license_num}</span></p>
                            <p>剩余台数：<span>{info.num}</span></p>
                            <p>过期时间：<span>{info.expired_time}</span></p>
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        )
}

export default UserInfo