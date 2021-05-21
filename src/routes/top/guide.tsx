import React, { useState, useEffect } from 'react'
import { Anchor, Layout, Image } from 'antd';
import './index.scss';

const { Link } = Anchor;
const { Sider, Content } = Layout;
export default function Guide() {
    return (
        <Layout className="guideIndex">
            <Sider style={{ background: "#fff", position: "fixed", width: "200px", height: "100%" }}><div>
                <Anchor affix={false} targetOffset={80}>
                    <Link href={"#content-details"} title="1、产品简介" />
                    <Link href="#content-problem" title="2、快速入门">
                        <Link href="#content-problem-first" title="2.1开通" />
                        <Link href="#content-problem-second" title="2.2系统操作简介" />
                    </Link>
                    <Link href="#content-installation" title="3、用户指南">
                        <Link href="#content-installation-first" title="3.1主机安全Agent插件 ">
                            <Link href="#content-installation-third" title="3.1.2主机安全Agent安装" />
                            <Link href="#content-installation-third" title="3.1.3主机安全Agent卸载" />
                        </Link>
                        <Link href="#content-installation-second" title="3.2仪表盘" />
                        <Link href="#content-installation-third" title="3.3资产列表" />
                        <Link href="#content-installation-fourth" title="3.4漏洞管理" />
                        <Link href="#content-installation-fifth" title="3.5基线检查" />
                        <Link href="#content-installation-sixth" title="3.6主机异常" />
                        <Link href="#content-installation-fourth" title="3.7网站后门" />
                        <Link href="#content-installation-fifth" title="3.8异常登陆" />
                        <Link href="#content-installation-sixth" title="3.9暴力破解" />
                        <Link href="#content-installation-fifth" title="3.10资产管理" />
                    </Link>
                    <Link href="#content-installation" title="4、服务条款">
                        <Link href="#content-installation-first" title="4.1用户协议" />
                            <Link href="#content-installation-third" title="4.2定义" />
                            <Link href="#content-installation-third" title="4.3产品费用" />
                        <Link href="#content-installation-second" title="4.4账户须知" />
                        <Link href="#content-installation-third" title="4.5使用须知" />
                        <Link href="#content-installation-fourth" title="4.6用户权利与义务" />
                        <Link href="#content-installation-fifth" title="4.7安识科技权利与义务" />
                        <Link href="#content-installation-sixth" title="4.8隐私保护" />
                        <Link href="#content-installation-fourth" title="4.9知识产权" />
                        <Link href="#content-installation-fifth" title="4.10不可抗力及系统故障" />
                        <Link href="#content-installation-sixth" title="4.11责任范围及责任限制" />
                        <Link href="#content-installation-fifth" title="4.12法律适用及争议解决" />
                        <Link href="#content-installation-sixth" title="4.13其他" />
                    </Link>
                </Anchor></div></Sider>
            <Content>
                <div id="content">
                <h1 id="guide-title">使用指南</h1>
                    <div id="content-problem-first">
                        <h2>1、产品简介</h2>
                        <div className="answer">
                            <p>主机安全Agent提供试用功能，您可以通过试用体验主机安全Agent为您的服务器带来的强大防护能力。</p>
                            <Image width={300} src="/images/help/question11.png" alt="安装问题" />
                            <p>开通步骤：</p>
                            <p>1. 注册登录平台。</p>
                            <p>2. 左侧菜单栏选择产品，点击“开通阿波罗主机安全云平台”按钮。</p>
                        </div>
                    </div>
                    <div id="content-problem-second">
                    <h2>2、快速入门</h2>
                        <h4>2.1开通</h4>
                        <div className="answer">
                            <p>阿波罗主机安全云平台，为您提供 Web漏洞检测；linux软件漏洞；基线检查；异常登录；暴力破解告警；网站后门检测；本地提取，反弹shell等主机异常检测功能保障您的服务器安全。</p>
                            <p>开通步骤</p>
                            <p>1. 注册阿波罗主机安全云平台。</p>
                            <p>2. 左侧菜单栏选择产品，点击“开通阿波罗主机安全云平台”按钮。</p>
                            <p>3. 审核通过，进行使用。</p>
                        </div>
                    </div>
                    <div id="content-problem-third">
                        <h4>2.2系统操作简介</h4>
                        <div className="answer">
                            <p>1. 注册登录阿波罗主机安全云平台。</p>
                            <p>2. 开通阿波罗主机安全云平台。</p>
                            <p>3. 按照安装界面提示，为您想要防护的服务器安装阿波罗主机安全Agent。</p>
                            <p>4. 阿波罗主机安全Agent安装成功后，您可在阿波罗总览页面查看您当前所有已安装Agent的服务器安全状态，包括 待处理事件、Agent状态、近期系统弱点趋势（漏洞和基线风险）、及最近入侵事件趋势。</p>
                            <p><span className="bold">资产列表</span> 页面，查看您当前已安装Agent的服务器的安全状态明细，您也可以对您的服务器资产进行分组、管理。详细功能介绍，请参考<a href="/">资产列表</a>功能介绍。</p>
                            <p><span className="bold">漏洞管理</span> 页面，查看您服务器上的web漏洞及系统软件漏洞，并可自定义检测扫描方式。详细功能介绍，请参考漏洞管理功能介绍。</p>
                            <p><span className="bold">基线检查</span> 页面，查看阿波罗检测到您服务器上的配置风险项，并可自定义检测扫描方式。详细功能介绍，请参考 <a href="/">基线检查</a> 功能介绍。</p>
                            <p><span className="bold">异常登录</span> 页面，查看您服务器上的已设置正常登录以外的非正常登录记录，并可自定义正常登陆时间/IP/域名/账号等属性。详细功能介绍，请参考 <a href="/">异常登录</a> 功能介绍。</p>
                            <p><span className="bold">网站后门</span> 页面，查看并处理在您服务器检测到的 Webshell 木马文件。并可自定义检测扫描方式。详细功能介绍，请参考 <a href="/">网站后门</a> 功能介绍。</p>
                            <p><span className="bold">主机异常</span> 页面，查看并处理在您服务器的异常进程，可疑文件，恶意文件和服务器内存cpu的异常问题。可发现本地提权，反弹shell，勒索病毒，挖矿木马等安全事件。检测详细功能介绍，请参考 主机异常 功能介绍。</p>
                            <p><span className="bold">暴力破解</span> 页面，查看并处理在您服务器检测到的暴力破解事件。并可自定义暴力破解阈值，详细功能介绍，请参考 <a href="/">暴力破解</a> 功能介绍。</p>
                            <p><span className="bold">警告设置</span> 页面，系统扫描或检测到相关安全问题，可进行设置通知相关人员。详细功能介绍，请参考 警告设置 功能介绍。</p>
                        </div>
                    </div>
                    <div id="content-problem-fourth">
                        <h2>3、用户指南</h2>
                        <h4>3.1 主机安全Agent插件</h4>
                        <div className="answer">

                            <h5>3.1.1 主机安全Agent说明</h5>
                            <p className="bold">工作原理:</p>
                            <p>阿波罗 Agent 扫描引擎实时检测所配置的服务器信息。对于相关管理项目按照客户设置的扫描或检测方式进行警告。如果阿波罗 Agent 没有按时上报在线信息，则自动开启守护进程，扫描引擎进行重启。</p>
                            <p className="bold">相关进程:</p>
                            <p>阿波罗 Agent 包含以下两个主要进程：</p>
                            <p>说明： 阿波罗 Agent 的进程在 Linux 系统的服务器上以 root 帐号运行。</p>
                            <p>进程文件所在路径：Linux 系统： /usr/local/Apollo_IDS/agent_client/</p>
                            <p>此进程主要用于定期检测阿波罗Agent是否需要升级。</p>
                            <p>进程文件所在路径：Linux 系统：/usr/local/Apollo_IDS/agent_client/shell</p>
                            <h6>3.1.1.1 资源占用</h6>
                            <p>阿波罗 Agent 仅占用您的服务器非常少的资源：阿波罗 Agent 占用不超过 20% CPU 及 10 MB 内存。</p>

                            <h5>3.1.2 主机安全Agent安装</h5>
                            <p className="bold">注意事项:</p>
                            <p>当前版本支持Centos系列操作系统和Ubuntu操作系统。</p>
                            <p>系统可执行curl命令。</p>
                            <p>确认系统环境是否支持客户端的运行，能够与linkage.duoyinsu.com服务器保持通信。</p>
                            <p>系统可执行curl命令；系统装有pip管理包, 可执行pip命令；系统装有python2.x, 并已安装python-devel、gcc。</p>
                            <p className="bold">安装步骤:</p>
                            <p>1. 登录阿波罗主机安全云平台。</p>
                            <p>2. 单击主机安全Agent，开通使用后，进入<a href="/">安装详情</a>界面。 </p>
                            <p>3. 根据您的服务器操作系统选择安装步骤，获取最新版本主机安全 Agent 插件。</p>
                            <p className="bold">Linux 系统:</p>
                            <p>1. 以管理员身份登录您的 Linux 服务器。</p>
                            <p>2. 根据您的服务器，选择32位或64位的安装命令并复制至您的 Linux 服务器上。</p>
                            <p>3. 执行安装命令即可完成主机安全Agent插件的安装。</p>
                            <p>4. 主机安全Agent插件安装完成约五分钟后，您即可在主机安全Agent中查看您服务器的在线情况：被安装的服务器将会被添加至您的资产列表中。</p>
                            <h6>3.1.2.1 主机安全Agent插件文件目录</h6>
                            <p>Linux： /usr/local/Apollo_IDS/agent_client/</p>

                            <h5>3.1.3 主机安全Agent卸载</h5>
                            <p>如果您决定不再使用主机安全Agent服务的所有功能，主机安全Agent。请您在安装详情页进行相关操作。</p>
                        </div>
                    </div>
                    <div id="content-problem-fifth">
                        <h4>Q5.如何处置webshell文件?</h4>
                        <div className="answer">
                            <p>登录阿波罗主机安全控制台-安全事件-<a href="/agent/incidents/web_shell_page" className="blue">网站后门</a>，
              即可查看服务器上存在的webshell文件情况，如下图所示。可通过控制台下载进行判断，若确认文件是恶意的，可以对单个文件进行隔离。
            </p>
                            <Image width={300} src="/images/help/question11.png" alt="安装问题" />
                        </div>
                    </div>
                    <div id="content-problem-sixth"><h4>Q6.未能成功检测出木马（漏报）如何解决?</h4>
                        <div className="answer">
                            <p>若发现有未检测出来的木马文件，请拨打电话<span className="blue">021-3332 8652</span>或发邮件到<a href="Mailto:hi@duoyinsu.com" className="blue">hi@duoyinsu.com</a>联系我们技术团队，我们会为尽快为您鉴定处理。</p>
                        </div>
                    </div>
                    <div id="content-installation">安装问题</div>
                    <div id="content-installation-first"><h4>1. 在您安装agent的过程中，出现 ImportError: No module named psutil的错误提示，如下图所示:</h4>
                        <div className="answer">
                            <Image width={300} src="/images/help/question1.png" alt="安装问题" />
                            <p>报错原因：这是因为python的第三方依赖包psutil未安装成功。</p>
                            <p>解决方法：重新安装依赖包psutil。</p>
                            <p>执行命令：pip install psutil</p>
                        </div>
                    </div>
                    <div id="content-installation-second"><h4>2. 在您安装agent的过程中，出现：“Command ’python setup.py egg_info’ failed with error code 1”的错误提示 ，如下图所示:</h4>
                        <div className="answer">
                            <Image width={300} src="/images/help/question2.png" alt="安装问题" />
                            <p>报错原因：您当前的python版本和pip版本不匹配。</p>
                            <p>解决方法：重新安装依赖包psutil。</p>
                            <p>执行命令：pip install --upgrade setuptools</p>
                            <p className="code">pip install --upgrade setuptools</p>
                        </div>
                    </div>
                    <div id="content-installation-third"><h4>3. 在您安装agent的过程中，只出现‘agent is start failed’错误提示，如下图所示:</h4>
                        <div className="answer">
                            <Image width={300} src="/images/help/question3.png" alt="安装问题" />
                            <p>解决方法：agent已经安装成功，无需做其他操作。</p>
                        </div>
                    </div>
                    <div id="content-installation-fourth"><h4>4. 在您安装agent的过程中，提示:“-bash:/usr/local/Apollo_IDS/agent_client/ApolloIDS: Permission denied” ，如下图所示:</h4>

                        <div className="answer">
                            <Image width={300} src="/images/help/question4.png" alt="安装问题" />
                            <p>报错原因：agent中的启动文件没有执行权限。</p>
                            <p>解决方法：需要给ApolloIDS以执行权限。</p>
                            <p>执行命令：chmod 755 /usr/local/Apollo_IDS/agent_client/ApolloIDS</p>
                        </div></div>
                    <div id="content-installation-fifth"><h4>5. 在执行agent安装命令的时候，提示“-bash : curl : command not found”,如下图所示:</h4>

                        <div className="answer">
                            <Image width={300} src="/images/help/question5.png" alt="安装问题" />
                            <p>报错原因：未安装curl，agent需要通过该命令下载安装包。</p>
                            <p>解决方法：先安装curl,执行curl -V可以看到版本信息,再执行agent安装命令。</p>
                            <p>执行命令：wget http://curl.haxx.se/download/curl-7.20.0.tar.gz</p>
                            <p className="code">tar -zxf curl-7.20.0.tar.gz &amp;&amp;</p>
                            <p className="code">cd curl-7.17.1 &amp;&amp;</p>
                            <p className="code">./configure --prefix=/usr/local/curl &amp;&amp; make</p>
                        </div></div>
                    <div id="content-installation-sixth"><h4>6. 在您使用LinuxKali 安装agent的过程中，出现Requirement already up-to-date: pip in /usr/local/lib/python2.7/dist-packages (19.0.3) 的错误提示，如下图所示：</h4>

                        <div className="answer">
                            <Image width={300} src="/images/help/question6.png" alt="安装问题" />
                            <p>报错原因：pip-19.0.3.dist-info文件存在导致pip 升级不成功。</p>
                            <p>解决方法：删除python/Lib路径中pip-19.0.3.dist-info文件夹。</p>
                            <p>执行命令：cd /usr/local/lib/python2.7/dist-packages</p>
                            <p className="code">sudo rm -rf pip-19.0.3.dist-info</p>
                            <p className="code">sudo python -m pip install --upgrade pip</p>
                        </div></div>
                </div>
            </Content>
        </Layout>
    )
}