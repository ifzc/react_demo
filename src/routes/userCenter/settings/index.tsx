import React, { useState } from 'react';
import axios from '../../../utils/http'
import { Layout, Card, List, Modal, Button, Form, Input, message } from 'antd';

import UserCenter from '../../../components/userCenter/UserCenter';
import { MailOutlined, MobileOutlined, LockOutlined } from '@ant-design/icons';
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
        console.log(props.titleType);
        console.log("console.log(props.titleType);");
        if(props.titleType==="登录密码"){
        axios.post('/user', values).then((res: any) => {
            if (res.status === 200) {
                if (res.data.status === "200") {
                    message.success(res.data.msg);
                }
            }
        })
    }else{
        axios.put('/user', values).then((res: any) => {
            if (res.status === 200) {
                if (res.data.status === "200") {
                    message.success(res.data.msg);
                }
            }
        })
    }
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
    const setCaptchaValue={
        form:form,
        fromType:"1",
        type:"email"
    }
    return (
        <Modal
            visible={visible}
            title={titleType}
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
                form={form}
                layout="vertical"
                name="form_in_modal"
            >
                <Form.Item
                            name="old_password"
                            label="原密码"
                            rules={[{ required: true, message: '请输入原密码!' }]}
                        >
                            <Input placeholder="请输入原密码" />
                        </Form.Item>
                {titleType === "登录密码" ?
                    <div>
                        <Password status={1} />
                        <ConfirmPassword status={1} />
                    </div>
                    : <div>
                        <Email />
                        <Captcha value={setCaptchaValue}/>
                    </div>
                }
            </Form>
        </Modal>
    );
};
export default SecuritySettings