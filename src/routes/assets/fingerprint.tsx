import React, { useState }from 'react'
import { Tabs,Button } from 'antd';
import SearchForm from '../../components/table/search';
import TableOptional from '../../components/table/TableOptional'

import './index.scss'

const { TabPane } = Tabs;

export default function FingerprintDetail() {
  const [data, setData] = useState([])
  const [info, setInfo] = useState({columns:[],columnsMap:{},ifExpand:false})
  //列表相关
  let columnsStateMap = {}
    const callback = (key:string) => {
        console.log(key);
        if(key==="用户信息"){
          setData(userInfoData)
          columnsStateMap={
            password_last_time: {
                show: false,
                order: 2,
            }, password_expiration_time: {
                show: false,
                order: 2,
            }, get_time: {
                show: false,
                order: 2,
            }
        }
          setInfo({columns:userInfoColumns,columnsMap:columnsStateMap,ifExpand:false})
        }else if(key==="软件清单"){
          setData(softwareListData)
          columnsStateMap={
            type: {
                show: false,
                order: 2,
            },get_time: {
                show: false,
                order: 2,
            }
        }
          setInfo({columns:softwareListColumns,columnsMap:columnsStateMap,ifExpand:true})
        }
      }
      //换页
      const changeSize=(value:any)=>{
        console.log(value)
        }

      let advancedTable = {
        count: 11,//条数
        columns: info.columns,
        data: data,
        columnsStateMap: info.columnsMap,
        changeSize: changeSize,
        selectedChange: null,
        ifRowSelection:false,
        ifExpand:info.ifExpand
    }
    //查询接口
    const searchCondition =(val:any)=>{
      console.log(val)
    }
    
    //引用查询条件
    let userInfo={inputList:[{placeholder:"用户名/shell",label:"用户搜索",name:"keyword"}],searchCondition:searchCondition}
      
    return(
        <Tabs defaultActiveKey="用户信息" onChange={callback} className="detail">
    <TabPane tab="用户信息" key="用户信息">
      <SearchForm data={userInfo}/>
      <TableOptional props={advancedTable} />
    </TabPane>
    <TabPane tab=" 软件清单" key="软件清单">
    <TableOptional props={advancedTable} />
    </TabPane>
    <TabPane tab="监听端口" key="监听端口">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="运行进程" key="运行进程">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab=" 运行服务" key="运行服务">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab=" web站点" key="web站点">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="数据库信息" key="数据库信息">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="日志信息" key="日志信息">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="补丁信息" key="补丁信息">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab=" 共享文件" key="共享文件">
      Content of Tab Pane 2
    </TabPane>
  </Tabs>
    )
}

const userInfoData:any = [
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
const userInfoColumns:any = [
  {
      title: '用户名',
      dataIndex: 'username',
      key: 'username'
  },
  {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: true,
      onFilter: true,
      width: 80,
      valueEnum: {
          启用: { text: '启用', status: 'Default' },
          禁用: { text: '禁用', status: 'Success' },
      },
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
const softwareListData:any = [
  {
      id: 1,
      name: 'Microsoft SQL Server Management Studio - 17.8.1',
      status: '启用',
      producer: `Microsoft Corporation`,
      version: "14.0.17277.0	",
      type: "-",
      size: "	3014MB",
      installation_path: '2020-01-09 16:15:35',
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
      installation_path: '2020-01-09 16:15:35',
      installation_time: "2020-01-09 16:15:35",
      get_time: "2020-01-09 16:15:35",
      update_time: "2020-01-09 16:15:35",
  }
];
//查看安装路径
const viewPath=(path:string)=>{
        console.log(path)
}
const softwareListColumns:any = [
  {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
  },
  {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: true,
      onFilter: true,
      width: 80,
      valueEnum: {
          启用: { text: '启用', status: 'Default' },
          禁用: { text: '禁用', status: 'Success' },
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
      colSpan: 2,
      render: () => {},
  },{
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