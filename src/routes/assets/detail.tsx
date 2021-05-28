import { Tabs, Card } from 'antd';
import './index.scss'
import Bar from '../../components/echart/bar';
import Line from '../../components/echart/line';

const { TabPane } = Tabs;

export default function AssetsDetail() {
    const callback = (key:string) => {
        console.log(key);
      }
      let data={
        xdata: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        ydata: [120, 200, 150, 80, 70, 110, 130]
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
      <Bar data={data}/>
      </div>
  </div>
  <div className="detail-monitor">
  <p className="detail-list-title">监控信息</p>
  <Card>
    <Line/>
  </Card>
  <Card>
  出入网
  </Card>
  <Card>
  内存
  </Card>
  <Card>
  磁盘
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