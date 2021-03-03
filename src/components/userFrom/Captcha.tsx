import React from 'react';
import axios from '../../utils/http'
import { Form, Input, Row, Col, Button, message } from 'antd';

const buttonItemLayout =
  {
      wrapperCol: { span: 15, offset: 6 },
    };

function Captcha(props:any) {
  
  const sendCode=()=>{
    if(props.value.type==="email"){
      let paramEmail={
        phone:props.value.form.getFieldValue('email'),
        type:props.value.fromType
      }
      axios.put('/send',paramEmail).then((res: any) => {
        if (res.data.status === "200") {
          message.success(res.data.msg);
        }else{
          message.error(res.data.msg);
        }
      })
    }else{
    let param={
      phone:props.value.form.getFieldValue('phone'),
      type:props.value.fromType
    }
    axios.post('/send',param).then((res: any) => {
      if (res.data.status === "200") {
        message.success(res.data.msg);
      }else{
        message.error(res.data.msg);
      }
    })
  }
}
  return (
    <Form.Item {...buttonItemLayout}>
    <Row gutter={8}>
      <Col span={16}>
        <Form.Item
          name="code"
          noStyle
          rules={[{ required: true, message: '请输入您获得的验证码!' }]}
        >
          <Input placeholder="验证码" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Button type="primary" onClick={sendCode}>发送验证码</Button>
      </Col>
    </Row>
  </Form.Item>
  );
};
export default Captcha