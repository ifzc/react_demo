import React, { useState } from 'react';
import { Layout, Card, List, Modal, Button, Form, Input } from 'antd';

import UserCenter from '../../../components/userCenter/UserCenter';
import {MailOutlined,MobileOutlined,LockOutlined} from '@ant-design/icons';
import Password from '../../../components/userFrom/Password'
import ConfirmPassword from '../../../components/userFrom/ConfirmPassword'
import Email from '../../../components/userFrom/Email'
import Captcha from '../../../components/userFrom/Captcha'
const { Header, Content } = Layout;
interface Values {
    /* title: string;
    description: string;
    modifier: string; */
}

interface CollectionCreateFormProps {
    titleType: string;
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}
const data = [
    {
        title: '登录密码',
        content: '安全性高的密码可以使帐号更安全。建议您定期更换密码，设置一个包含字母，符号或数字中至少两项且长度超过6位的密码。',
        icon: <LockOutlined />
    },
    {
        title: '手机绑定',
        content: '您已绑定了手机186****0490，您的手机为安全手机，可以找回密码，可以用于登陆系统',
        icon: <MobileOutlined />
    },
    {
        title: '邮箱绑定',
        content: '您已绑定了邮箱li***ng@duoyinsu.com，系统发送的各类系统、服务通知将发送到您的邮箱。',
        icon: <MailOutlined />
    }
];
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
export interface Props {
    titleType: string
}
export interface State {
    isModalVisible: boolean
}

class SecuritySettings extends React.Component<any, any> {
    render() {
        return (
            <Layout className="personal-active">
                <UserCenter />
                <Layout className="site-layout">
                    <Header style={{ padding: 0 }} />
                    <Content style={{ margin: '16px' }}>
                        <Card style={{ textAlign: 'left' }}>
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={item.title}
                                            avatar={item.icon}
                                            description={item.content}
                                        />
                                        <div>{item.title === '手机绑定' ? '' : <CollectionsPage titleType={item.title} />}</div>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
//控制表单弹出隐藏
function CollectionsPage(props: any) {
    const [visible, setVisible] = useState(false);
    const onCreate = (values: Values) => {
        console.log(values);
        setVisible(false);
    }
    return (
        <div>
            <Button
                type="link"
                onClick={() => {
                    setVisible(true);
                }}
            >
                修改
        </Button>
            <CollectionCreateForm
                titleType={props.titleType}
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
}
//表单
const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    titleType,
    visible,
    onCreate,
    onCancel,
}) => {
    const [form] = Form.useForm();
    if (titleType === "登录密码") {
        return (
            <Modal
                visible={visible}
                title="修改密码"
                okText="确认"
                cancelText="取消"
                onCancel={onCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then(values => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch(info => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                >
                    <Form.Item
                        name="title"
                        label="原密码"
                        rules={[{ required: true, message: '请输入原密码!' }]}
                    >
                        <Input placeholder="请输入原密码" />
                    </Form.Item>
                    <Password status={1} />
                    <ConfirmPassword status={1} />
                </Form>
            </Modal>
        );
    } else {
        return (
            <Modal
                visible={visible}
                title="修改邮箱"
                okText="确认"
                cancelText="取消"
                onCancel={onCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then(values => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch(info => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                >
                    <Password status={1} />
                    <Email />
                    <Captcha />
                </Form>
            </Modal>
        );
    }
};
export default SecuritySettings