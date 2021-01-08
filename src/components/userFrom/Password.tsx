import React from 'react';
import { Form, Input, Tooltip, } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface Props {
  status: number
}

class Password extends React.Component<Props> {
  render() {
    if (this.props.status === 1) {
      return (
        <Form.Item
          name="password"
          label={
            <span>
              密码&nbsp;
          <Tooltip title="8-20个字符，数字，字母，特殊符号至少包含两种">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: '请输入密码!',
              // }, {
              //   validator(rule, value) {
              //     //正则验证：let reg;
              //     console.log(value)
              //     if (!value) {
              //       return Promise.resolve();
              //     }
              //     return Promise.reject('两次输入的密码不一致！');
              //   },
            },
          ]}
          hasFeedback
        >
          <Input
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>
      );
    } else {
      return(
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      )
    }
  }
};
export default Password