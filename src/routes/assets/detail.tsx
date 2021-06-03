import React, { useState }from 'react'
import { Tabs, Card,DatePicker, Button  } from 'antd';
import moment from 'moment';
import FingerprintDetail from './fingerprint';
import TableBasic from '../../components/table/TableBasic'
import TableOptional from '../../components/table/TableOptional'
import SearchForm from '../../components/table/search';

import './index.scss'
import Bar from '../../components/echart/bar';
import Line from '../../components/echart/line';

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

export default function AssetsDetail() {
  //查询接口
  const searchCondition =(val:any)=>{
    console.log(val)
  }
  const [basicData, setBasicData] = useState([])
  const [basicInfo, setBasicInfo] = useState({columns:[]})
  const [optionalData, setOptionalData] = useState([])
  const [optionalInfo, setOptionalInfo] = useState({columns:[],columnsMap:{}})
  //引用查询条件
  const [userInfo, setUserInfo] = useState({})
  const [lineXdata,setLineXdata]=useState([
    '2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00', '2009/6/12 12:00', '2009/6/12 13:00', '2009/6/12 14:00', '2009/6/12 15:00', '2009/6/12 16:00', '2009/6/12 17:00', '2009/6/12 18:00', '2009/6/12 19:00', '2009/6/12 20:00', '2009/6/12 21:00'])
      let barData={
        legend:[],
        xdata: ['用户信息', '软件清单', '监听端口', '运行进程', 'web站点', '数据库信息', '组件信息', '共享文件'],
        ydata: [0, 417, 20, 27, 11, 12, 12, 0]
      }
      let lineDataCpu={
        legend:['cpu使用率'],
        xdata: lineXdata,
        ydata: [[10,20,40,0,30,100,80,90,10,20,40,0,30,100,80,90,60,2,5,100]]
      }
      let lineDataAccessNetwork={
        legend:['出网','入网'],
        xdata: lineXdata,
        ydata: [[10,20,40,0,30,100,80,90,10,20,40,0,30,100,80,90,60,2,5,100],[100,200,400,0,300,100,80,90,100,200,400,0,300,100,80,90,6,20,50,100]]
      }
      let lineDataRam={
        legend:['内存占用'],
        xdata: lineXdata,
        ydata:[[10,20,40,0,30,100,80,90,10,20,40,0,30,100,80,90,60,2,5,100]]
      }
      let lineDataDisk={
        legend:['磁盘使用'],
        xdata: lineXdata,
        ydata: [[10,20,40,0,30,100,80,90,10,20,40,0,30,100,80,90,60,2,5,100]]
      }
      const onChange = () =>{

      }
       //列表相关
  let columnsStateMap = {}
      const callback = (key:string) => {
       if(key==="4"){
        setBasicData(baselineCheckData)
        setBasicInfo({columns:baselineCheckColumns})
        setUserInfo({inputList:[{placeholder:"请输入",label:"搜索条件：",name:"keyword"}],searchCondition:searchCondition})
       } else if(key==="5"){
        columnsStateMap={
          get_time: {show: false,order: 2,}}
        setOptionalData(weakPasswordData)
        setOptionalInfo({columns:weakPasswordColumns,columnsMap:columnsStateMap})
        setUserInfo({inputList:[{placeholder:"请输入",label:"搜索：",name:"keyword"}],searchCondition:searchCondition})
       } else if(key==="6"){
        setBasicData(abnormalLoginData)
        setBasicInfo({columns:abnormalLoginColumns})
        setUserInfo({inputList:[{placeholder:"请输入",label:"搜索：",name:"keyword"}],searchCondition:searchCondition})
       } else if(key==="7"){
        setBasicData(bruteForceData)
        setBasicInfo({columns:bruteForceColumns})
        setUserInfo({inputList:[{placeholder:"请输入",label:"搜索：",name:"keyword"}],searchCondition:searchCondition})
       } else if(key==="8"){
        setBasicData(websiteBackdoorData)
        setBasicInfo({columns:websiteBackdoorColumns})
        setUserInfo({inputList:[{placeholder:"请输入",label:"搜索：",name:"keyword"}],searchCondition:searchCondition})
       } else if(key==="9"){
        setBasicData(reverseShellData)
        setBasicInfo({columns:reverseShellColumns})
        setUserInfo({inputList:[{placeholder:"请输入",label:"搜索：",name:"keyword"}],searchCondition:searchCondition})
       } else if(key==="10"){
        setBasicData(trojanDetectionData)
        setBasicInfo({columns:trojanDetectionColumns})
        setUserInfo({inputList:[{placeholder:"请输入",label:"搜索：",name:"keyword"}],searchCondition:searchCondition})
       } else if(key==="11"){
        setBasicData(suspiciousBehaviorData)
        setBasicInfo({columns:suspiciousBehaviorColumns})
        setUserInfo({inputList:[{placeholder:"请输入",label:"搜索：",name:"keyword"}],searchCondition:searchCondition})
       }
      }
      const changeSize=(value:any)=>{
        console.log(value)
        }
      let basicTransferInfo={
        columns:basicInfo.columns,
        data:basicData,
        changeSize:changeSize,
        isShow:false
      }
      let optionalTransferInfo = {
        count: 11,//条数
        columns: optionalInfo.columns,
        data: optionalData,
        columnsStateMap: optionalInfo.columnsMap,
        changeSize: changeSize,
        selectedChange: null,
        ifRowSelection:false
    }
    return(
        <Tabs defaultActiveKey="1" onChange={callback} className="detail">
    <TabPane tab="基本信息" key="1">
    <div className="detail-basic">
      <div className="detail-basic-left">
      <p className="detail-list-title">基本信息</p>
      <table className="detail-basic-info">
              <tr>
                <td>主机名：</td>
                <td>iZ11sbkr2q3Z</td>
              </tr>
              <tr>
                <td>内网IP：</td>
                <td>10.25.44.145</td>
              </tr>
              <tr>
                <td>外网IP：</td>
                <td>120.55.165.80</td>
              </tr>
              <tr>
                <td>状 态：</td>
                <td>离线 (离线时间:2020年7月28日 18:03)</td>
              </tr>
              <tr>
                <td>组 件：</td>
                <td>
                  <p className="metaList"></p>
                </td>
              </tr>
              <tr>
                <td>地 域：</td>
                <td>浙江省杭州市</td>
              </tr>
              <tr>
                <td>版 本：</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>安装时间：</td>
                <td>2020年7月28日 18:03</td>
              </tr>
              <tr>
                <td>操作系统：</td>
                <td>CentOS release 6.10 (Final)</td>
              </tr>
              <tr>
                <td>CPU：</td>
                <td>Intel(R) Xeon(R) CPU E5-2680 v3 @ 2.50GHz / 1核</td>
              </tr>
              <tr>
                <td>内 存：</td>
                <td>总内存:3.9G 已使用:2.2G</td>
              </tr>
              <tr>
                <td>磁盘信息：</td>
                <td>	
                    /dev/vda1 总共 39.25G 已用 30.08G
                    /dev/vdb1 总共 98.43G 已用 15.98G
                </td>
              </tr>
              <tr>
                <td>补丁信息：</td>
                <td>补丁信息</td>
              </tr>
              <tr>
              <td></td>
                <td>
                  <a href="javascript:void(0)" className='ahover' style={{ fontSize: '14px' }}>查看更多详细信息</a>
                  <pre className="moreinfo" style={{display:'none'}}></pre>
                </td>
              </tr>
            </table>
      </div>
      <div className="detail-basic-right">
      <Bar data={barData}/>
      </div>
  </div>
  <div className="detail-monitor">
    <div className="detail-monitor-top">
  <p className="detail-list-title">监控信息</p>
  <p>
    <a href="##">设置告警规则</a>
    <a href="##">查看告警规则</a>
    <RangePicker
      ranges={{
        '最近一周': [moment().subtract('days', 6), moment()],
        '最近一个月': [moment().subtract('days', 30), moment()],
        '最近三个月': [moment().subtract('days', 90), moment()],
      }}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
    <Button type="primary" size="small">查询</Button>
  </p>
  </div>
  <Card>
    <Line data={lineDataCpu}/>
  </Card>
  <Card>
  <Line data={lineDataAccessNetwork}/>
  </Card>
  <Card>
  <Line data={lineDataRam}/>
  </Card>
  <Card>
  <Line data={lineDataDisk}/>
  </Card>
  </div>
    </TabPane>
    <TabPane tab="指纹信息" key="2">
      <FingerprintDetail/>
    </TabPane>
    <TabPane tab="漏洞信息" key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="基线检查" key="4">
    <SearchForm data={userInfo}/>
    <TableBasic props={basicTransferInfo}/>
    </TabPane>
    <TabPane tab="弱密码检查" key="5">
    <SearchForm data={userInfo}/>
    <TableOptional props={optionalTransferInfo} />
    </TabPane>
    <TabPane tab="异常登录" key="6">
    <SearchForm data={userInfo}/>
    <TableBasic props={basicTransferInfo}/>
    </TabPane>
    <TabPane tab="暴力破解" key="7">
    <SearchForm data={userInfo}/>
    <TableBasic props={basicTransferInfo}/>
    </TabPane>
    <TabPane tab="网站后门" key="8">
    <SearchForm data={userInfo}/>
    <TableBasic props={basicTransferInfo}/>
    </TabPane>
    <TabPane tab="反弹shell" key="9">
    <SearchForm data={userInfo}/>
    <TableBasic props={basicTransferInfo}/>
    </TabPane>
    <TabPane tab="木马检测" key="10">
    <SearchForm data={userInfo}/>
    <TableBasic props={basicTransferInfo}/>
    </TabPane>
    <TabPane tab="可疑行为" key="11">
    <SearchForm data={userInfo}/>
    <TableBasic props={basicTransferInfo}/>
    </TabPane>
  </Tabs>
    )
}

  //基线检查
  const baselineCheckData:any = [
    {
      id: '1',
      middleware: 'operating',
      required_items: "是",
      conform_baseline:"符合",
      get_time: '2020-2-20',
    },
    {
      id: '2',
      middleware: '中间件',
      required_items: "必须项",
      conform_baseline:"符合基线",
      get_time: '2020-2-20',
    }
  ];
  const baselineCheckColumns:any = [
    {
      title: '中间件',
      dataIndex: 'middleware',
      key: 'middleware',
    },
    {
      title: '必须项',
      dataIndex: 'required_items',
      key: 'required_items',
      filters: [
        {
          text: '是',
          value: '是',
        },
        {
          text: '否',
          value: '否',
        }
      ]
    },
    {
      title: '符合基线',
      dataIndex: 'conform_baseline',
      key: 'conform_baseline',
      filters: [
        {
          text: '符合',
          value: '符合',
        },
        {
          text: '不符合',
          value: '不符合',
        }
      ]
    },
    {
      title: '操作',
      dataIndex: 'operating',
      key: 'operating',
    },
    {
      title: '获取时间',
      key: 'get_time',
      dataIndex: 'get_time',
      /* render: (text:any, record:any) => (
        <Space size="middle">
          <a href="##">Invite {record.name}</a>
          <a href="##">Delete</a>
        </Space>
      ), */
    },
  ];
  //弱密码检查
