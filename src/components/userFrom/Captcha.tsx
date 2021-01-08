import React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';

class Captcha extends React.Component {
render(){
  return (
    <Form.Item>
    <Row gutter={8}>
      <Col span={16}>
        <Form.Item
          name="captcha"
          noStyle
          rules={[{ required: true, message: '请输入您获得的验证码!' }]}
        >
          <Input placeholder="验证码" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Button type="primary">发送验证码</Button>
      </Col>
    </Row>
  </Form.Item>
  );
}
};
export default Captcha