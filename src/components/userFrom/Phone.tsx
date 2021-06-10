import React from 'react';
import { Form, Input } from 'antd';

function Phone(props: any) {
    return (
        <div>
        { props.status === 1 ?
            <Form.Item
                name="phone"
                label="手机号"
                rules={[
                    {
                         validator(rule, value) {
                           //正则验证
                           let reg = /^1[3-9]\d{9}$/
                           if(value!=="" && value!==undefined){
                            if (value.match(reg)) {
                              return Promise.resolve();
                            }
                            return Promise.reject('请输入正确的手机号');
                           }
                           return Promise.reject('请输入手机号')
                         },
                    },
                  ]}
            >
                <Input style={{ width: '100%' }} />
            </Form.Item>
            :
            <Form.Item
                name="phone"
                rules={[{ required: true, message: '请输入手机号!' }]}
            >
                <Input placeholder="手机号" />
            </Form.Item>
    }
    </div>
    )
};
export default Phone