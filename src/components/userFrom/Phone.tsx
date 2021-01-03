import React from 'react';
import { Form, Input } from 'antd';

interface Props {
    status: number
}

class Phone extends React.Component<Props> {
    render() {
        if (this.props.status === 1) {
            return (
                <Form.Item
                    name="phone"
                    label="手机号"
                    rules={[{ required: true, message: '请输入正确的手机号!' }]}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>
            );
        } else {
            return (
                <Form.Item
                    name="phone"
                    rules={[{ required: true, message: '请输入正确的手机号!' }]}
                >
                    <Input placeholder="手机号" />
                </Form.Item>
            );
        }
    }
};
export default Phone