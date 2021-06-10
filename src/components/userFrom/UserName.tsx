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
              <Tooltip title="5-20个字符，数字、字母至少包含一种">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
                 validator(rule, value) {
                   //正则验证
                   let reg = /^(?![0-9]+$)[A-Za-z0-9]{5,20}$/
                   if(value!=="" && value!==undefined){
                    if (value.match(reg)) {
                      return Promise.resolve();
                    }
                    return Promise.reject('5-20个字符，数字、字母至少包含一种');
                   }
                   return Promise.reject('请输入用户名')
                 },
            },
          ]}
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