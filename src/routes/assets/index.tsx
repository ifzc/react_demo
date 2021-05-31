import { useState } from 'react';
import { Tooltip, Button, Form } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import TableOptional from '../../components/table/TableOptional'
import TagGroup from '../../components/table/Tag'
import ModalFrom from '../../components/userFrom/Modal'
const data = [
    {
        id: 1,
        hostname: 'Edward King 1',
        age: 32,
        address: `London, Park Lane no.1`,
        location: "上海市",
        status: '离线',
        system: "公网",
        system1: "windows",
        update_time: "2020-01-09 16:15:35",
        version: "1.22.5",
        hosttype: "宿主机"
    },
    {
        id: 2,
        hostname: 'Edward King 1',
        age: 32,
        address: `London, Park Lane no.1`,
        location: "上海市",
        status: '在线',
        system: "内网",
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
                <EditOutlined onClick={() => addAssetsTag('编辑标签', false)} />
            ]
        },
        {
            title: '负责人',
            dataIndex: 'address',
            key: 'address',
            render: () => [
                <EditOutlined onClick={() => addAssetsTag('编辑负责人', false)} />
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
                <Button type="primary" size="small">查看</Button>
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

    const [visible, setVisible] = useState(false)
    const [fromType, setFromType] = useState("编辑标签")
    const [clickNum, setClickNum] = useState(0)
    const [buttonD, setButtonD] = useState(true)
    const [already, setAlready] = useState([''])
    const [add, setAdd] = useState([''])
    const [history, setHistory] = useState([''])
    const [editId,setId] = useState([0])
    const [form] = Form.useForm();

    const getFromValue = (value: any) => {
        console.log('model表单值', value)
        console.log(already,add)
    }
    //编辑标签 负责人
    const addAssetsTag = (title: string, showTag: boolean) => {
        if (!showTag) {
            console.log(1)
            setAlready([])
            setAdd([])
            setHistory(['Tage1', 'Tage2'])
        } else {
            console.log(2)
            setAlready(['Tage3'])
            setAdd([])
            setHistory(['Tage1', 'Tage2'])
        }
        setClickNum(clickNum + 1)
        setVisible(true)
        setFromType(title);
    }

    //moder
    let madalValue = {
        clickNum: clickNum,
        visible: visible,
        fromType: fromType,
        from: form,
        getFromValue: getFromValue
    }
    //列表相关
    const columnsStateMap = {
        version: {
            show: false,
            order: 2,
        }, hosttype: {
            show: false,
            order: 2,
        }
    }
    const changeSize = (size: number) => {
        console.log("size", size)
    }
    const selectedChange = (id: Array<number>, row: any) => {
        if (id.length !== 0) {
            setButtonD(false)
            setId(id)
        } else {
            setButtonD(true)
        }
    }

    const tagChange = (tag:Array<string>,type:number) =>{
        console.log("asset")
        console.log(tag,type)
        if(type === 0){
            setAlready(tag)
        }else if(type === 1){
        setAdd(tag)
        }else{
            setAdd(tag)
        }
    }
    let assetsTable = {
        count: 11,
        columns: columns,
        data: data,
        columnsStateMap: columnsStateMap,
        changeSize: changeSize,
        selectedChange: selectedChange,
        ifRowSelection:true
    }
//type 0:可删除不可添加，1：可删除可添加，2：不可删除不可添加
    let alreadyTag={tags:already,type:0,tagChange:tagChange}
    let addTag={tags:add,type:1,tagChange:tagChange}
    let historyTag={tags:history,type:2,tagChange:tagChange}
    return (
        <div>
            <TableOptional props={assetsTable} />
            <div className="table-button">
                <Button disabled={buttonD} onClick={() => addAssetsTag('编辑标签', true)}>编辑标签</Button>
                <Button disabled={buttonD} onClick={() => addAssetsTag('编辑负责人', true)}>编辑负责人</Button>
                <Button disabled={buttonD}>导出报告</Button>
                <Button disabled={buttonD}>一键安全检查</Button>
            </div>
            <ModalFrom value={madalValue}>
                <Form
                    form={form}
                    name="form_in_modal"
                    className="labelFrom"
                >
                    <Form.Item label="● 当前资源已有标签（若选择多个资源则显示其共有标签，删除只影响共有标签）" name="labelA"><TagGroup tags={alreadyTag} /></Form.Item>
                    <Form.Item label="● 新增标签" name="label"><TagGroup tags={addTag} /></Form.Item>
                    <Form.Item label="● 历史标签" name="labelH"><TagGroup tags={historyTag} /></Form.Item>
                </Form>
            </ModalFrom>
        </div>
    )
}