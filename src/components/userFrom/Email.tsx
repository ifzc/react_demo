import React from 'react';
import { Form, Input } from 'antd';

class Email extends React.Component {
render(){
  return (
    <Form.Item
        name="email"
        label="邮箱"
        rules={[
          {
            type: 'email',
            message: '输入的电子邮件无效!',
          },
          {
            required: true,
            message: '请输入您的电子邮件!',
          },
        ]}
      >
        <Input />
      </Form.Item>
  );
}
};
export default Email