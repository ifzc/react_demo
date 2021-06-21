import { useState } from 'react';
import { Card, Radio, Button, Space, Input, Image } from 'antd';
import { Link } from 'react-router-dom'
import './index.scss'
const { Search } = Input;

export default function InstallUninstall() {
    const [installLinux, setInstallLinux] = useState(true)
    const [unInstallLinux, setUninstallLinux] = useState(true)

    const onChangeRadio = (e: any) => {
        console.log(e.target.value)
        if (e.target.value === 0) {
            setInstallLinux(true)
        }else{
            setInstallLinux(false)
        }
    }
    const onChangeRadioUninstall = (e: any) => {
        console.log(e.target.value)
        if (e.target.value === 0) {
            setUninstallLinux(true)
        }else{
            setUninstallLinux(false)
        }
    }

    const onSearch = () => {
        var input: any = document.getElementById("input");
        input.select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
    }

    const onSearchUninstall = () => {
        var input: any = document.getElementById("inputUninstall");
        input.select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
    }

    return (
        <div>
            <Card title="安装配置" className="install">
                <div>
            <Radio.Group defaultValue={0} buttonStyle="solid" onChange={onChangeRadio}>
                            <Radio.Button value={0}>linux</Radio.Button>
                            <Radio.Button value={1}>windows</Radio.Button>
                        </Radio.Group>
                {installLinux ?
                <div className="install-linux">
                    <ul className="install-list">
                        <li><span></span><span>当前版本支持Centos系列操作系统和Ubuntu操作系统。</span></li>
                        <li><span></span><span>系统可执行curl命令。</span></li>
                        <li><span></span><span>确认系统环境是否支持客户端的运行，能够与linkage.duoyinsu.com服务器保持通信。</span></li>
                        <li><span></span><span>系统可执行curl命令；系统装有pip管理包, 可执行pip命令；系统装有python2.x, 并已安装python-devel、gcc。</span></li>
                    </ul>
                    <Search onSearch={onSearch} maxLength={200} enterButton="复制" id="input" value="curl -s -L 'http://139.217.130.227/api/agent/install'?token=token|sudo bash" />
                </div>
                :
                <div>
                    <p style={{marginTop:"15px"}}><Link to="/assets">点击这里</Link>，下载Apollo-Setup.exe安装包，双击安装包，按以下步骤执行即可。</p>
                    <p className="step">step1：点击安装</p>
                    <Image width={502} src="/images/install/install0.png" />
                    <p className="step">step2：点击我接受</p>
                    <Image width={502} src="/images/install/install1.png" />
                    <p className="step">step3：输入您的token值（xW9iZb8dvlev1fVA）并安装</p>
                    <Image width={502} src="/images/install/install2.png" />
                    <p className="step">step4：点击完成</p>
                    <Image width={502} src="/images/install/install3.png" />
                </div>
}
                <p style={{marginTop:"20px"}}>安装成功后，等待大约3-5分钟可在资产列表中查看到，<Link to="/assets">立即查看</Link></p>
                </div>
            </Card>
            <Card title="卸载" className="uninstall">
                <div>
            <Radio.Group defaultValue={0} buttonStyle="solid" onChange={onChangeRadioUninstall}>
                            <Radio.Button value={0}>linux</Radio.Button>
                            <Radio.Button value={1}>windows</Radio.Button>
                        </Radio.Group>
                {unInstallLinux ? 
                <div>
                    <p>如需卸载,请在您的服务器中以管理员权限执行以下命令进行安装。卸载后服务器如需安装主机安全agent，需再次执行安装操作流程。</p>
                    <Search onSearch={onSearchUninstall} enterButton="复制" id="inputUninstall" value=" curl -s -L 'http://139.217.130.227/api/agent/uninstall'?token=token|sudo bash" />
                </div>:
                <p>如需卸载,请在 “控制面板 `{'>'}`程序” 中找到 “ApolloIDS_Agent” 右键卸载即可。卸载后服务器如需安装主机安全Apollo，需再次执行安装操作流程。</p>
}
</div>
            </Card>
        </div>
    )
}