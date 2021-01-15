import { Form, Modal } from 'antd';

function ModalFrom(params:any) {
    console.log(params)
    const [form] = Form.useForm();
    const onCancel=()=>{
        form.resetFields();
    }
    const onCreate=(value:any)=>{
        console.log(value)
    }
    return (
        <Modal
            centered
            visible={params.value.visible}
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
        >
        </Modal>
    );
};
export default ModalFrom