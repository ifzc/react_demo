import React, { useState, useEffect } from 'react'
import { Tabs, Card, DatePicker, Button, Radio,Typography  } from 'antd';
import moment from 'moment';
import FingerprintDetail from './fingerprint';
import TableBasic from '../../components/table/TableBasic'
import TableOptional from '../../components/table/TableOptional'
import SearchForm from '../../components/table/search';
import './index.scss'
import Bar from '../../components/echart/bar';
import Line from '../../components/echart/line';
import SelectTable from '../../components/table/SelectTable'
import GetQueryString from '../../utils/query'
import axios from '../../utils/http'
import { start } from 'repl';

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const { Text } = Typography;
let searchListForm = ""

let menuFirst = ""
let menuSecond = ""

export default function AssetsDetail() {
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
  const [basicData, setBasicData] = useState([])
  const [basicInfo, setBasicInfo] = useState({ columns: [], ifExpand: false, name: "", index: "0" })
  const [optionalData, setOptionalData] = useState([])
  const [optionalInfo, setOptionalInfo] = useState({ columns: [], columnsMap: {} })
  const [barName, setBarName] = useState('用户信息')
  const [activeKey, setActiveKey] = useState('1')
  const [dataList, setDataList] = useState({agent_version: "",assembly: [""],cpu_info: "",create_time: "",
  host_status: 0,inner_net: "",last_line_time: "",location: "",name: "",os: "",outer_net: "",status: "",
  })//基本信息数据
  const [dataBar, setDataBar] = useState([])//柱状图数据
  const [monitor, setMonitor] = useState({
    create_time_list:[],cpu_list:[],in_network_list:[],out_network_list:[],mem_list:[],disk_list:[],disk_info_list:[]
  })//监控数据
  const [timeClick,setTimeClick]:any=useState([])
  const [time,setTime]:any=useState({start:moment().subtract(60, 'm').format("YYYY-MM-DD HH:mm:ss"),end:moment().format("YYYY-MM-DD HH:mm:ss")})

  //引用查询条件
  const [userInfo, setUserInfo] = useState({})

  let hostId = GetQueryString('id')
  let hostType = GetQueryString('type')
  //获取基本信息
  const getList = () =>{
    axios.get('/assets/host_info',{params:{host_id:hostId}}).then((res: any) => {
      if (res.data.status === "200") {
        setDataList({
          agent_version: res.data.host_info.agent_version,
          assembly: res.data.host_info.assembly,
          cpu_info: res.data.host_info.cpu_info,
          create_time: res.data.host_info.create_time,
          host_status: res.data.host_info.host_status,
          inner_net: res.data.host_info.inner_net,
          last_line_time: res.data.host_info.last_line_time,
          location: res.data.host_info.location,
          name: res.data.host_info.name,
          os: res.data.host_info.os,
          outer_net: res.data.host_info.outer_net,
          status: res.data.host_info.status,
        })
      }
    })
  }
  //获取柱状图
  const getListBar = () =>{
    axios.get('/assets/host_info_count',{params:{host_id:hostId}}).then((res: any) => {
      if (res.data.status === "200") {
        setDataBar(res.data.count_list)

      }
    })
  }
//获取监控信息
  const getAssembly = () =>{
    let info = {
      host_id:hostId,
      start_time:time.start,
      end_time:time.end
    }
    axios.get('/assets/monitor',{params:info}).then((res: any) => {
      if (res.data.status === "200") {
        
        let diskUse:any=dataSplit(res.data.disk_list)
        let memUse:any=dataSplit(res.data.mem_list)
        setMonitor({create_time_list:res.data.create_time_list,
          cpu_list:res.data.cpu_list,
          in_network_list:res.data.in_network_list,
          out_network_list:res.data.out_network_list,
          mem_list:memUse,
          disk_list:diskUse,
          disk_info_list:res.data.disk_info_list
        })
      }
    })
  }
  const dataSplit=(data:Array<string>) =>{
    let dataUse=data.map(function (item:string) {
      let diskAll =item.split('/')
      return diskAll[0];
    });
    return dataUse
  }
  function Example() {
    useEffect(() => {getList();getAssembly();getListBar()}, []);
    return null;
  }
  Example()
  //bar click
  const clickBar =(name:string)=>{
    setBarName(name)
    setActiveKey("2")
  }
  //x轴数据create_time_list:[],cpu_list:[],in_network_list:[],out_network_list:[],mem_list:[],disk_list:[],disk_info_list:[]
  let barData = {
    legend: [],
    xdata: ['web站点', '监听端口', '运行进程', '运行服务', '用户信息', '软件清单', '数据库信息'],
    ydata: dataBar,
    clickBar:clickBar
  }
  let lineDataCpu = {
    legend: ['cpu使用率'],
    xdata: monitor.create_time_list,
    ydata: [monitor.cpu_list]
  }
  let lineDataAccessNetwork = {
    legend: ['出网', '入网'],
    xdata: monitor.create_time_list,
    ydata: [monitor.in_network_list, monitor.out_network_list]
  }
  let lineDataRam = {
    legend: ['内存占用'],
    xdata: monitor.create_time_list,
    ydata: [monitor.mem_list]
  }
  let lineDataDisk = {
    legend: ['磁盘使用'],
    xdata: monitor.create_time_list,
    ydata: [ monitor.disk_list]
  }
  const onChange=(dates:any, dateStrings:Array<string>)=> {
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    setTime({start:dateStrings[0],end:dateStrings[1]})
  }
  //列表-隐藏列
  let columnsStateMap = {}
  //tab切换
  const callback = (key: string) => {
    setActiveKey(key)
    if (key === "3") {
      columnsStateMap = {
        get_time: { show: false, order: 2, }
      }
      setOptionalData(loopholeInfoData)
      setOptionalInfo({ columns: loopholeInfoColumns, columnsMap: columnsStateMap })
      setUserInfo({ inputList: [{ placeholder: "请输入漏洞名称", label: "漏洞搜索：", name: "keyword" }], searchCondition: searchCondition,searchReset: searchReset })
    }
    if (key === "4") {
      setBasicData(baselineCheckData)
      setBasicInfo({ columns: baselineCheckColumns, ifExpand: false, name: "", index: "0" })
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "搜索条件：", name: "keyword" }], searchCondition: searchCondition,searchReset: searchReset })
    } else if (key === "5") {
      columnsStateMap = {
        get_time: { show: false, order: 2, }
      }
      setOptionalData(weakPasswordData)
      setOptionalInfo({ columns: weakPasswordColumns, columnsMap: columnsStateMap })
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "搜索：", name: "keyword" }], searchCondition: searchCondition,searchReset: searchReset })
    } else if (key === "6") {
      setBasicData(abnormalLoginData)
      setBasicInfo({ columns: abnormalLoginColumns, ifExpand: false, name: "", index: "0" })
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "搜索：", name: "keyword" }], searchCondition: searchCondition,searchReset: searchReset })
    } else if (key === "7") {
      setBasicData(bruteForceData)
      setBasicInfo({ columns: bruteForceColumns, ifExpand: false, name: "", index: "0" })
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "搜索：", name: "keyword" }], searchCondition: searchCondition,searchReset: searchReset })
    } else if (key === "8") {
      setBasicData(websiteBackdoorData)
      setBasicInfo({ columns: websiteBackdoorColumns, ifExpand: true, name: "file_path", index: "4" })
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "搜索：", name: "keyword" }], searchCondition: searchCondition,searchReset: searchReset })
    } else if (key === "9") {
      setBasicData(reverseShellData)
      setBasicInfo({ columns: reverseShellColumns, ifExpand: false, name: "", index: "0" })
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "搜索：", name: "keyword" }], searchCondition: searchCondition,searchReset: searchReset })
    } else if (key === "10") {
      setBasicData(trojanDetectionData)
      setBasicInfo({ columns: trojanDetectionColumns, ifExpand: false, name: "", index: "0" })
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "搜索：", name: "keyword" }], searchCondition: searchCondition,searchReset: searchReset })
    } else if (key === "11") {
      setBasicData(suspiciousBehaviorData)
      setBasicInfo({ columns: suspiciousBehaviorColumns, ifExpand: false, name: "", index: "0" })
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "搜索：", name: "keyword" }], searchCondition: searchCondition,searchReset: searchReset })
    }
  }
  //分页
  const changeSize = (value: any) => {
    console.log(value)
  }
  //不可选择的日期
  const disabledDate:any = (current: any) => {

  if(!current || !timeClick || timeClick.length === 0){
    return false
}
    let start = moment(timeClick[1]).startOf("month")
    let end = moment(timeClick[0]).endOf("month")
    const tooLate = timeClick[0] && current.diff(timeClick[0], 'day') > end.diff(timeClick[0], 'day');
    const tooEarly = timeClick[1] && timeClick[1].diff(current, 'day') > timeClick[1].diff(start, 'day');
    return tooEarly || tooLate;
  }
  //弹出日历和关闭日历的回调
  const onOpenChange = (open:any) => {
    if (open ) {
      setTimeClick([]);
    }
  };
  //
  let basicTransferInfo = {
    columns: basicInfo.columns,
    data: basicData,
    changeSize: changeSize,
    isShow: false,
    ifExpand: basicInfo.ifExpand,//是否可展开
    name: basicInfo.name,//展开数据名
    index: basicInfo.index//展开数据所在列
  }
  let optionalTransferInfo = {
    count: 11,//条数
    columns: optionalInfo.columns,
    data: optionalData,
    columnsStateMap: optionalInfo.columnsMap,//隐藏列
    changeSize: changeSize,
    selectedChange: null,//选择改变方法
    ifRowSelection: false//是否可选择
  }
  return (
    <Tabs defaultActiveKey="1" activeKey={activeKey} onChange={callback} className="detail">
      <TabPane tab="基本信息" key="1">
      <Card>
        <div className="detail-basic">
          <div className="detail-basic-left">
            <p className="detail-list-title">基本信息</p>
            <table className="detail-basic-info">
              <tr>
                <td>主机名：</td>
                <td>{dataList.name}</td>
              </tr>
              <tr>
                <td>内网IP：</td>
                <td>{dataList.inner_net}</td>
              </tr>
              <tr>
                <td>外网IP：</td>
                <td>{dataList.outer_net}</td>
              </tr>
              <tr>
                <td>状 态：</td>
                {dataList.host_status===1 ? <Text type="success">在线</Text> : <Text type="secondary">离线 {dataList.last_line_time}</Text>}
              </tr>
              <tr>
                <td>组 件：</td>
                <td className="metaList">
                {
        dataList.assembly.map((item: any,) => {
          return <span>{item}</span>
        })
      }
                </td>
              </tr>
              <tr>
                <td>地 域：</td>
                <td>{dataList.location}</td>
              </tr>
              <tr>
                <td>版 本：</td>
                <td>{dataList.agent_version}</td>
              </tr>
              <tr>
                <td>安装时间：</td>
                <td>2020年7月28日 18:03</td>
              </tr>
              <tr>
                <td>操作系统：</td>
                <td>{dataList.os}</td>
              </tr>
              <tr>
                <td>CPU：</td>
                <td>{dataList.cpu_info}</td>
              </tr>
              {/* <tr>
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
              </tr> */}
              {hostType==="0" &&
              <tr>
                <td></td>
                <td>
                  <a href="javascript:void(0)" className='ahover' style={{ fontSize: '14px' }}>查看更多详细信息</a>
                  <pre className="moreinfo" style={{ display: 'none' }}></pre>
                </td>
              </tr>
}
            </table>
          </div>
          <div className="detail-basic-right">
            <Bar data={barData} />
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
                  'Today': [moment(), moment()],
                  '最近一周': [moment().subtract('days', 6), moment()],
                  '最近一个月': [moment().subtract('days', 30), moment()],
                }}
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                onChange={onChange}
                disabledDate={disabledDate}
                onCalendarChange={val => setTimeClick(val)}
                onOpenChange={onOpenChange}
              />
              <Button type="primary" size="small">查询</Button>
            </p>
          </div>
          <Card>
            <Line data={lineDataCpu} />
          </Card>
          <Card>
            <Line data={lineDataAccessNetwork} />
          </Card>
          <Card>
            <Line data={lineDataRam} />
          </Card>
          <Card>
            <Line data={lineDataDisk} />
          </Card>
        </div>
        </Card>
      </TabPane>
      <TabPane tab="指纹信息" key="2">
        <FingerprintDetail data={barName}/>
      </TabPane>
      <TabPane tab="漏洞信息" key="3">
      <Card>
        <SearchForm data={userInfo} />
        <div style={{ marginTop: "20px" }}>
          <span>漏洞等级：</span>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value={0}>全部</Radio.Button>
            <Radio.Button value={1}>严重</Radio.Button>
            <Radio.Button value={2}>高危</Radio.Button>
            <Radio.Button value={3}>中危</Radio.Button>
            <Radio.Button value={4}>低危</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span>漏洞状态：</span>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value={1}>待修复</Radio.Button>
            <Radio.Button value={2}>已修复</Radio.Button>
            <Radio.Button value={3}>未修复</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span>漏洞类别：</span>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value={0}>全部</Radio.Button>
            <Radio.Button value={1}>Web漏洞 <Text type="danger">0</Text></Radio.Button>
            <Radio.Button value={2}>组件漏洞 <Text type="danger">1</Text></Radio.Button>
            <Radio.Button value={3}>系统漏洞 <Text type="danger">2</Text></Radio.Button>
          </Radio.Group>
        </div>
        <TableOptional props={optionalTransferInfo} />
        </Card>
      </TabPane>
      
      <TabPane tab="基线检查" key="4">
      <Card>
        <SearchForm data={userInfo} />
        <TableBasic props={basicTransferInfo} />
        </Card>
      </TabPane>
      <TabPane tab="弱密码检查" key="5">
      <Card>
        <SearchForm data={userInfo} />
        <TableOptional props={optionalTransferInfo} />
        </Card>
      </TabPane>
      <TabPane tab="异常登录" key="6">
      <Card>
        <SearchForm data={userInfo} />
        <TableBasic props={basicTransferInfo} />
        </Card>
      </TabPane>
      <TabPane tab="暴力破解" key="7">
      <Card>
        <SearchForm data={userInfo} />
        <TableBasic props={basicTransferInfo} />
        </Card>
      </TabPane>
      <TabPane tab="网站后门" key="8">
      <Card>
        <SearchForm data={userInfo} />
        <TableBasic props={basicTransferInfo} />
        </Card>
      </TabPane>
      <TabPane tab="反弹shell" key="9">
      <Card>
        <SearchForm data={userInfo} />
        <TableBasic props={basicTransferInfo} />
        </Card>
      </TabPane>
      <TabPane tab="木马检测" key="10">
      <Card>
        <SearchForm data={userInfo} />
        <TableBasic props={basicTransferInfo} />
        </Card>
      </TabPane>
      <TabPane tab="可疑行为" key="11">
      <Card>
        <SearchForm data={userInfo} />
        <TableBasic props={basicTransferInfo} />
        </Card>
      </TabPane>
    </Tabs>
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

