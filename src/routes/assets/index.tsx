import { useState } from 'react';
import { Tooltip, Button, Form } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import TableOptional from '../../components/table/TableOptional'
import TagGroup from '../../components/table/Tag'
import ModalFrom from '../../components/userFrom/Modal'
const data = [
    {
        key: 1,
        hostname: 'Edward King 1',
        age: 32,
        address: `London, Park Lane no.1`,
        location: "上海市",
        status: '在线',
        system: "公网",
        system1: "windows",
        update_time: "2020-01-09 16:15:35",
        version: "1.22.5",
        hosttype: "宿主机"
    }
];

export default function AssetsTable() {
    const columns = [
        {
            title: '服务器名称',
            dataIndex: 'hostname',
            key: 'hostname',
            render: (hostname: string) => (
                <Tooltip placement="topLeft" title={hostname}>
                    {hostname}
                </Tooltip>
            ),
        },
        {
            title: '标签',
            dataIndex: 'age',
            key: 'age',
            render: () => [
                <EditOutlined onClick={addLabel}/>
            ]
        },
        {
            title: '负责人',
            dataIndex: 'address',
            key: 'address',
            render: () => [
                <EditOutlined onClick={addPrincipal}/>
            ]
        },
        {
            title: '地域',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            filters: true,
            onFilter: true,
            width: 80,
            valueEnum: {
                离线: { text: '离线', status: 'Default' },
                在线: { text: '在线', status: 'Success' },
            },
        },
        {
            title: '网络',
            dataIndex: 'system',
            key: 'system',
            filters: true,
            onFilter: true,
            width: 80,
            valueEnum: {
                公网: { text: '公网', status: 'Error' },
                内网: { text: '内网', status: 'Success' },
            },
        },
        {
            title: '系统',
            dataIndex: 'system1',
            key: 'system1',
            filters: [
                {
                    text: 'windows',
                    value: 'windows',
                },
                {
                    text: 'linux',
                    value: 'linux',
                }
            ]
        },
        {
            title: '操作',
            width: 180,
            key: 'option',
            valueType: 'option',
            render: () => [
                <Button type="primary">详情</Button>
            ],
        },
        {
            title: '注册时间',
            dataIndex: 'update_time',
            key: 'update_time',
        },
        {
            title: 'agent版本',
            dataIndex: 'version',
            key: 'version',
        }, {
            title: '主机类型',
            dataIndex: 'hosttype',
            key: 'hosttype',
        },
    ];
    const getFromValue = (value: any) => {
        console.log(value)
    }
    const addPrincipal = () => {
        setClickNum(clickNum + 1)
        setVisible(true)
        setFromType("编辑标签");
    }
    const addLabel= () =>{
        setClickNum(clickNum + 1)
        setVisible(true)
        setFromType("编辑负责人");
    }
    const [visible, setVisible] = useState(false)
    const [fromType, setFromType] = useState("编辑标签")
    const [clickNum, setClickNum] = useState(0)
    const [form] = Form.useForm();
    //设置tag
    let tagList=['Tage1','Tage2','Tage3','Tage4','Tage5']
    let madalValue = {
        clickNum: clickNum,
        visible: visible,
        fromType: fromType,
        from: form,
        getFromValue: getFromValue
    }
    const columnsStateMap = {
        version: {
            show: false,
            order: 2,
        }, hosttype: {
            show: false,
            order: 2,
        }
    }
    const changeSize = (size: any) => {
        console.log("size", size)
    }
    const selectedChange = (key: Array<number>, row: any) => {
        console.log('key', key)
        console.log('row', row)
    }
    let p = {
        columns: columns,
        data: data,
        columnsStateMap: columnsStateMap,
        changeSize: changeSize,
        selectedChange: selectedChange
    }
    return (
        <div>
        <TableOptional props={p} />
        <ModalFrom value={madalValue}>
                <Form
                    form={form}
                    name="form_in_modal"
                    className="labelFrom"
                >
                    <Form.Item label="标签" name="label"><TagGroup tags={tagList}/></Form.Item>
                    <Form.Item label="历史标签" name="labelH"><TagGroup tags={tagList}/></Form.Item>
                    </Form>
            </ModalFrom>
        </div>
    )
}