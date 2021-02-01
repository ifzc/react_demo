import { Modal } from 'antd';
import { useState, useEffect } from 'react';
export default function ModalFrom(params: any) {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(params.value.visible)
    }, [params])

    const onCancel = () => {
        params.value.from.resetFields();
        setVisible(false)
    }
    const onCreate = (value: any) => {
        params.value.getFromValue(value)
        params.value.from.resetFields();
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
                params.value.from
                    .validateFields()
                    .then((values:any) => {
                        onCreate(values);
                    })
                    .catch((info:any) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
                {params.children}
        </Modal>
    );
};