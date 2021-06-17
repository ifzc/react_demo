import { useState } from 'react';
import { Card, Radio } from 'antd';
import SearchForm from '../../components/table/search';
import TableBasic from '../../components/table/TableBasic'

let searchListForm = ''
export default function AssetLog() {
    //查询接口
    const searchCondition = (val: any) => {
        searchListForm = val
    }
    //重置
    const searchReset = () => {
        searchListForm = ""
    }
    //换页
    const changeSize = (value: any) => {
        console.log(value)
    }
    const [userInfo, setUserInfo] = useState({ inputList: [{ placeholder: "用户名/shell", label: "用户搜索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
    let basicTransferInfo = {
        columns: logInfoColumns,
        data: logInfoData,
        changeSize: changeSize,
        isShow: false,
        //ifExpand: false,//是否可展开
        //name: basicInfo.name,//展开数据名
        //index: basicInfo.index//展开数据所在列
    }
    const onChangeRadio = (e: any) => {
        console.log(e.target.value)
    }
    return (
        <Card title="日志信息">
            <SearchForm data={userInfo} />
            <div style={{ marginTop: "20px" }}>
                <span>操作系统：</span>
                <Radio.Group defaultValue={0} buttonStyle="solid" onChange={onChangeRadio}>
                    <Radio.Button value={0}>linux</Radio.Button>
                    <Radio.Button value={1}>windows</Radio.Button>
                </Radio.Group>
            </div>
            <TableBasic props={basicTransferInfo} />
        </Card>
    )
}

const logInfoData: any = [
    {
        id: 1,
        level: 'Guest',
        detail: '55508',
        username: `udp`,
        address: "360rp.exe",
        get_time: "2020-01-09 16:15:35",
    },
    {
        id: 2,
        level: '事件等级',
        detail: '事件详情(事件ID)',
        username: '目标用户名',
        address: "IP地址",
        get_time: "获取时间",
    }
];

const logInfoColumns: any = [
    {
        title: '事件等级',
        dataIndex: 'level',
        key: 'level'
    },
    {
        title: '事件详情(事件ID)',
        dataIndex: 'detail',
        key: 'detail'
    },
    {
        title: '目标用户名',
        dataIndex: 'username',
        key: 'username',
    }, {
        title: 'IP地址',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: '获取时间',
        dataIndex: 'get_time',
        key: 'get_time',
        colSpan: 1
    }
]