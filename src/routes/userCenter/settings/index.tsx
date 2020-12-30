import React, { useState } from 'react';
import { Card } from 'antd';
import { Layout } from 'antd';
import UserCenter from '../../../components/userCenter/UserCenter';
import { List, Modal, Button, Form, Input } from 'antd';
import {
    MailOutlined,
    MobileOutlined,
    LockOutlined
} from '@ant-design/icons';
const { Header, Content } = Layout;
interface Values {
    /* title: string;
    description: string;
    modifier: string; */
}
interface CollectionCreateFormProps {
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
                                        <div>{item.title === '手机绑定' ? '' : <CollectionsPage />}</div>
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
//表单
const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel,
}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
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
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{ modifier: 'public' }}
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: 'Please input the title of collection!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="modifier" className="collection-create-form_last-form-item">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};
//控制表单弹出隐藏
const CollectionsPage = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values: Values) => {
        console.log(values);
        setVisible(false);
    };

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
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};
export default SecuritySettings