//基线检查
const baselineCheckData: any = [
  {
    id: '1',
    middleware: 'operating',
    required_items: "是",
    conform_baseline: "符合",
    get_time: '2020-2-20',
  },
  {
    id: '2',
    middleware: '中间件',
    required_items: "必须项",
    conform_baseline: "符合基线",
    get_time: '2020-2-20',
  }
];
const baselineCheckColumns: any = [
  {
    title: '中间件',
    dataIndex: 'middleware',
    key: 'middleware',
  },
  {
    title: () => (
      <span>
        {'必须项'}
        <SelectTable list={[0,getValue, ['全部', 1], ['是', 2], ['否', 3]]} />
      </span>
    ),
    dataIndex: 'required_items',
    key: 'required_items',
    render: (text:any) => text==='是' ? <Text type="success">是</Text> : <Text type="danger">否</Text>,
  },
  {
    title: () => (
      <span>
        {'符合基线'}
        <SelectTable list={[1,getValue, ['全部', 11], ['符合', 22], ['不符合', 33]]} />
      </span>
    ),
    dataIndex: 'conform_baseline',
    key: 'conform_baseline',
    render: (text:any) => text==='符合' ? <Text type="success">符合</Text> : <Text type="danger">不符合</Text>,
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
//弱密码检查
const weakPasswordData: any = [
  {
    id: 1,
    level: 'Guest',
    status: '55508',
    type: `udp`,
    port: "-",
    weak_info: "-",
    account_status: '-',
    operating: '-',
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:30"
  },
  {
    id: 2,
    level: '等级',
    status: '状态',
    type: '中间件类型',
    port: "中间件端口",
    weak_info: "弱密码账号/密码",
    account_status: '账号状态',
    operating: '操作',
    get_time: "获取时间",
    update_time: "更新时间"
  }
];

const weakPasswordColumns: any = [
  {
    title: () => (
      <span>
        {'等级'}
        <SelectTable list={[0,getValue, ['全部', 1], ['严重', 2], ['高危', 3], ['中危', 4], ['低危', 5]]} />
      </span>
    ),
    dataIndex: 'level',
    key: 'level',
    width: 120,
    render: (text:any) => {
      if (text==="严重") {
        return <Text type="danger">严重</Text>
      }else if (text==="高危") {
        return <Text type="warning">高危</Text>
      }else if(text==="中危"){
        return <Text type="secondary">中危</Text>
      }else{
        return <Text type="success">低危</Text>
      }
    },
    /* valueEnum: {
      低危: { text: '低危', status: 'Default' },
      中危: { text: '中危', status: 'info' },
      高危: { text: '高危', status: 'Warning' },
      严重: { text: '严重', status: 'Success' },
    } */
  },
  {
    title: () => (
      <span>
        {'状态'}
        <SelectTable list={[1,getValue, ['全部', 1], ['待修复', 2], ['已修复', 3], ['已修复', 4]]} />
      </span>
    ),
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (text:any) => {
      if (text==="待修复") {
        return <Text type="warning">待修复</Text>
      }else if (text==="未修复") {
        return <Text type="danger">未修复</Text>
      }else{
        return <Text type="success">已修复</Text>
      }
    }
    /* valueEnum: {
      待修复: { text: '待修复', status: 'Warning' },
      已修复: { text: '已修复', status: 'Success' },
      未修复: { text: '已忽略', status: 'Default' },
    } */
  },
  {
    title: '中间件类型',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: '中间件端口',
    dataIndex: 'port',
    key: 'port'
  }, {
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
  }, {
    title: '获取时间',
    dataIndex: 'get_time',
    key: 'get_time',
    colSpan: 1
  }, {
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
    colSpan: 1
  }
]
//异常登录
const abnormalLoginData: any = [
  {
    id: '1',
    level: 'operating',
    status: "待确认是",
    user: "符合",
    ip: "-",
    operating: "-",
    login_time: '2020-2-20',
  },
  {
    id: '2',
    level: '等级',
    status: "状态",
    user: "用户",
    ip: "登录源IP",
    operating: "操作",
    login_time: '2020-2-20',
  }
];
const abnormalLoginColumns: any = [
  {
    title: '等级',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: () => (
      <span>
        {'状态'}
        <SelectTable list={[0,getValue, ['全部', 1], ['待确认', 2], ['已确认', 3], ['已忽略', 4]]} />
      </span>
    ),
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (text:any) => {
      if (text==="待确认") {
        return <Text type="warning">待确认</Text>
      }else if (text==="已忽略") {
        return <Text type="danger">已忽略</Text>
      }else{
        return <Text type="success">已确认</Text>
      }
    },
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
const bruteForceData: any = [
  {
    id: '1',
    level: 'operating',
    status: "待确认是",
    user: "符合",
    ip: "-",
    operating: "-",
    get_time: '2020-2-20',
  },
  {
    id: '2',
    level: '等级',
    status: "状态",
    user: "用户",
    ip: "登录源IP",
    operating: "操作",
    get_time: '2020-2-20',
  }
];
const bruteForceColumns: any = [
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
const websiteBackdoorData: any = [
  {
    id: '1',
    level: 'operating',
    status: "待确认是",
    download: "符合",
    file_path: "-",
    operating: "-",
    get_time: '2020-2-20',
    update_time: ""
  },
  {
    id: '2',
    level: '等级',
    status: "状态",
    download: "下载",
    file_path: "文件路径",
    operating: "操作",
    get_time: '获取时间',
    update_time: "更新时间"
  }
];
const websiteBackdoorColumns: any = [
  {
    title: () => (
      <span>
        {'等级'}
        <SelectTable list={[0,getValue, ['全部', 1], ['严重', 2], ['高危', 3], ['中危', 4], ['低危', 5]]} />
      </span>
    ),
    dataIndex: 'level',
    key: 'level',
    width: 120,
    render: (text:any) => {
      if (text==="严重") {
        return <Text type="danger">严重</Text>
      }else if (text==="高危") {
        return <Text type="warning">高危</Text>
      }else if(text==="中危"){
        return <Text type="secondary">中危</Text>
      }else{
        return <Text type="success">低危</Text>
      }
    },
  },
  {
    title: () => (
      <span>
        {'状态'}
        <SelectTable list={[0,getValue, ['全部', 1], ['待处理', 2], ['已处理', 3], ['已忽略', 4]]} />
      </span>
    ),
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (text:any) => {
      if (text==="待处理") {
        return <Text type="warning">待处理</Text>
      }else if (text==="已忽略") {
        return <Text type="danger">已忽略</Text>
      }else{
        return <Text type="success">已处理</Text>
      }
    },
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
    width: 100,
    render: () => { },
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
  }, {
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
  }
];
//反弹shell
const reverseShellData: any = [
  {
    id: '1',
    level: 'operating',
    status: "待确认是",
    target_host: "符合",
    user: "-",
    process_name: "-",
    operating: "-",
    get_time: '2020-2-20',
  },
  {
    id: '2',
    level: '等级',
    status: "状态",
    target_host: "目标主机",
    user: "用户",
    process_name: "进程名称",
    operating: "操作",
    get_time: '获取时间',
  }
];
const reverseShellColumns: any = [
  {
    title: () => (
      <span>
        {'等级'}
        <SelectTable list={[0,getValue, ['全部', 1], ['严重', 2], ['高危', 3], ['中危', 4], ['低危', 5]]} />
      </span>
    ),
    dataIndex: 'level',
    key: 'level',
    width: 120,
    render: (text:any) => {
      if (text==="严重") {
        return <Text type="danger">严重</Text>
      }else if (text==="高危") {
        return <Text type="warning">高危</Text>
      }else if(text==="中危"){
        return <Text type="secondary">中危</Text>
      }else{
        return <Text type="success">低危</Text>
      }
    },
  },
  {
    title: () => (
      <span>
        {'状态'}
        <SelectTable list={[0,getValue, ['全部', 1], ['待处理', 2], ['已处理', 3], ['已忽略', 4]]} />
      </span>
    ),
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (text:any) => {
      if (text==="待处理") {
        return <Text type="warning">待处理</Text>
      }else if (text==="已忽略") {
        return <Text type="danger">已忽略</Text>
      }else{
        return <Text type="success">已处理</Text>
      }
    },
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
const trojanDetectionData: any = [
  {
    id: '1',
    name: "-",
    level: 'operating',
    status: "待确认",

    get_time: '2020-2-20',
  },
  {
    id: '2',
    name: "木马名称",
    level: '等级',
    status: "状态",
    operating: "操作",
    get_time: '获取时间',
  }
];
const trojanDetectionColumns: any = [
  {
    title: '木马名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: () => (
      <span>
        {'等级'}
        <SelectTable list={[0,getValue, ['全部', 1], ['严重', 2], ['高危', 3], ['中危', 4], ['低危', 5]]} />
      </span>
    ),
    dataIndex: 'level',
    key: 'level',
    width: 120,
    render: (text:any) => {
      if (text==="严重") {
        return <Text type="danger">严重</Text>
      }else if (text==="高危") {
        return <Text type="warning">高危</Text>
      }else if(text==="中危"){
        return <Text type="secondary">中危</Text>
      }else{
        return <Text type="success">低危</Text>
      }
    },
  },
  {
    title: () => (
      <span>
        {'状态'}
        <SelectTable list={[0,getValue, ['全部', 1], ['待处理', 2], ['已处理', 3], ['已忽略', 4]]} />
      </span>
    ),
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (text:any) => {
      if (text==="待处理") {
        return <Text type="warning">待处理</Text>
      }else if (text==="已忽略") {
        return <Text type="danger">已忽略</Text>
      }else{
        return <Text type="success">已处理</Text>
      }
    },
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
const suspiciousBehaviorData: any = [
  {
    id: '1',
    behavior: "-",
    name: "-",
    level: 'operating',
    status: "待确认",

    get_time: '2020-2-20',
  },
  {
    id: '2',
    behavior: "可疑行为",
    name: "规则名称",
    level: '等级',
    status: "状态",
    operating: "操作",
    get_time: '获取时间',
  }
];
const suspiciousBehaviorColumns: any = [
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
    title: () => (
      <span>
        {'等级'}
        <SelectTable list={[0,getValue, ['全部', 1], ['严重', 2], ['高危', 3], ['中危', 4], ['低危', 5]]} />
      </span>
    ),
    dataIndex: 'level',
    key: 'level',
    width: 120,
    render: (text:any) => {
      if (text==="严重") {
        return <Text type="danger">严重</Text>
      }else if (text==="高危") {
        return <Text type="warning">高危</Text>
      }else if(text==="中危"){
        return <Text type="secondary">中危</Text>
      }else{
        return <Text type="success">低危</Text>
      }
    },
  },
  {
    title: () => (
      <span>
        {'状态'}
        <SelectTable list={[0,getValue, ['全部', 1], ['待确认', 2], ['已确认', 3], ['已忽略', 4]]} />
      </span>
    ),
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (text:any) => {
      if (text==="待确认") {
        return <Text type="warning">待确认</Text>
      }else if (text==="已忽略") {
        return <Text type="danger">已忽略</Text>
      }else{
        return <Text type="success">已确认</Text>
      }
    },
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