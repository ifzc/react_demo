import { Form, Modal } from 'antd';
import { useState, useEffect } from 'react';
function ModalFrom(params: any) {
    console.log(params)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(params.value.visible)
    }, [params])

    const [form] = Form.useForm();
    const onCancel = () => {
        form.resetFields();
        setVisible(false)
    }
    const onCreate = (value: any) => {
        console.log(value)
        params.value.getFromValue(value)
        setVisible(false)
    }
    return (
        <Modal
            centered
            visible={visible}
            title={params.value.fromType}
            okText="确认"
            cancelText="取消"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        onCreate(values);
                        form.resetFields();
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        ><Form
            form={form}
            name="form_in_modal"
        >
                {params.children}
            </Form>
        </Modal>
    );
};
export default ModalFrom