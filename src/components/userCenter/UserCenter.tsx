import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu} from 'antd';
import '../../routes/userCenter/userCenter.scss'
const { Sider } = Layout;

class UserCenter extends React.Component {

  render() {
    return (
        <Sider>
        <div className="personal-center">个人中心</div>
        <Menu mode="inline">
              <Menu.Item key="/user/info">
                <Link to="/user/info">基本资料</Link>
              </Menu.Item>
              <Menu.Item key="/user/settings">
                <Link to="/user/settings">安全设置</Link>
              </Menu.Item>
              <Menu.Item key="/user/log">
                <Link to="/user/log">操作日志</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/user/share">共享账号</Link>
              </Menu.Item>
            </Menu>
        </Sider>
    );
  }
}
export default UserCenter