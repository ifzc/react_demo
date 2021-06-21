import React from 'react';
import axios from '../../utils/http'
import { Form, Input, Row, Col, Button } from 'antd';

function Captcha(props: any) {

  const sendCode = () => {
    if (props.value.type === "email") {//邮箱验证码
      let paramEmail = {
        email: props.value.form.getFieldValue('email'),
        type: props.value.fromType
      }
      axios.post('/auth/email', paramEmail).then((res: any) => {
        if (res.data.status === "200") {

        }
      })
    }else {//手机号验证码
      let paramPhone = {
        phone: props.value.form.getFieldValue('phone'),
        type: props.value.fromType
      }
      axios.post('/auth/send', paramPhone).then((res: any) => {
        if (res.data.status === "200") {
        }
      })
    }
  }
  return (
    <Form.Item style={props.value.style ? {'width':"268px",marginLeft:"80px"} : {}}>
      <Row gutter={10}>
        <Col span={props.value.col ? 16 : 17}>
          <Form.Item
            name="code"
            noStyle
            rules={[{ required: true, message: '请输入您获得的验证码!' }]}
          >
            <Input placeholder="验证码" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Button type="primary" onClick={sendCode}>发送验证码</Button>
        </Col>
      </Row>
    </Form.Item>
  );
};
export default Captcha