import React, { useState, useEffect }from 'react';
import { useLocation, Link } from "react-router-dom"
import store from '../../store';
import { Layout, Menu} from 'antd';
import '../../routes/userCenter/userCenter.scss'
const { Sider } = Layout;

function UserCenter(){
  const [children, setChildren] = useState(store.getState().children);
  //导航高亮随着路由改变而改变
  const { pathname } = useLocation(); 
  useEffect(()=>{
          console.log(pathname)
  },[pathname])

function change(){
  setChildren(store.getState().children)
}

store.subscribe(change);
    return (
        <Sider>
        <div className="personal-center">个人中心</div>
        <Menu mode="inline" defaultSelectedKeys={['/user/info']} selectedKeys={[pathname]}>
              <Menu.Item key="/user/info">
                <Link to="/user/info">基本资料</Link>
              </Menu.Item>
              <Menu.Item key="/user/settings">
                <Link to="/user/settings">安全设置</Link>
              </Menu.Item>
              <Menu.Item key="/user/log">
                <Link to="/user/log">操作日志</Link>
              </Menu.Item>
              {children === 0 &&
              <Menu.Item key="/user/share">
                <Link to="/user/share">共享账号</Link>
              </Menu.Item>
}
            </Menu>
        </Sider>
    );
  }
export default UserCenter