const weakPasswordData:any = [
  {
    id: 1,
    level: 'Guest',
    status:'55508',
    type: `udp`,
    weak_info: "-",
    account_status:'-',
    operating: '-',
    get_time: "2020-01-09 16:15:35",
    update_time:"2020-01-09 16:15:30"
},
  {
      id: 2,
      level: '等级',
      status:'状态',
      type: '中间件类型',
      weak_info: "弱密码账号/密码",
      account_status:'账号状态',
      operating: '操作',
      get_time: "获取时间",
      update_time:"更新时间"
  }
];

const weakPasswordColumns:any = [
  {
      title: '等级',
      dataIndex: 'level',
      key: 'level',
      filters: true,
      onFilter: true,
      width: 120,
      valueEnum: {
        低危: { text: '低危', status: 'Default' },
        中危: { text: '中危', status: 'info' },
        高危: { text: '高危', status: 'Warning' },
        严重: { text: '严重', status: 'Success' },
      }
  },
  {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: true,
      onFilter: true,
      width: 120,
      valueEnum: {
        待修复: { text: '待修复', status: 'Warning' },
        已修复: { text: '已修复', status: 'Success' },
        未修复: { text: '未修复', status: 'Default' },
      }
  },
   {
    title: '中间件类型',
    dataIndex: 'type',
    key: 'type'
},{
  title: '弱密码账号/密码',
  dataIndex: 'weak_info',
  key: 'weak_info'
},
{
  title: '账号状态',
  dataIndex: 'account_status',
  key: 'account_status'
},
{
title: '操作',
dataIndex: 'operating',
key: 'operating'
},{
  title: '获取时间',
  dataIndex: 'get_time',
  key: 'get_time',
  colSpan: 1
},{
  title: '更新时间',
  dataIndex: 'update_time',
  key: 'update_time',
  colSpan: 1
}
]
 //异常登录
 const abnormalLoginData:any = [
  {
    id: '1',
    level: 'operating',
    status: "待确认是",
    user:"符合",
    ip:"-",
    operating:"-",
    login_time: '2020-2-20',
  },
  {
    id: '2',
    level: '等级',
    status: "状态",
    user:"用户",
    ip:"登录源IP",
    operating:"操作",
    login_time: '2020-2-20',
  }
];
const abnormalLoginColumns:any = [
  {
    title: '等级',
      dataIndex: 'level',
      key: 'level',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    filters: [
      {
        text: '待确认',
        value: '待确认',
      },
      {
        text: '已确认',
        value: '已确认',
      },
      {
        text: '已忽略',
        value: '已忽略',
      },
    ]
  },
  {
    title: '用户',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: '登录源IP',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: '操作',
    dataIndex: 'operating',
    key: 'operating',
  },
  {
    title: '登录时间',
    key: 'login_time',
    dataIndex: 'login_time',
  },
];
 // 暴力破解
 const bruteForceData:any = [
  {
    id: '1',
    level: 'operating',
    status: "待确认是",
    user:"符合",
    ip:"-",
    operating:"-",
    get_time: '2020-2-20',
  },
  {
    id: '2',
    level: '等级',
    status: "状态",
    user:"用户",
    ip:"登录源IP",
    operating:"操作",
    get_time: '2020-2-20',
  }
];
const bruteForceColumns:any = [
  {
    title: '等级',
      dataIndex: 'level',
      key: 'level',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '用户',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: '攻击源IP',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: '操作',
    dataIndex: 'operating',
    key: 'operating',
  },
  {
    title: '获取时间',
    key: 'get_time',
    dataIndex: 'get_time',
  },
];
 //网站后门
 const websiteBackdoorData:any = [
  {
    id: '1',
    level: 'operating',
    status: "待确认是",
    download:"符合",
    file_path:"-",
    operating:"-",
    get_time: '2020-2-20',
    update_time:""
  },
  {
    id: '2',
    level: '等级',
    status: "状态",
    download:"下载",
    file_path:"文件路径",
    operating:"操作",
    get_time: '获取时间',
    update_time:"更新时间"
  }
];
const websiteBackdoorColumns:any = [
  {
    title: '等级',
      dataIndex: 'level',
      key: 'level',
      filters: [
        {
          text: '严重',
          value: '严重',
        },
        {
          text: '高危',
          value: '高危',
        },
        {
          text: '中危',
          value: '中危',
        },
        {
          text: '低危',
          value: '低危',
        },
      ]
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    filters: [
      {
        text: '待处理',
        value: '待处理',
      },
      {
        text: '已处理',
        value: '已处理',
      },
      {
        text: '已忽略',
        value: '已忽略',
      },
    ]
  },
  {
    title: '下载',
    dataIndex: 'download',
    key: 'download',
  },
  {
    title: '文件路径',
    dataIndex: 'file_path',
    key: 'file_path',
  },
  {
    title: '操作',
    dataIndex: 'operating',
    key: 'operating',
  },
  {
    title: '获取时间',
    dataIndex: 'get_time',
    key: 'get_time',
  },{
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
  }
];
 //反弹shell
 const reverseShellData:any = [
  {
    id: '1',
    level: 'operating',
    status: "待确认是",
    target_host:"符合",
    user:"-",
    process_name:"-",
    operating:"-",
    get_time: '2020-2-20',
  },
  {
    id: '2',
    level: '等级',
    status: "状态",
    target_host:"目标主机",
    user:"用户",
    process_name:"进程名称",
    operating:"操作",
    get_time: '获取时间',
  }
];
const reverseShellColumns:any = [
  {
    title: '等级',
      dataIndex: 'level',
      key: 'level',
      filters: [
        {
          text: '严重',
          value: '严重',
        },
        {
          text: '高危',
          value: '高危',
        },
        {
          text: '中危',
          value: '中危',
        },
        {
          text: '低危',
          value: '低危',
        },
      ]
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    filters: [
      {
        text: '待处理',
        value: '待处理',
      },
      {
        text: '已处理',
        value: '已处理',
      },
      {
        text: '已忽略',
        value: '已忽略',
      },
    ]
  },
  {
    title: '目标主机',
    dataIndex: 'target_host',
    key: 'target_host',
  },
  {
    title: '用户',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: '进程名称',
    dataIndex: 'process_name',
    key: 'process_name',
  },
  {
    title: '操作',
    dataIndex: 'operating',
    key: 'operating',
  },
  {
    title: '获取时间',
    dataIndex: 'get_time',
    key: 'get_time',
  }
];
//木马检测
const trojanDetectionData:any = [
  {
    id: '1',
    name:"-",
    level: 'operating',
    status: "待确认",

    get_time: '2020-2-20',
  },
  {
    id: '2',
    name:"木马名称",
    level: '等级',
    status: "状态",
    operating:"操作",
    get_time: '获取时间',
  }
];
const trojanDetectionColumns:any = [
  {
    title: '木马名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '等级',
      dataIndex: 'level',
      key: 'level',
      filters: [
        {
          text: '严重',
          value: '严重',
        },
        {
          text: '高危',
          value: '高危',
        },
        {
          text: '中危',
          value: '中危',
        },
        {
          text: '低危',
          value: '低危',
        },
      ]
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    filters: [
      {
        text: '待处理',
        value: '待处理',
      },
      {
        text: '已处理',
        value: '已处理',
      },
      {
        text: '已忽略',
        value: '已忽略',
      },
    ]
  },
  {
    title: '操作',
    dataIndex: 'operating',
    key: 'operating',
  },
  {
    title: '获取时间',
    dataIndex: 'get_time',
    key: 'get_time',
  }
];
//可疑行为
const suspiciousBehaviorData:any = [
  {
    id: '1',
    behavior:"-",
    name:"-",
    level: 'operating',
    status: "待确认",

    get_time: '2020-2-20',
  },
  {
    id: '2',
    behavior:"可疑行为",
    name:"规则名称",
    level: '等级',
    status: "状态",
    operating:"操作",
    get_time: '获取时间',
  }
];
const suspiciousBehaviorColumns:any = [
  {
    title: '可疑行为',
    dataIndex: 'behavior',
    key: 'behavior',
  },
  {
    title: '规则名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '等级',
      dataIndex: 'level',
      key: 'level',
      filters: [
        {
          text: '严重',
          value: '严重',
        },
        {
          text: '高危',
          value: '高危',
        },
        {
          text: '中危',
          value: '中危',
        },
        {
          text: '低危',
          value: '低危',
        },
      ]
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    filters: [
      {
        text: '待处理',
        value: '待处理',
      },
      {
        text: '已处理',
        value: '已处理',
      },
      {
        text: '已忽略',
        value: '已忽略',
      },
    ]
  },
  {
    title: '操作',
    dataIndex: 'operating',
    key: 'operating',
  },
  {
    title: '获取时间',
    dataIndex: 'get_time',
    key: 'get_time',
  }
];