import React from 'react';
import { Form, Input } from 'antd';

function Phone(props: any) {
    return (
        <div>
        { props === 1 ?
            <Form.Item
                name="phone"
                label="手机号"
                rules={[{ required: true, message: '请输入正确的手机号!' }]}
            >
                <Input style={{ width: '100%' }} />
            </Form.Item>
            :
            <Form.Item
                name="phone"
                rules={[{ required: true, message: '请输入正确的手机号!' }]}
            >
                <Input placeholder="手机号" />
            </Form.Item>
    }
    </div>
    )
};
export default Phone