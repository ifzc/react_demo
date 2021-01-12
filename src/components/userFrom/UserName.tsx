import React from 'react';
import { Form, Input, Tooltip, } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface Props {
  status: number
}

class UserName extends React.Component<Props> {
  render() {
    if (this.props.status === 1) {
      return (
        <Form.Item
          name="name"
          label={
            <span>
              用户名&nbsp;
              <Tooltip title="8-20个字符，数字，字母，特殊符号至少包含两种">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>
      );
    } else {
      return (
        <Form.Item
          name="name"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
      );
    }
  }
};
export default UserName