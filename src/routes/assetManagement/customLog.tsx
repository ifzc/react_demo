import { useState } from 'react';
import { Card, Radio, Button } from 'antd';
import { Link } from 'react-router-dom'
import SearchForm from '../../components/table/search';
import TableBasic from '../../components/table/TableBasic'

let searchListForm = ''
export default function CustomLog() {
    const logInfoColumns: any = [
        {
            title: '服务器名称',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '日志路径',
            dataIndex: 'path',
            key: 'path'
        },
        {
            title: '操作',
            dataIndex: 'operating',
            key: 'operating',
            render: (text: any, record: any, index: number) => [
                <Button type="primary" danger size="small" onClick={() => deleteLog(index)}>删除</Button>
            ]
        }, {
            title: '获取时间',
            dataIndex: 'get_time',
            key: 'get_time',
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
        inputList: [{ placeholder: "请输入", label: "搜索：", name: "keyword" }],
        searchCondition: searchCondition,
        searchReset: searchReset
    }
    return (
        <Card title="日志信息 / 自定义日志" extra={<Button><Link to="/asset/custom_log_add">新增自定义日志</Link></Button>} >
            <SearchForm data={userInfo} />
            <TableBasic props={basicTransferInfo} />
        </Card>
    )
}

const logInfoData: any = [
    {
        id: 1,
        name: 'Guest',
        path: '55508',
        operating: '',
        get_time: "2020-01-09 16:15:35",
    },
    {
        id: 2,
        name: '服务器名称',
        path: '日志路径',
        operating: '',
        get_time: "获取时间",
    }
];