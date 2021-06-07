import React, { useState } from 'react'
import { Tabs } from 'antd';
import SearchForm from '../../components/table/search';
import TableOptional from '../../components/table/TableOptional'
import SelectTable from '../../components/table/SelectTable'

import './index.scss'

const { TabPane } = Tabs;
let searchListForm = ''
let menuFirst = ""
let menuSecond = ""
export default function FingerprintDetail() {
  //查询接口
  const searchCondition = (val: any) => {
    console.log(menuFirst, menuSecond)//表格筛选值
    searchListForm = val
  }
  //重置
  const searchReset = () => {
    searchListForm = ""
  }
  const [data, setData] = useState(userInfoData)
  const [info, setInfo] = useState({ columns: userInfoColumns, columnsMap: {}, ifExpand: false, name: "", index: "0" })
  //引用查询条件
  const [userInfo, setUserInfo] = useState({ inputList: [{ placeholder: "用户名/shell", label: "用户搜索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
  //列表相关
  let columnsStateMap = {}


  const callback = (key: string) => {
    console.log(key);
    if (key === "用户信息") {
      setData(userInfoData)
      columnsStateMap = {
        password_last_time: { show: false, order: 2, }, password_expiration_time: { show: false, order: 2, },
        get_time: { show: false, order: 2, }
      }
      setUserInfo({ inputList: [{ placeholder: "用户名/shell", label: "用户搜索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
      setInfo({ columns: userInfoColumns, columnsMap: columnsStateMap, ifExpand: false, name: "", index: "0" })
    } else if (key === "软件清单") {
      setData(softwareListData)
      columnsStateMap = {
        type: { show: false, order: 2, }, get_time: { show: false, order: 2, }
      }
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "软件搜索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
      setInfo({ columns: softwareListColumns, columnsMap: columnsStateMap, ifExpand: true, name: "installation_path", index: "6" })
    } else if (key === "监听端口") {
      setData(listeningPortData)
      columnsStateMap = {
        get_time: { show: false, order: 2, }
      }
      setUserInfo({ inputList: [{ placeholder: "端口/进程名", label: "搜 索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
      setInfo({ columns: listeningPortColumns, columnsMap: columnsStateMap, ifExpand: false, name: "", index: "0" })
    } else if (key === "运行进程") {
      setData(runningProcessData)
      columnsStateMap = {
        get_time: { show: false, order: 2, }
      }
      setUserInfo({ inputList: [{ placeholder: "进程名/进程ID/路径/文件md5", label: "进程搜索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
      setInfo({ columns: runningProcessColumns, columnsMap: columnsStateMap, ifExpand: true, name: "detail", index: "6" })
    } else if (key === "运行服务") {
      setData(runningServiceData)
      columnsStateMap = {
        display_name: { show: false, order: 2, }, description: { show: false, order: 2, },
        group_name: { show: false, order: 2, }, service_user: { show: false, order: 2, }
      }
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "服务搜索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
      setInfo({ columns: runningServiceColumns, columnsMap: columnsStateMap, ifExpand: false, name: "", index: "0" })
    } else if (key === "web站点") {
      setData(webSiteData)
      columnsStateMap = {
        site_path: { show: false, order: 2, }, log_path: { show: false, order: 2, },
        get_time: { show: false, order: 2, }
      }
      setUserInfo({ inputList: [{ placeholder: "域名/端口", label: "搜 索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
      setInfo({ columns: webSiteColumns, columnsMap: columnsStateMap, ifExpand: false, name: "", index: "0" })
    } else if (key === "数据库信息") {
      setData(databaseInfoData)
      columnsStateMap = {
        aystem_log_path: { show: false, order: 2, }, error_log_path: { show: false, order: 2, },
        get_time: { show: false, order: 2, }
      }
      setUserInfo({ inputList: [{ placeholder: "数据库名称/类型/端口/安装路径", label: "搜 索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
      setInfo({ columns: databaseInfoColumns, columnsMap: columnsStateMap, ifExpand: false, name: "", index: "0" })
    } else if (key === "日志信息") {
      setData(logInfoData)
      columnsStateMap = {}
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "日志搜索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
      setInfo({ columns: logInfoColumns, columnsMap: columnsStateMap, ifExpand: false, name: "", index: "0" })
    } else if (key === "补丁信息") {
      setData(patchInfoData)
      columnsStateMap = { get_time: { show: false, order: 2 } }
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "补丁搜索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
      setInfo({ columns: patchInfoColumns, columnsMap: columnsStateMap, ifExpand: true, name: "link", index: "5" })
    } else if (key === "共享文件") {
      setData(sharedFileData)
      columnsStateMap = {}
      setUserInfo({ inputList: [{ placeholder: "请输入", label: "文件搜索：", name: "keyword" }], searchCondition: searchCondition, searchReset: searchReset })
      setInfo({ columns: sharedFileColumns, columnsMap: columnsStateMap, ifExpand: false, name: "", index: "0" })
    }
  }//patchInfoData patchInfoColumns sharedFileData sharedFileColumns
  //换页
  const changeSize = (value: any) => {
    console.log(value)
  }

  let optionalTransferInfo = {
    count: 11,//条数
    columns: info.columns,
    data: data,
    columnsStateMap: info.columnsMap,
    changeSize: changeSize,
    selectedChange: null,
    ifRowSelection: false,
    ifExpand: info.ifExpand,//是否可展开
    name: info.name,
    index: info.index
  }


  return (
    <Tabs defaultActiveKey="用户信息" onChange={callback} className="detail">
      <TabPane tab="用户信息" key="用户信息">
        <SearchForm data={userInfo} />
        <TableOptional props={optionalTransferInfo} />
      </TabPane>
      <TabPane tab=" 软件清单" key="软件清单">
        <SearchForm data={userInfo} />
        <TableOptional props={optionalTransferInfo} />
      </TabPane>
      <TabPane tab="监听端口" key="监听端口">
        <SearchForm data={userInfo} />
        <TableOptional props={optionalTransferInfo} />
      </TabPane>
      <TabPane tab="运行进程" key="运行进程">
        <SearchForm data={userInfo} />
        <TableOptional props={optionalTransferInfo} />
      </TabPane>
      <TabPane tab=" 运行服务" key="运行服务">
        <SearchForm data={userInfo} />
        <TableOptional props={optionalTransferInfo} />
      </TabPane>
      <TabPane tab=" web站点" key="web站点">
        <SearchForm data={userInfo} />
        <TableOptional props={optionalTransferInfo} />
      </TabPane>
      <TabPane tab="数据库信息" key="数据库信息">
        <SearchForm data={userInfo} />
        <TableOptional props={optionalTransferInfo} />
      </TabPane>
      <TabPane tab="日志信息" key="日志信息">
        <div>只看非空IP</div>
        <SearchForm data={userInfo} />
        <TableOptional props={optionalTransferInfo} />
      </TabPane>
      <TabPane tab="补丁信息" key="补丁信息">
        <SearchForm data={userInfo} />
        <TableOptional props={optionalTransferInfo} />
      </TabPane>
      <TabPane tab=" 共享文件" key="共享文件">
        <SearchForm data={userInfo} />
        <TableOptional props={optionalTransferInfo} />
      </TabPane>
    </Tabs>
  )
}

const getValue = (i:number,n:any)=> {//i-第几个下拉选择 n-传给后端值
  console.log(searchListForm)
  if (i === 0) {
    menuFirst = n
  } else {
    menuSecond = n
  }
}

const userInfoData: any = [
  {
    id: 1,
    username: 'Administrator',
    status: '启用',
    description: `管理计算机(域)的内置帐户`,
    local_group_members: "	*Administrators *Performance Log Users",
    global_group_members: "	*None",
    last_login_time: "2020-01-09 16:15:35",
    password_last_time: '2020-01-09 16:15:35',
    password_expiration_time: "2020-01-09 16:15:35",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  },
  {
    id: 2,
    username: 'Guest',
    status: '禁用',
    description: `供来宾访问计算机或访问域的内置帐户`,
    local_group_members: "*Administrators *Guests",
    global_group_members: "	*None",
    last_login_time: "2020-01-09 16:15:35",
    password_last_time: '2020-01-09 16:15:35',
    password_expiration_time: "2020-01-09 16:15:35",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  }
];

const userInfoColumns: any = [
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: () => (
      <span>
        {'状态'}
        <SelectTable list={[0,getValue, ['全部', 11], ['启用', 12], ['禁用', 13]]} />
      </span>
    ),
    dataIndex: 'status',
    key: 'status',
    valueEnum: {
      启用: { text: '启用', status: 'Success' },
      禁用: { text: '禁用', status: 'Error' },
    }
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '本地组成员',
    dataIndex: 'local_group_members',
    key: 'local_group_members',
  }, {
    title: '全局组成员',
    dataIndex: 'global_group_members',
    key: 'global_group_members',
  },
  {
    title: '上次登录时间',
    dataIndex: 'last_login_time',
    key: 'last_login_time'
  },
  {
    title: '上次设置密码时间',
    dataIndex: 'password_last_time',
    key: 'password_last_time'
  },
  {
    title: '密码到期时间',
    dataIndex: 'password_expiration_time',
    key: 'password_expiration_time',
  },
  {
    title: '获取时间',
    dataIndex: 'get_time',
    key: 'get_time'
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
  }
];
//软件清单
const softwareListData: any = [
  {
    id: 1,
    name: 'Microsoft SQL Server Management Studio - 17.8.1',
    status: '启用',
    producer: `Microsoft Corporation`,
    version: "14.0.17277.0	",
    type: "-",
    size: "	3014MB",
    installation_path: '1',
    installation_time: "2020-01-09 16:15:35",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  },
  {
    id: 2,
    name: 'Guest',
    status: '禁用',
    producer: `Microsoft Corporation`,
    version: "14.0.23026.0",
    type: "-",
    size: "	3014MB",
    installation_path: '2',
    installation_time: "2020-01-09 16:15:35",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  }
];
//查看安装路径
const viewPath = (path: string) => {
  console.log(path)
}
const softwareListColumns: any = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: () => (
      <span>
        {'状态'}
        <SelectTable list={[0,getValue, ['全部', 11], ['启用', 12], ['禁用', 13]]} />
      </span>
    ),
    dataIndex: 'status',
    key: 'status',
    width: 80,
    valueEnum: {
      启用: { text: '启用', status: 'Success' },
      禁用: { text: '禁用', status: 'Error' },
    },
  },
  {
    title: '产商',
    dataIndex: 'producer',
    key: 'producer',
  },
  {
    title: '版本',
    dataIndex: 'version',
    key: 'version',
  }, {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '大小',
    dataIndex: 'size',
    key: 'size'
  },
  {
    title: '安装路径',
    dataIndex: 'installation_path',
    key: 'installation_path',
    width: 100,
    render: () => { },
  }, {
    title: '安装时间',
    dataIndex: 'installation_time',
    key: 'installation_time',
    colSpan: 1
  },
  {
    title: '获取时间',
    dataIndex: 'get_time',
    key: 'get_time',
    colSpan: 1
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
    colSpan: 1
  }
];
//监听端口
const listeningPortData: any = [
  {
    id: 1,
    ip: 'Microsoft SQL Server Management Studio - 17.8.1',
    port: '445',
    protocol: `udp`,
    version: "svchost.exe",
    status: '在线',
    risk: "存在风险",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  },
  {
    id: 2,
    ip: 'Guest',
    port: '55508',
    protocol: `udp`,
    process: "360rp.exe",
    status: '离线',
    risk: "安全",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  }
];

const listeningPortColumns: any = [
  {
    title: '绑定监听ip',
    dataIndex: 'ip',
    key: 'ip'
  },
  {
    title: '监听端口',
    dataIndex: 'port',
    key: 'port'
  },
  {
    title: '网络协议',
    dataIndex: 'protocol',
    key: 'protocol',
  },
  {
    title: '对应进程/PID',
    dataIndex: 'process',
    key: 'process',
  }, {
    title: () => (
      <span>
        {'状态'}
        <SelectTable list={[0,getValue, ['全部', 110], ['在线', 120], ['离线', 130]]} />
      </span>
    ),
    dataIndex: 'status',
    key: 'status',
    valueEnum: {
      在线: { text: '在线', status: 'Success' },
      离线: { text: '离线', status: 'Error' },
    }
  }, {
    title: () => (
      <span>
        {'风险'}
        <SelectTable list={[1,getValue, ['全部', 112], ['存在风险', 120], ['安全', 132]]} />
      </span>
    ),
    dataIndex: 'risk',
    key: 'risk',
    valueEnum: {
      存在风险: { text: '存在风险', status: 'Error' },
      安全: { text: '安全', status: 'Success' },
    }
  },
  {
    title: '获取时间',
    dataIndex: 'get_time',
    key: 'get_time',
    colSpan: 1
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
    colSpan: 1
  }
];
//运行进程
const runningProcessData: any = [
  {
    id: 1,
    process_id: 'Microsoft SQL Server Management Studio - 17.8.1',
    process_name: '445',
    process_path: `udp`,
    md5: "svchost.exe",
    status: '终止',
    detail: "存在风险",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  },
  {
    id: 2,
    process_id: 'Guest',
    process_name: '55508',
    process_path: `udp`,
    md5: "360rp.exe",
    status: '运行',
    detail: "安全",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  }
];

const runningProcessColumns: any = [
  {
    title: '进程ID',
    dataIndex: 'process_id',
    key: 'process_id'
  },
  {
    title: '进程名',
    dataIndex: 'process_name',
    key: 'process_name'
  },
  {
    title: '进程路径',
    dataIndex: 'process_path',
    key: 'process_path',
  },
  {
    title: '文件md5',
    dataIndex: 'md5',
    key: 'md5',
  }, {
    title: '进程状态',
    dataIndex: 'status',
    key: 'status',
    valueEnum: {
      终止: { text: '终止', status: 'Error' },
      运行: { text: '运行', status: 'Success' },
    }
  }, {
    title: '启动详情',
    dataIndex: 'detail',
    key: 'detail',
    width: 100,
    render: () => { },
  },
  {
    title: '获取时间',
    dataIndex: 'get_time',
    key: 'get_time',
    colSpan: 1
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
    colSpan: 1
  }
];
//运行服务
const runningServiceData: any = [
  {
    id: 1,
    IP: 'Microsoft SQL Server Management Studio - 17.8.1',
    service_name: '445',
    service_status: `udp`,
    service_type: "svchost.exe",
    start_type: '在线',
    file_path: "存在风险",
    display_name: "1",
    description: "2",
    group_name: "3",
    service_user: "4",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  },
  {
    id: 2,
    IP: 'Guest',
    service_name: '55508',
    service_status: `udp`,
    service_type: "360rp.exe",
    start_type: '在线',
    file_path: "安全",
    display_name: "5",
    description: "6",
    group_name: "7",
    service_user: "8",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  }
];

const runningServiceColumns: any = [
  {
    title: '服务器IP(内网/外网)',
    dataIndex: 'IP',
    key: 'IP'
  },
  {
    title: '服务名称',
    dataIndex: 'service_name',
    key: 'service_name'
  },
  {
    title: '服务状态',
    dataIndex: 'service_status',
    key: 'service_status',
  }, {
    title: '服务类型',
    dataIndex: 'service_type',
    key: 'service_type',
  },
  {
    title: '启动类型',
    dataIndex: 'start_type',
    key: 'start_type',
  }, {
    title: '文件路径',
    dataIndex: 'file_path',
    key: 'file_path'
  }, {
    title: '显示名称',
    dataIndex: 'display_name',
    key: 'display_name',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  }, {
    title: '组名称',
    dataIndex: 'group_name',
    key: 'group_name'
  }, {
    title: '服务所属用户',
    dataIndex: 'service_user',
    key: 'service_user'
  },
  {
    title: '获取时间',
    dataIndex: 'get_time',
    key: 'get_time',
    colSpan: 1
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
    colSpan: 1
  }
];
//web站点
const webSiteData: any = [
  {
    id: 1,
    domain_name: '-',
    port: '445',
    operating_system: `Microsoft Windows Server 2012 R2	`,
    server: "IIS",
    title: '-',
    site_path: "D:\www\WHJHAdmin",
    log_path: "-",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  },
  {
    id: 2,
    domain_name: '-',
    port: '55508',
    operating_system: `Microsoft Windows Server 2012 R2	`,
    server: "IIS",
    title: '-',
    site_path: "-",
    log_path: "-",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  }
];

const webSiteColumns: any = [
  {
    title: '域名',
    dataIndex: 'domain_name',
    key: 'domain_name'
  },
  {
    title: '端口号',
    dataIndex: 'port',
    key: 'port'
  },
  {
    title: '操作系统',
    dataIndex: 'operating_system',
    key: 'operating_system',
  }, {
    title: '应用服务器',
    dataIndex: 'server',
    key: 'server',
  },
  {
    title: '应用标题',
    dataIndex: 'title',
    key: 'title',
  }, {
    title: '网站路径',
    dataIndex: 'site_path',
    key: 'site_path'
  }, {
    title: '日志路径',
    dataIndex: 'log_path',
    key: 'log_path',
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
];
//数据库信息
const databaseInfoData: any = [
  {
    id: 1,
    name: 'Guest',
    type: '55508',
    version: `udp`,
    port: "360rp.exe",
    install_path: '在线',
    aystem_log_path: "安全",
    error_log_path: "5",
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:35",
  },
  {
    id: 2,
    name: '数据库名称',
    type: '类型',
    version: `版本`,
    port: "端口",
    install_path: '安装路径',
    aystem_log_path: "系统日志路径",
    error_log_path: "错误日志路径",
    get_time: "获取时间",
    update_time: "更新时间",
  }
];

const databaseInfoColumns: any = [
  {
    title: '数据库名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: '版本',
    dataIndex: 'version',
    key: 'version',
  }, {
    title: '端口',
    dataIndex: 'port',
    key: 'port',
  },
  {
    title: '安装路径',
    dataIndex: 'install_path',
    key: 'install_path',
  }, {
    title: '系统日志路径',
    dataIndex: 'aystem_log_path',
    key: 'aystem_log_path'
  }, {
    title: '错误日志路径',
    dataIndex: 'error_log_path',
    key: 'error_log_path',
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
];
//日志信息
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
    title: () => (
      <span>
        {'事件等级'}
        <SelectTable list={[0,getValue, ['全部', 110], ['信息', 120], ['错误', 130], ['警告', 120], ['提醒', 140]]} />
      </span>
    ),
    dataIndex: 'level',
    key: 'level',
    valueEnum: {
      信息: { text: '信息', status: 'Default' },
      错误: { text: '错误', status: 'info' },
      警告: { text: '警告', status: 'Warning' },
      提醒: { text: '提醒', status: 'Success' },
    }
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
//补丁信息
const patchInfoData: any = [
  {
    id: 1,
    name: 'Guest',
    patch_num: '55508',
    level: `udp`,
    status: "360rp.exe",
    link: '-',
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:30"
  },
  {
    id: 2,
    name: '补丁名称',
    patch_num: '补丁号',
    level: '等级',
    status: "状态",
    link: '支持链接',
    get_time: "获取时间",
    update_time: "更新时间"
  }
];

const patchInfoColumns: any = [
  {
    title: '补丁名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '补丁号',
    dataIndex: 'patch_num',
    key: 'patch_num'
  },
  {
    title: '等级',
    dataIndex: 'level',
    key: 'level',
    filters: true,
    onFilter: true,
    width: 120,
    valueEnum: {
      低危: { text: '低危', status: 'Success' },
      中危: { text: '中危', status: 'Default' },
      高危: { text: '高危', status: 'Warning' },
      严重: { text: '严重', status: 'Error' },
    }
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    filters: true,
    onFilter: true,
    width: 120,
    valueEnum: {
      未安装: { text: '未安装', status: 'Default' },
      已安装: { text: '已安装', status: 'Success' },
    }
  }, {
    title: '支持链接',
    dataIndex: 'link',
    key: 'link',
    width: 100,
    render: () => { },
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
];
//共享文件
const sharedFileData: any = [
  {
    id: 1,
    share_name: 'Guest',
    share_list: '55508',
    annotation: `udp`,
    get_time: "2020-01-09 16:15:35",
    update_time: "2020-01-09 16:15:30"
  },
  {
    id: 2,
    share_name: '共享名',
    share_list: '共享目录',
    annotation: '注解',
    get_time: "获取时间",
    update_time: "更新时间"
  }
];

const sharedFileColumns: any = [
  {
    title: '共享名',
    dataIndex: 'share_name',
    key: 'share_name'
  },
  {
    title: '共享目录',
    dataIndex: 'share_list',
    key: 'share_list'
  },
  {
    title: '注解',
    dataIndex: 'annotation',
    key: 'annotation'
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