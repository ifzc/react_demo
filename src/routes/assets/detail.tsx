import React, { useState }from 'react'
import { Tabs, Card,DatePicker, Button  } from 'antd';
import moment from 'moment';

import './index.scss'
import Bar from '../../components/echart/bar';
import Line from '../../components/echart/line';

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

export default function AssetsDetail() {
  const [lineXdata,setLineXdata]=useState([
    '2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00', '2009/6/12 12:00', '2009/6/12 13:00', '2009/6/12 14:00', '2009/6/12 15:00', '2009/6/12 16:00', '2009/6/12 17:00', '2009/6/12 18:00', '2009/6/12 19:00', '2009/6/12 20:00', '2009/6/12 21:00'])
    const callback = (key:string) => {
        console.log(key);
      }
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
        '最近一周': [moment().startOf('month'), moment().endOf('month')],
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
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="漏洞信息" key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="基线检查" key="4">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="弱密码检查" key="5">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="异常登录" key="6">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="暴力破解" key="7">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="网站后门" key="8">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="反弹shell" key="9">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="木马检测" key="10">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="可疑行为" key="11">
      Content of Tab Pane 2
    </TabPane>
  </Tabs>
    )
}