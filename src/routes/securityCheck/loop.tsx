import React, { useState } from 'react'
import { Card, Radio,Typography  } from 'antd';
import TableOptional from '../../components/table/TableOptional'
import SearchForm from '../../components/table/search';
import SelectTable from '../../components/table/SelectTable'

const { Text } = Typography;

let searchListForm = ""
let menuFirst = ""
let menuSecond = ""

export default function Loop() {
  //查询接口
  const searchCondition = (val: any) => {
    console.log(val)
    console.log(menuFirst,menuSecond)
    searchListForm = val
  }
  //重置
  const searchReset = () => {
    searchListForm = ""
  }

  //列表-隐藏列
      let columnsStateMap = {get_time: { show: false, order: 2, }}
      let userInfo=(
          { inputList: [{ placeholder: "服务器IP", label: "漏洞搜索：", name: "ip" },{ placeholder: "漏洞名称", label: "", name: "keyword" }], 
          searchCondition: searchCondition,
          searchReset: searchReset }
          )
  //分页
  const changeSize = (value: any) => {
    console.log(value)
  }
  let optionalTransferInfo = {
    count: 11,//条数
    columns: loopholeInfoColumns,
    data: loopholeInfoData,
    columnsStateMap: columnsStateMap,//隐藏列
    changeSize: changeSize,
    selectedChange: null,//选择改变方法
    ifRowSelection: false//是否可选择
  }
  return (
      <Card title="漏洞管理">
        <SearchForm data={userInfo} />
        <div style={{ marginTop: "20px" }}>
          <span>漏洞等级：</span>
          <Radio.Group buttonStyle="solid" defaultValue={0}>
            <Radio.Button value={0}>全部</Radio.Button>
            <Radio.Button value={1}>严重</Radio.Button>
            <Radio.Button value={2}>高危</Radio.Button>
            <Radio.Button value={3}>中危</Radio.Button>
            <Radio.Button value={4}>低危</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span>漏洞状态：</span>
          <Radio.Group buttonStyle="solid" defaultValue={1}>
            <Radio.Button value={1}>待修复</Radio.Button>
            <Radio.Button value={2}>已修复</Radio.Button>
            <Radio.Button value={3}>未修复</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span>漏洞类别：</span>
          <Radio.Group buttonStyle="solid" defaultValue={0}>
            <Radio.Button value={0}>全部</Radio.Button>
            <Radio.Button value={1}>Web漏洞 <Text type="danger">0</Text></Radio.Button>
            <Radio.Button value={2}>组件漏洞 <Text type="danger">1</Text></Radio.Button>
            <Radio.Button value={3}>系统漏洞 <Text type="danger">2</Text></Radio.Button>
          </Radio.Group>
        </div>
        <TableOptional props={optionalTransferInfo} />
        </Card>
  )
}
const getValue = (i:number,n:any)=> {//i-第几个下拉选择 n-传给后端值
  console.log(searchListForm)
  console.log(i,n)
  if (i === 0) {
    menuFirst = n
  } else {
    menuSecond = n
  }
}

//漏洞信息
const loopholeInfoData: any = [
  {
    id: 1,
    name: "",
    level: 'Guest',
    status: '55508',
    principal: `udp`,
    urgent_degree: "必须修复",
    operating: '-',
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:30"
  },
  {
    id: 2,
    name: "漏洞名称",
    level: '等级',
    status: '状态',
    principal: '负责人',
    urgent_degree: "紧急程度",
    operating: '操作',
    get_time: "获取时间",
    update_time: "更新时间"
  }
];
const loopholeInfoColumns: any = [
    {
      title: '漏洞名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '等级',
      dataIndex: 'level',
      key: 'level',
      width: 120,
      valueEnum: {
        低危: { text: '低危', status: 'Default' },
        中危: { text: '中危', status: 'info' },
        高危: { text: '高危', status: 'Warning' },
        严重: { text: '严重', status: 'Success' },
      }
    },
    {
      title: '漏洞状态',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      valueEnum: {
        待修复: { text: '待修复', status: 'Warning' },
        已修复: { text: '已修复', status: 'Success' },
        未修复: { text: '已忽略', status: 'Default' },
      }
    },
    {
      title: '负责人',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: () => (
        <span>
          {'紧急程度'}
          <SelectTable list={[0,getValue, ['全部', 1], ['必须修复', 2], ['暂缓操作', 3], ['无需操作', 4]]} />
        </span>
      ),
      dataIndex: 'urgent_degree',
      key: 'urgent_degree',
      render: (text:any) => {
        if (text==="必须修复") {
          return <Text type="danger">必须修复</Text>
        }else if (text==="暂缓操作") {
          return <Text type="warning">暂缓操作</Text>
        }else{
          return <Text type="secondary">无需操作</Text>
        }
      },
    },
    {
      title: '操作',
      dataIndex: 'operating',
      key: 'operating'
    }, {
      title: '获取时间',
      dataIndex: 'get_time',
      key: 'get_time',
    }, {
      title: '更新时间',
      dataIndex: 'update_time',
      key: 'update_time',
    }
  ]