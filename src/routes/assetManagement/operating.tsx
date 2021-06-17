import { useState } from 'react';
import { Card, Tabs, Button } from 'antd';
import SearchForm from '../../components/table/search';
import TableBasic from '../../components/table/TableBasic'
import './index.scss'

const { TabPane } = Tabs;


export default function AssetOperating() {
    //查询接口
    const searchCondition = (val: any) => {
     
    }
    //重置
    const searchReset = () => {
        
    }
    //换页
    const changeSize = (value: any) => {
        console.log(value)
    }
    const [ifHistory, setIfHistory] = useState(false)
    //表格
    let basicTransferInfo = {
        columns: logInfoColumns,
        data: logInfoData,
        changeSize: changeSize,
        isShow: false
    }
    //搜索
    let userInfo = {
        inputList: [{ placeholder: "请输入搜索条件", label: "审计搜索：", name: "keyword" }, 
        { placeholder: "请输入服务器IP", label: "", name: "ip" }],
        searchCondition: searchCondition,
        searchReset: searchReset
    }
    //切换记录
    const changeRecord = (type: boolean) => {
        setIfHistory(type)
    }
    //同步历史记录
    const syncHistory = () => {

    }
    return (
        <Card title="操作审计">
            <SearchForm data={userInfo} />
            <div className="record-box">
                <div className="record">
                    <span onClick={() => changeRecord(false)} className={!ifHistory ? "active" : ""}>实时记录</span>|
          <span onClick={() => changeRecord(true)} className={ifHistory ? "active" : ""}>历史记录</span>
                </div>
                {ifHistory &&
                    <Button type="primary" onClick={syncHistory}>同步历史记录</Button>
                }
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