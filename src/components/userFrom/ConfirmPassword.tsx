import React from 'react';
import { Form, Input } from 'antd';

interface Props {
  status: number
}

class ConfirmPassword extends React.Component<Props> {
  render() {
    if (this.props.status === 1) {
      return (
        <Form.Item
          name="password2"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if(value!=="" && value!==undefined){
                  if (getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('两次输入的密码不一致！');
                }
                return Promise.reject('请输入密码')
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
      );
    } else {
      return(
      <Form.Item
        name="password2"
        rules={[
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if(value!=="" && value!==undefined){
                if (getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('两次输入的密码不一致！');
              }
              return Promise.reject('请输入密码')
            },
          }),
        ]}
      >
        <Input
          type="password"
          placeholder="确认密码"
        />
      </Form.Item>
      )
    }
  }
};
export default ConfirmPassword