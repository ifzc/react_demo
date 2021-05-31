import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;

export default function SearchForm(prop:any){
  const [form] = Form.useForm();

  let fromInput=''
  let htmlI = document.createElement('div')
  for (let i = 0; i < prop.data.inputList.length; i++) {
      const element = prop.data.inputList[i];
      fromInput+=<Form.Item label={element.label} name={element.name}><Input placeholder={element.placeholder} /></Form.Item>
  }
  htmlI.append(fromInput)

//提交表单且数据验证成功后回调事件
const onFinish = (values: any) => {
  prop.data.searchCondition(values)
}
const onReset = () => {
  form.resetFields();
};
  return (
      <Form
        layout='inline'
        form={form}
        onFinish={onFinish}
      >
        {
          prop.data.inputList.map((item:any, index:number) => {
            return <Form.Item key={index} label={item.label} name={item.name}><Input placeholder={item.placeholder} /></Form.Item>
          })
        }
        <Form.Item label="" name="time">
        <RangePicker
      ranges={{
        '最近一周': [moment().subtract('days', 6), moment()],
        '最近一个月': [moment().subtract('days', 30), moment()],
        '最近三个月': [moment().subtract('days', 90), moment()],
      }}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
    />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">查询</Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={onReset}>重置</Button>
        </Form.Item>
      </Form>
  );
};