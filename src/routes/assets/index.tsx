import { useState, useEffect } from 'react';
import { Tooltip, Button, Form, Card, Input,Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import TableOptional from '../../components/table/TableOptional'
import TagGroup from '../../components/table/Tag'
import ModalFrom from '../../components/userFrom/Modal'
import SelectTable from '../../components/table/SelectTable'
import {Link} from 'react-router-dom'
import axios from '../../utils/http'
const { Option } = Select;

let searchListForm = ''
let menuFirst = ""
let menuSecond = ""
let menuThird = ""

export default function AssetsTable() {
    const getValue = (i:number,n:any)=> {//i-第几个下拉选择 n-传给后端值
        console.log(i)
        if (i === 0) {
          menuFirst = n
        } else if (i === 1) {
          menuSecond = n
        }else{
            menuThird = n
        }
        getList()
      }
    const columns = [
        {
            title: '服务器名称',
            dataIndex: 'name',
            key: 'name',
            render: (name: string) => (
                <Tooltip placement="topLeft" title={name}>
                    {name}
                </Tooltip>
            ),
        },
        {
            title: '内网ip',
            dataIndex: 'inner_net',
            key: 'inner_net',
            render: (name: string) => (
                <Tooltip placement="topLeft" title={name}>
                    {name}
                </Tooltip>
            ),
        },
        {
            title: '外网ip',
            dataIndex: 'outer_net',
            key: 'outer_net',
            render: (name: string) => (
                <Tooltip placement="topLeft" title={name}>
                    {name}
                </Tooltip>
            ),
        },
        {
            title: '标签',
            dataIndex: 'label',
            key: 'label',
            render: (label:Array<string>, record: any, index: number) => [
              label.length==0 ? <EditOutlined onClick={() => addAssetsTag('编辑标签', false, record.id)} /> :
              <div className="span-round">
              {
                label.map((item: any) => {
                  return <span>{item}</span>
                })
              } 
              </div>
            ]
        },
        {
            title: '负责人',
            dataIndex: 'person',
            key: 'person',
            render: (person:Array<string>, record: any, index: number) => [
              person.length==0 ? <EditOutlined onClick={() => addAssetsTag('编辑负责人', false, record.id)} /> :
              <div className="span-round">
              {
                person.map((item: any) => {
                  return <span>{item}</span>
                })
              } 
              </div>
            ]
        },
        {
            title: '地域',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: () => (
                <span>
                  {'状态'}
                  <SelectTable list={[0,getValue, ['全部', ""], ['在线', "1"], ['离线', "0"]]} />
                </span>
              ),
            dataIndex: 'host_status',
            key: 'host_status',
            width: 100,
            render: (text:number) =>{
              if (text===1) {
              return <span>在线</span>
            }else{
              return <span>离线</span>
            }
          },
        },
        {
            title: () => (
            <span>
              {'网络'}
              <SelectTable list={[1,getValue, ['全部', ""], ['公网', "1"], ['内网', "0"]]} />
            </span>
          ),
            dataIndex: 'net_status',
            key: 'net_status',
            width: 100,
            render: (text:number) => {
              if (text===1) {
                return <span>公网</span>
              }else{
                return <span>内网</span>
              }
            },
        },
        {
            title: () => (
                <span>
                  {'系统'}
                  <SelectTable list={[2,getValue, ['全部', ""], ['windows', "0"], ['linux', "1"]]} />
                </span>
              ),
            dataIndex: 'system',
            key: 'system',
            render: (text:any) => {
              if (text===1) {
                return <span>linux</span>
              }else{
                return <span>windows</span>
              }
            },
        },
        {
            title: '操作',
            width: 180,
            key: 'option',
            valueType: 'option',
            render: (text:string, record:any, index:number) => [
                <Button type="primary" size="small"><Link to={'/asset/detail/?id='+record.id+'&type='+record.system}>查看</Link></Button>
            ],
        },
        {
            title: '注册时间',
            dataIndex: 'create_time',
            key: 'create_time',
        },
        {
            title: 'agent版本',
            dataIndex: 'agent_version',
            key: 'agent_version',
        }, {
            title: '主机类型',
            dataIndex: 'host_type',
            key: 'host_type',
        },
    ];

    const [visible, setVisible] = useState(false)
    const [fromType, setFromType] = useState("编辑标签")
    const [clickNum, setClickNum] = useState(0)
    const [buttonD, setButtonD] = useState(true)
    const [already, setAlready] = useState([''])
    const [add, setAdd]:any = useState({list:[],type:""})
    const [history, setHistory] = useState([''])
    const [editId,setId] = useState([0])
    const [form] = Form.useForm();
    const [formModal] = Form.useForm();
    const [type,setType] =useState("标签")
    const [dataList, setDataList] = useState([])//列表数据
    const [assemblyList, setAssemblyList] = useState([""])//组件数据
    const [selectedId, setSelectedId] = useState([0])//选中idHistoricalLabel
    const [label, setLabel] = useState({label:[""],allLabel:[""]})//标签信息
    const [person, setPerson] = useState({person:[""],allPerson:[""]})//负责人信息

    let searchValue={}
    let sizeInfo={current:1,pageSize:10}

    //获取列表
    const getList = () =>{
        let list:any=searchValue
        list['net_status'] = menuFirst
        list['host_status'] = menuSecond
        list['system'] = menuThird
        list['page'] = sizeInfo.current.toString()
        list['per_page'] = sizeInfo.pageSize.toString()
        axios.get('/assets/host',{params:list}).then((res: any) => {
          if (res.data.status === "200") {
            setDataList(res.data.host_info)
          }
        })
      }
    //获取组件
      const getAssembly = () =>{
        axios.get('/assets/assembly').then((res: any) => {
          if (res.data.status === "200") {
            setAssemblyList(res.data.assembly_info)
            console.log(assemblyList)
          }
        })
      }
      
      function Example() {
        useEffect(() => {getList();getAssembly()}, []);
        return null;
      }
      Example()

      //获取标签
      const getLabel = () =>{
        let list:any=searchValue
        list['host_id_list'] = JSON.stringify(selectedId)
        list['net_status'] = menuFirst
        list['host_status'] = menuSecond
        list['system'] = menuThird
        axios.get('/assets/label',{params:list}).then((res: any) => {
          if (res.data.status === "200") {
            setLabel({label:res.data.label_list,allLabel:res.data.all_label_list})
            setAlready(res.data.label_list)
            setHistory(res.data.all_label_list)
            setAlreadyTag({tags:res.data.label_list,type:0,tagChange:tagChange})
            setHistoryTag({tags:res.data.all_label_list,type:2,tagChange:tagChange})
          }
        })
      }
      //获取负责人
      const getPerson = () =>{
        let list:any=searchValue
        list['host_id_list'] = JSON.stringify(selectedId)
        list['net_status'] = menuFirst
        list['host_status'] = menuSecond
        list['system'] = menuThird
        axios.get('/assets/assembly',{params:list}).then((res: any) => {
          if (res.data.status === "200") {
            setPerson({person:res.data.person_list,allPerson:res.data.all_person_list})
            setAlready(res.data.person_list)
            setHistory(res.data.all_person_list)
            setAlreadyTag({tags:res.data.person_list,type:0,tagChange:tagChange})
            setHistoryTag({tags:res.data.all_person_list,type:2,tagChange:tagChange})
          }
        })
      }
      ////添加标签 负责人
    const getFromValue = (value: any) => {
        console.log(already,add)
        let list:any=searchValue
        list['host_id_list'] = JSON.stringify(selectedId)
        list['net_status'] = menuFirst
        list['host_status'] = menuSecond
        list['system'] = menuThird
        if (fromType==="编辑标签") {
          list['add_label'] = add.list
          axios.post('/assets/label',list)
        }else{
          list['add_person'] = add.list
          axios.post('/assets/person',list)
        }
    }
    //编辑标签 负责人
    const addAssetsTag = (title: string, showTag: boolean,id:number) => {
        setSelectedId([id])
        if (!showTag) {//添加标签、负责人
            console.log(1)
            setAlready([""])
            setAdd({list:[""],type:""})
            setAlreadyTag({tags:[""],type:0,tagChange:tagChange})
            setAddTag({tags:[""],type:1,tagChange:tagChange})
            //setHistory(['Tage1', 'Tage2'])
        } else {
            console.log(2)
            setAdd({list:[""],type:""})
            setAddTag({tags:[""],type:1,tagChange:tagChange})
        }
        setClickNum(clickNum + 1)
        setVisible(true)
        setFromType(title);
        getLabel()
        getPerson()
    }
    const cancel = () => {
      setAlreadyTag({tags:[""],type:0,tagChange:tagChange})
      setAddTag({tags:[""],type:1,tagChange:tagChange})
      setHistoryTag({tags:[""],type:2,tagChange:tagChange})
    }
    //moder
    let madalValue = {
        clickNum: clickNum,
        visible: visible,
        fromType: fromType,
        from: formModal,
        getFromValue: getFromValue,
        cancel:cancel
    }
    //列表相关
    const columnsStateMap = {
        agent_version: {
            show: false,
            order: 2,
        }, host_type: {
            show: false,
            order: 2,
        }
    }
    const changeSize = (size:any) => {
        console.log("size", size)
        sizeInfo=size
        getList()
    }
    const selectedChange = (id: Array<number>, row: any) => {
        setSelectedId(id)
        console.log("q")
        if (id.length !== 0) {
            setButtonD(false)
            setId(id)
        } else {
            setButtonD(true)
        }
    }

    const selectedChangeAll = (all: Array<number>, row: any) => {
        console.log("all",all)
    }

    const tagChange = (tag:string,type:number,removedTag:string) =>{
        console.log(tag,type,removedTag,typeof removedTag,fromType)
        let list:any=searchValue
        list['host_id_list'] = JSON.stringify(selectedId)
        list['net_status'] = menuFirst
        list['host_status'] = menuSecond
        list['system'] = menuThird
        
        if(type === 0){
            //setAlready([tag])
            //setAlreadyTag({tags:[tag],type:0,tagChange:tagChange})
            if (removedTag) {
              list['delete_label'] = removedTag
              axios.delete('/assets/label',{params:list})
              }
        }else if(type === 1){
          setAdd({list:tag,type:"新增"})
          setAddTag({tags:[tag],type:1,tagChange:tagChange})
          /* if (removedTag) {
            list['delete_person'] = removedTag
            axios.delete('/assets/person',{params:list})
            } */
        }else{
          setAdd({list:tag,type:"历史"})
          setAddTag({tags:[tag],type:1,tagChange:tagChange})
        }
    }
    let optionalTransferInfo = {
        count: 11,
        columns: columns,
        data: dataList,
        columnsStateMap: columnsStateMap,
        changeSize: changeSize,
        selectedChange: selectedChange,
        selectedChangeAll:selectedChangeAll,
        ifRowSelection:true,
        selectedId:selectedId
    }
    //提交表单且数据验证成功后回调事件
  const onFinish = (values: any) => {
    console.log(values)
    searchValue=values
    getList()
  }
  const onReset = () => {
    form.resetFields();
  };
  function onChange(value:any) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val:any) {
    console.log('search:', val);
  }
//type 0:可删除不可添加，1：可删除可添加，2：不可删除不可添加
    //let alreadyTag={tags:already,type:0,tagChange:tagChange}
    //let addTag={tags:add.list,type:1,tagChange:tagChange}
    //let historyTag={tags:history,type:2,tagChange:tagChange}
    //console.log(alreadyTag,addTag,historyTag)
    const [alreadyTag, setAlreadyTag] = useState({tags:[""],type:0,tagChange:tagChange})
    const [addTag, setAddTag] = useState({tags:[""],type:1,tagChange:tagChange})
    const [historyTag, setHistoryTag] = useState({tags:[""],type:2,tagChange:tagChange})
    return (
            <Card title="资产列表">
                <Form
      layout='inline'
      form={form}
      onFinish={onFinish}
    >
 <Form.Item label="资产搜索：" name="keyword"><Input placeholder="服务器IP/名称" /></Form.Item>
 <Form.Item name="label"><Input placeholder="标签" /></Form.Item>
 <Form.Item name="person"><Input placeholder="负责人" /></Form.Item>
 <Form.Item name="assembly">
 <Select
    showSearch
    allowClear
    style={{ width: 200 }}
    placeholder="组件"
    optionFilterProp="label"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input:any, option:any) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {
        assemblyList.map((item: any) => {
          return <Option value={item}>{item}</Option>
        })
      }
  </Select></Form.Item>
 <Form.Item><Button type="primary" htmlType="submit">查询</Button></Form.Item>
<Form.Item><Button onClick={onReset}>重置</Button></Form.Item>
    </Form>
            <TableOptional props={optionalTransferInfo} />
            <div className="table-button">
                <Button disabled={buttonD} onClick={() => addAssetsTag('编辑标签', true,0)}>编辑标签</Button>
                <Button disabled={buttonD} onClick={() => addAssetsTag('编辑负责人', true,0)}>编辑负责人</Button>
                <Button disabled={buttonD}>导出报告</Button>
                <Button disabled={buttonD}>一键安全检查</Button>
            </div>
            <ModalFrom value={madalValue}>
                <Form
                    form={formModal}
                    name="form_in_modal"
                    className="labelFrom"
                >
                    <Form.Item label="● 当前资源已有标签(若选择多个资源则显示共有标签，删除只影响共有标签)" name="labelA"><TagGroup tags={alreadyTag} /></Form.Item>
                    <Form.Item label="● 新增标签" name="label"><TagGroup tags={addTag} /></Form.Item>
                    {fromType==="编辑标签" &&
                    <Form.Item label="● 历史标签" name="labelH"><TagGroup tags={historyTag} /></Form.Item>
    }
                </Form>
            </ModalFrom>
            </Card>
    )
}