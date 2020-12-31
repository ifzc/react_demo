import React from 'react';
import { Form, Input } from 'antd';

interface Props{
    status:number
  }

class ConfirmPassword extends React.Component<Props> {
render(){
    if (this.props.status==1) {
  return (
    <Form.Item
    name="confirm"
    label="确认密码"
    dependencies={['password']}
    hasFeedback
    rules={[
      {
        required: true,
        message: 'Please confirm your password!',
      },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject('两次输入的密码不一致！');
        },
      }),
    ]}
  >
    <Input.Password />
  </Form.Item>
  );
}else{
  <Form.Item
  name="password"
  rules={[
    {
      required: true,
      message: 'Please confirm your password!',
    },
    ({ getFieldValue }) => ({
      validator(rule, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject('两次输入的密码不一致！');
      },
    }),
  ]}
>
  <Input
    type="password"
    placeholder="Password"
  />
</Form.Item>
}
}
};
export default ConfirmPassword