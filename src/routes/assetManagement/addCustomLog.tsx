import { useState } from 'react';
import { Card, Radio, Button } from 'antd';
import { Link } from 'react-router-dom'
import SearchForm from '../../components/table/search';
import TableBasic from '../../components/table/TableBasic'

let searchListForm = ''
export default function AddCustomLog() {
    const logInfoColumns: any = [
        {
            title: '服务器名称',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '日志路径',
            dataIndex: 'ip',
            key: 'ip'
        },
        {
            title: '操作',
            dataIndex: 'label',
            key: 'label',
            render: (text: any, record: any, index: number) => [
                <Button type="primary" danger size="small" onClick={() => deleteLog(index)}>删除</Button>
            ]
        }, {
            title: '获取时间',
            dataIndex: 'status',
            key: 'status',
        }
    ]
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
    //删除操作
    const deleteLog = (id: number) => {
        console.log("deleteLog",id)
    }
    const [show,setShow]=useState(false)
//查看示例
const viewExample = () => {
    if (show) {
        setShow(false)
    }else{
        setShow(true)
    }
}
//确认添加自定义日志
const addLog = () => {
    
}
    let basicTransferInfo = {
        columns: logInfoColumns,
        data: logInfoData,
        changeSize: changeSize,
        isShow: false,
        //ifExpand: false,//是否可展开
        //name: basicInfo.name,//展开数据名
        //index: basicInfo.index//展开数据所在列
    }
    let userInfo = {
        inputList: [{ placeholder: "请输入", label: "资产搜索：", name: "keyword" }],
        searchCondition: searchCondition,
        searchReset: searchReset
    }
    return (
        <Card title="日志信息 / 自定义日志 / 新增自定义日志">
            <div style={{width:"80%"}}>
                <p className="step"><span>Step1：输入日志路径（一次只能输入一个），</span><a style={{position:"relative"}} onClick={viewExample}>
                    查看示例
                    {show && 
                    <div className="example">
                        <p>/test</p>
                    </div>
}
                </a></p>
                <textarea placeholder="请输入日志路径，一次只能输入一个" className="add_list"></textarea>
                <p className="step">Step2：选择生效的服务器</p>
                <Card>
            <SearchForm data={userInfo} />
            <TableBasic props={basicTransferInfo} />
            </Card>
            <div style={{float:"right",marginTop:"20px"}}>
            <Button style={{marginRight:"10px"}}>取消</Button>
            <Button type="primary" onClick={() => addLog()}>确认</Button>
            </div>
            </div>
        </Card>
    )
}

const logInfoData: any = [
    {
        id: 1,
        name: 'Guest',
        ip: '55508',
        label: '',
        status: "2020-01-09 16:15:35",
    },
    {
        id: 2,
        name: '服务器名称',
        ip: '外网IP',
        label: '标签',
        status: "状态",
    }
];