import React, { useState, useEffect } from 'react'
import { Anchor, Layout, Image } from 'antd';
import ListHelp from '../../components/help/list';
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
<div className="agent_introduce">
    {/* style="width:100%;text-align:center;font-size:30px;font-weight:700;line-height:120px;" */}
	<h1 id="titleh101">使用指南</h1>
	<h1>1、产品简介</h1>
	<p>主机安全Agent提供试用功能，您可以通过试用体验主机安全Agent为您的服务器带来的强大防护能力。</p>
	    <img src="https://www.secpulse.com/wp-content/uploads/2018/11/image65.png"/>
	<p>
	  开通步骤：
	</p>
	<p>1.注册登录平台。</p>
	<p id="titleh102">2.左侧菜单栏选择产品，点击“开通阿波罗主机安全云平台”按钮</p>
	<h1 id="titleh201" >2、快速入门</h1>
	<h2 >2.1开通 </h2>
	<p>阿波罗主机安全云平台，为您提供Web漏洞检测；linux软件漏洞；基线检查；异常登录；暴力破解告警；网站后门检测；本地提取，反弹shell等主机异常检测功能保障您的服务器安全。</p>
	<p>开通步骤：</p>
	<p>1.注册阿波罗主机安全云平台。</p>
	<p>2.左侧菜单栏选择产品，点击“开通阿波罗主机安全云平台”按钮。
	</p>
	<p id="titleh202" >3.审核通过，进行使用。</p>
	<h2>2.2系统操作简介</h2>
	<p>1.注册登录阿波罗主机安全云平台。</p>
	<p>2.开通阿波罗主机安全云平台。</p>
	<p>3.按照安装界面提示，为您想要防护的服务器安装阿波罗主机安全Agent。
	</p>
	<p>4.阿波罗主机安全Agent安装成功后，您可在阿波罗总览页面查看您当前所有已安装Agent的服务器安全状态，包括 待处理事件、Agent状态、近期系统弱点趋势（漏洞和基线风险）、及最近入侵事件趋势。
	</p>
	<p><strong>资产列表</strong>页面，查看您当前已安装Agent的服务器的安全状态明细，您也可以对您的服务器资产进行分组、管理。详细功能介绍，请参考<a href="/agent/assets/asset_list">资产列表功能介绍</a>。
	</p>
	<p><strong>漏洞管理</strong>页面，查看您服务器上的web漏洞及系统软件漏洞，并可自定义检测扫描方式。详细功能介绍，请参考漏洞管理功能介绍。
	</p>
	<p><strong>基线检查</strong>页面，查看阿波罗检测到您服务器上的配置风险项，并可自定义检测扫描方式。详细功能介绍，请参考 <a href="/agent/assets/baseline_check">基线检查功能介绍</a>。
	</p>
	<p><strong>异常登录</strong>页面，查看您服务器上的已设置正常登录以外的非正常登录记录，并可自定义正常登陆时间/IP/域名/账号等属性。详细功能介绍，请参考 <a href="/agent/incidents/abnormal_login">异常登录功能介绍</a>。
	</p>
	<p><strong>网站后门</strong>页面，查看并处理在您服务器检测到的 Webshell 木马文件。并可自定义检测扫描方式。详细功能介绍，请参考 <a href="/agent/dashboard">网站后门</a>功能介绍。
	</p>
	<p><strong>主机异常</strong>页面，查看并处理在您服务器的异常进程，可疑文件，恶意文件和服务器内存cpu的异常问题。可发现本地提权，反弹shell，勒索病毒，挖矿木马等安全事件。检测详细功能介绍，请参考 主机异常功能介绍。
	</p>
	<p><strong>暴力破解</strong><strong></strong>页面，查看并处理在您服务器检测到的暴力破解事件。并可自定义暴力破解阈值，详细功能介绍，请参考 <a href="/agent/incidents/brute_force">暴力破解</a>功能介绍。
	</p>
	<p><strong>警告设置</strong>页面，系统扫描或检测到相关安全问题，可进行设置通知相关人员。详细功能介绍，请参考 警告设置功能介绍。
	</p>
	<p id="titleh103">
	    
	</p>
	<h1 id="titleh2031">3、用户指南</h1>
	<h2>3.1主机安全Agent插件 </h2>
	<h3> 3.1.1主机安全Agent说明 </h3>
	<p><strong>工作原理</strong><strong>:</strong></p>
	<p>阿波罗Agent 扫描引擎实时检测所配置的服务器信息。对于相关管理项目按照客户设置的扫描或检测方式进行警告。如果阿波罗Agent 没有按时上报在线信息，则自动开启守护进程，扫描引擎进行重启。
	</p>
	<p><strong>相关进程</strong><strong>:</strong></p>
	<p>阿波罗Agent 包含以下两个主要进程：</p>
	<p>说明： 阿波罗Agent 的进程在 Linux 系统的服务器上以 root 帐号运行。</p>
	<p>进程文件所在路径：Linux 系统： /usr/local/Apollo_IDS/agent_client/</p>
	<p>此进程主要用于定期检测阿波罗Agent是否需要升级。</p>
	<p>进程文件所在路径：Linux 系统：/usr/local/Apollo_IDS/agent_client/shell</p>
	<h4 id="titleh301">3.1.1.1资源占用</h4>
	<p>阿波罗Agent 仅占用您的服务器非常少的资源：阿波罗Agent 占用不超过 20% CPU 及 10 MB 内存。</p>
	<h3>3.1.2主机安全Agent安装</h3>
	<p><strong>注意</strong><strong>事项：</strong></p>
	<ul>
		<li>当前版本支持Centos系列操作系统和Ubuntu操作系统。</li>
		<li>系统可执行curl命令。</li>
		<li>确认系统环境是否支持客户端的运行，能够与linkage.duoyinsu.com服务器保持通信。</li>
		<li>系统可执行curl命令；系统装有pip管理包, 可执行pip命令；系统装有python2.x, 并已安装python-devel、gcc。</li>
	</ul>
	<p><strong>安装步骤：</strong></p>
	<p>1.登录阿波罗主机安全云平台。</p>
	<p>2.单击主机安全Agent，开通使用后，进入<a href="/agent/install">安装详情</a>界面。</p>
	<p>3.根据您的服务器操作系统选择安装步骤，获取最新版本主机安全 Agent 插件。</p>
	<p><strong>Linux 系统</strong>：</p>
	<p>1.以管理员身份登录您的 Linux 服务器。</p>
	<p>2.根据您的服务器，选择32位或64位的安装命令并复制至您的 Linux 服务器上。</p>
	<p>3.执行安装命令即可完成主机安全Agent插件的安装。</p>
	<p>4.主机安全Agent插件安装完成约五分钟后，您即可在主机安全Agent中查看您服务器的在线情况：被安装的服务器将会被添加至您的资产列表中。</p>
	<h4 id="titleh302">3.1.2.1主机安全Agent插件文件目录</h4>
	<p>Linux： /usr/local/Apollo_IDS/agent_client/</p>
	<h3 id="titleh2032">3.1.3主机安全Agent卸载</h3>
	<p>如果您决定不再使用主机安全Agent服务的所有功能，主机安全Agent。请您在<a href="/agent/install">安装详情</a>页进行相关操作。</p>
	<h2 id="titleh2033">3.2仪表盘</h2>
	<p >对已安装阿波罗主机安全Agent的服务器的安全问题进行统计，告知用户服务器安全的概况，引导用户维护服务器安全的工作重点</p>
	<h2>3.3资产列表</h2>
	<h3>3.3.1功能介绍</h3>
	<p>1.在主机安全管理控制台的资产列表页面，您可以查看主机安全已防护的服务器的状态。</p>
	<p>2.为了方便对特定服务器资产进行安全管控，您可以对资产进行标签分组，通过资产分组的维度查看安全事件。</p>
	<p>3.可以方便快捷的对资产进行一键安全检查。</p>
	<h3>3.3.2保护状态</h3>
	<p>保护状态分为在线、离线、暂停保护三种。</p>
	<p id="titleh2034">1.在线：阿波罗为该服务器提供全面的安全防护。</p>
	<p>2.离线：阿波罗服务端无法与该服务器的客户端正常连通，无法提供安全防护功能。具体离线原因及排查方法，请参考Agent 离线排查。</p>
	<h2>3.4漏洞管理</h2>
	<h3>3.4.1功能介绍</h3>
	<p>1.漏洞管理功能通过及时获取最新的漏洞预警和相关补丁，并通过云端下发补丁更新，实现漏洞快速发现，快速提供解决方案的功能。帮助您解决漏洞发现不及时、不会修复漏洞等诸多问题。
	</p>
	<p>2.提供漏洞扫描设置功能，更灵活多变的进行服务器扫描检测。</p>
	<p>3.提供漏洞扫描白名单功能，对某些漏洞彻底忽略。添加成功后，主机安全将不再对漏洞扫描白名单中的漏洞进行上报并告警，加入白名单或忽略操作支持填写备注，以便后续查看。
	</p>
	<p>4.结合团队任务功能，可以将发现的漏洞指派到相应负责的团队成员，跟踪漏洞修复状态，更为严谨的完成任务闭环。</p>
	<p>注意：结合团队任务功能，使用前要在团队任务模块进行相应人员角色配置，可进行人工指派和系统自动指派。</p>
	<h3>3.4.2漏洞检测原理</h3>
	<p>Web 漏洞功能通过您服务器上的Agent 的漏洞扫描和下发更新功能，每天随机进行一次漏洞扫描检测。如果发现您的服务器上存在漏洞，会上报至弱点&gt;漏洞管理&gt;Web漏洞页面，并为您推送漏洞告警信息。
	</p>
	<h3>3.4.3漏洞状态说明</h3>
    <ListHelp />
	<table cellSpacing={0}width="643">
	    <tbody>
	        <tr className="firstRow">
	            <td width="76" valign="middle">
	                <p>
	                    状态
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    说明
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    未指派
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    服务器存在相关漏洞，未生成任务指派到具体负责人。建议进行系统设置，出现问题自动指派。
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    已指派
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    服务器存在相关问题，已经生成任务指派到具体负责人。
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    处理中
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    问题负责人已经开始处理相关问题。若处理后验证失败，则问题继续回到处理中状态。
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    验证中
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    问题处理后，引擎验证问题是否已处理成功。
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    已忽略
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    问题被忽略后，系统不再向您提示该问题的告警信息。
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    已修复
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    存在的问题已被修复成功。
	                </p>
	            </td>
	        </tr>
	    </tbody>
	</table>
	<p>
	    
	</p>
	<h3>3.4.4漏洞处理操作步骤（主机安全Agent）</h3>
	<p>1.登录主机安全Agent。</p>
	<p>2.单击漏洞管理，选择漏洞类型，可进行漏洞指派和忽略操作。</p>
	<p>3.单击漏洞名称，可查看该漏洞的详细信息，影响情况和处理建议；进行漏洞指派和忽略操作。</p>
	<h3>3.4.5漏洞扫描配置操作步骤</h3>
	<p>1.登录主机安全Agent。</p>
	<p>2.单击漏洞管理。</p>
	<p id="titleh2035">3.单击漏洞管理设置。</p>
	<p>4.可选择要检测的漏洞类型（web漏洞类型，系统漏洞类型）和其所对应的服务器。可选则漏洞等级。</p>
	<h2>3.5基线检查</h2>
	<h3>3.5.1功能介绍</h3>
	<p>1.主机安全Agent基线检查功能自动检测您服务器上的系统、数据库、账号配置存在的风险点，并针对所发现的问题项为您提供修复建议。</p>
	<p>2.提供基线检查设置功能，根据您的实际业务情况设置基线检测项，检测周期、检测风险等级。</p>
	<p>3.提供基线检查白名单功能，对某些基线检查项目彻底忽略。添加成功后，主机安全将不再对基线检查白名单中的检测项目所发现的风险进行上报并告警，加入白名单或忽略操作支持填写备注，以便后续查看。
	</p>
	<p>4.结合团队任务功能，可以将发现的风险指派到相应负责的团队成员，跟踪风险修复状态，更为严谨的完成任务闭环。</p>
	<h3>3.5.2注意事项</h3>
	<p>1.结合团队任务功能，使用前要在团队任务模块进行相应人员角色配置，可进行人工指派和系统自动指派。</p>
	<p>2.某些检测项，例如：Mysql弱密码检测、sqlserver弱密码检测，会采用尝试登录方式进行检查，会占用一定的服务器资源以及生产较多的登录失败记录，这些项目是默认不开启的。如果需要这些功能，请确认上述风险后，在基线检查设置中勾选这些项目。
	</p>
	<h3>3.5.3基线检测原理</h3>
	<p>基线检查功能自动检测服务器上的系统、权限、账号、数据库等配置存在的风险点，并提供修复建议。</p>
	<h3>3.5.4基线检测周期</h3>
	<p>默认每三天进行一次全面自动检测，自动检测在凌晨0到6点间完成。您可以在在安全设置页面设置检测周期和检测发生时间。</p>
	<h3>3.5.5基线检测内容</h3>
	    <img src="/static/images/agent/useguide01.png" />
	<h3>3.5.6风险状态说明</h3>
	<table cellSpacing={0} width="643">
	    <tbody>
	        <tr className="firstRow">
	            <td width="76" valign="middle">状态</td>
	            <td width="567" valign="middle">说明</td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">未指派</td>
	            <td width="567" valign="middle">
	                服务器存在相关基线风险，未生成任务指派到具体负责人。建议进行系统设置，出现问题自动指派。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">已指派</td>
	            <td width="567" valign="middle">
	                服务器存在相关问题，已经生成任务指派到具体负责人。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">处理中</td>
	            <td width="567" valign="middle">
	                    问题负责人已经开始处理相关问题。若处理后验证失败，则问题继续回到处理中状态。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">验证中</td>
	            <td width="567" valign="middle">
	                    问题处理后，引擎验证问题是否已处理成功。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">已忽略</td>
	            <td width="567" valign="middle">
	                    问题被忽略后，系统不再向您提示该问题的告警信息。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">已修复
	            </td>
	            <td width="567" valign="middle">
	                    存在的问题已被修复成功。
	            </td>
	        </tr>
	    </tbody>
	</table>
	<h3>3.5.7风险处理操作步骤（主机安全Agent）</h3>
	<p>1.登录主机安全Agent。</p>
	<p>2.单击基线检查，进入基线风险列表，可进行漏洞指派和忽略操作。</p>
	<p>3.单击基线风险名称，可查看该风险的详细信息，影响情况和处理建议；进行风险指派和忽略操作</p>
	<h3>3.5.8基线检查配置操作步骤</h3>
	<p>5.登录主机安全Agent。</p>
	<p>6.单击基线检查。</p>
	<p>7.单击基线检查设置。</p>
	<p>8.新建或者编辑默认策略：可选择检测项目、检测周期、对应需要检测的服务器。</p>
	<p>友情提示：设置了检测方式后，可以前往资产列表，进行一键安全检测快速检测一遍，不用等周期检测哦。</p>
	<h3>3.5.9风险白名单配置操作步骤</h3>
	<p>1.登录主机安全Agent。</p>
	<p id="titleh2036">2.基线风险列表中，选择左下角操作</p>
	<p>3.在检测出的风险中，点击某个风险名称进入详情，进入后点击右上角加入白名单</p>
	<h2>3.6主机异常</h2>
	<h3>3.6.1功能介绍</h3>
	<p>1.对进程异常，异常文件进行匹配筛选检测，本地提权和反弹shell事件的精确检测。</p>
	<p>2.勒索病毒告警与拦截。</p>
	<p>3.主机内存和cpu的使用情况告知。</p>
	<p>4.结合团队任务功能，可以将发现的风险指派到相应负责的团队成员，跟踪风险修复状态，更为严谨的完成任务闭环。</p>
	<p>注意：结合团队任务功能，使用前要在团队任务模块进行相应人员角色配置，可进行人工指派和系统自动指派。</p>
	<h3>3.6.2检测原理</h3>
	<p>通过大数据分析模型对检测结果进行匹配，支持常见Rootkit特征、常见命令匹配规则、Shell Diff配置、后门目录检查等多种检测方式；支持XOR DDOS木马、Bill GatesDDOS木马、Linux恶意中控木马；勒索病毒告警与拦截；检测系统陌生进程、僵尸进程、Iowaiting进程、已知后门进程；监控读取密码、擦除日志、黑客工具下载等黑客行为。
	</p>
	<h3>3.6.3检测周期</h3>
	<p>默认每三天进行一次全面自动检测，自动检测在凌晨0到6点间完成。您可以在在异常检测设置检测周期和检测发生时间。</p>
	<h3>3.6.4异常状态说明</h3>
	<table cellSpacing={0}width="643">
	    <tbody>
	        <tr className="firstRow">
	            <td width="76" valign="middle">状态</td>
	            <td width="567" valign="middle">说明</td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">未指派</td>
	            <td width="567" valign="middle">
	                    服务器存在网站后门文件，未生成任务指派到具体负责人。建议进行系统设置，出现问题自动指派。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">已指派</td>
	            <td width="567" valign="middle">
	                    服务器存在相关问题，已经生成任务指派到具体负责人。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">处理中</td>
	            <td width="567" valign="middle">
	                    问题负责人已经开始处理相关问题。若处理后验证失败，则问题继续回到处理中状态。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">验证中</td>
	            <td width="567" valign="middle">
	                    问题处理后，引擎验证问题是否已处理成功。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">已忽略</td>
	            <td width="567" valign="middle">
	                    问题被忽略后，系统不再向您提示该问题的告警信息。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">已修复</td>
	            <td width="567" valign="middle">
	                    存在的问题已被修复成功。
	            </td>
	        </tr>
	    </tbody>
	</table>
	<p id="titleh2037">
	    
	</p>
	<h2>3.7网站后门</h2>
	<h3>3.7.1功能介绍</h3>
	<p>1.对wabshell事件的发现。</p>
	<p>2.结合团队任务功能，可以将发现的风险指派到相应负责的团队成员，跟踪风险修复状态，更为严谨的完成任务闭环。</p>
	<p>注意：结合团队任务功能，使用前要在团队任务模块进行相应人员角色配置，可进行人工指派和系统自动指派。</p>
	<h3>3.7.2检测原理</h3>
	<p>主机安全Agent通过检测您服务器上的 Web 目录中的文件，判断是否为 Webshell 木马文件。如果发现您的服务器存在网站后门文件，将会触发告警信息，或通过任务设置系统自动生成任务指派到相关负责人进行处理。
	</p>
	<h3>3.7.3检测周期</h3>
	<p>主机安全Agent网站后门检测采用动态检测及静态检测两种方式：</p>
	<p>1.动态检测： </p>
	<p>一旦 Web 目录中的文件发生变动，主机安全将会针对变动的内容进行动态检测。</p>
	<p>2.静态检测： </p>
	<p>主机安全将会扫描整个 Web 目录进行静态检测，扫描时间点和时间段可自行设置。</p>
	<h3>3.7.4网站后门状态说明</h3>
	<table cellSpacing={0}width="643">
	    <tbody>
	        <tr className="firstRow">
	            <td width="76" valign="middle">
	                <p>
	                    状态
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    说明
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    未指派
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    服务器存在网站后门文件，未生成任务指派到具体负责人。建议进行系统设置，出现问题自动指派。
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    已指派
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    服务器存在相关问题，已经生成任务指派到具体负责人。
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    处理中
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    问题负责人已经开始处理相关问题。若处理后验证失败，则问题继续回到处理中状态。
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    验证中
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    问题处理后，引擎验证问题是否已处理成功。
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    已忽略
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    问题被忽略后，系统不再向您提示该问题的告警信息。
	                </p>
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">
	                <p>
	                    已修复
	                </p>
	            </td>
	            <td width="567" valign="middle">
	                <p>
	                    存在的问题已被修复成功。
	                </p>
	            </td>
	        </tr>
	    </tbody>
	</table>
	<p>
	    
	</p>
	<h3>3.7.5网站后门操作
	</h3>
	<p>
	    1.登录主机安全Agent。
	</p>
	<p>
	    2.定位到入侵检测-网站后门，查看您的主机安全已防护的服务器上发现的网站后门文件记录。
	</p>
	<p>
	    3.对发现的木马文件进行指派处理，可在团队任务中设置自动指派功能。
	</p>
	<h3>3.7.6网站后门设置操作
	</h3>
	<p>
	    1.登录阿波罗主机安全Agent。
	</p>
	<p>
	    2.单击异常登陆。
	</p>
	<p>
	    3.在右上角单击异常登陆设置。
	</p>
	<p>
	    4.以针对监测的服务器自主设置网站后门检测方式。
	</p>
	<p id="titleh2038">
	    动态检测：一旦 Web 目录中的文件发生变动，主机安全agent将会针对变动的内容进行动态检测。
	</p>
	<p>
	    静态检测：主机安全agent将会根据检测设置扫描整个 Web 目录进行静态检测。可设置检测时间点和时间周期。
	</p>
	<h2>3.8异常登陆
	</h2>
	<h3>3.8.1功能介绍
	</h3>
	<p>
	    主机安全Agent异常登录功能检测您服务器上的登录行为，对于在非常用登录地的登录行为进行告警；可允许客户设置合法登录IP、合法登录时间、合法登录账号，在上述合法登录IP、合法登录事件、合法登录账号之外的登录行为均提供告警，或通过任务设置系统自动生成任务指派到相关负责人进行处理。
	</p>
	<h3>
	    3.8.2注意事项
	</h3>
	<p>
	    1.结合团队任务功能，可以将发现的风险指派到相应负责的团队成员，跟踪风险修复状态，更为严谨的完成任务闭环。
	</p>
	<p>
	    2.异地登录是针对公网IP才有的判断逻辑。
	</p>
	<p>
	    3.主机安全会对某个异地 IP 的第一次登录行为短信告警，如果持续登录则只在控制台告警，知道该IP登录满6次会自动把IP的地址记录为常用登录地
	</p>
	<p>
	    4.如果您的主机安全的版本为企业版，您可以针对机器设置合法登录IP、合法登录时间、合法登录账号，在上述合法登录IP、合法登录事件、合法登录账号之外的登录行为均提供告警，判断优先级高于异地登录判断。
	</p>
	<p>
	    5.您也可根据检测到的异常登录事件信息，在您的服务器上直接查看对应的登录日志记录
	</p>
	<h3>
	    3.8.3功能原理
	</h3>
	<p>
	    主机安全 Agent 通过定时收集您服务器上的登录日志并上传到云端，在云端进行分析和匹配。如果发现在非常用登录地或非法登录IP、非法登录时间、非法登录账号的登录成功事件，将会触发事件告警。当您的服务器第一次接入主机安全时，由于服务器未设置常用登录地，这段期间内的登录行为不会触发告警；当从某个公网IP第一次成功登录服务器后，会将该IP地址的位置记为常用登录地，从该时间点往后顺延24小时内的所有公网登录地也会记为常用登录地；当超过24小时后，所有不在上述常用登录地的登录行为均视为异地登录进行告警。当某个IP被判定为异地登录行为，只会有第一次登录行为进行短信告警，如果该IP成功登录六次或六次以上时，主机安全默认将此IP的地点记录为常用登录地。
	</p>
	<h3>
	    3.8.4异常登陆操作
	</h3>
	<p>
	    1.登录阿波罗主机安全Agent。
	</p>
	<p>
	    2.单击异常登陆。
	</p>
	<p>
	    3.列表中查看阿波罗Agent发现的异常登陆事件。
	</p>
	<h3>
	    2.8.5异常登陆设置操作
	</h3>
	<p>
	    1.登录阿波罗主机安全Agent。
	</p>
	<p>
	    2.单击异常登陆。
	</p>
	<p id="titleh2039">
	    3.在右上角单击异常登陆设置。
	</p>
	<p>
	    4.以针对机器自主添加常用登录地、合法登录IP、合法登录时间、合法登录账号。
	</p>
	<h2>3.9暴力破解</h2>
	<h3>
	    3.9.1功能介绍
	</h3>
	<p>
	    主机安全Agent暴力破解功能检测您服务器上的暴力破解行为，对于在超出设置的阈值的服务器进行告警；发现相关问题可设置系统自行拦截，或通过任务设置系统自动生成任务指派到相关负责人进行处理。
	</p>
	<p>
	    
	</p>
	<h3>
	    3.9.2注意事项
	</h3>
	<p>
	    1.结合团队任务功能，使用前要在团队任务模块进行相应人员角色配置，可进行人工指派和系统自动指派。
	</p>
	<p>
	    2.您也可根据检测到的暴力破解事件信息，在您的服务器上直接查看对应的登录日志记录。
	</p>
	<p>
	    
	</p>
	<h3>
	    3.9.3暴力破解操作
	</h3>
	<p>
	    1.登录阿波罗主机安全Agent。
	</p>
	<p>
	    2.单击暴力破解。
	</p>
	<p>
	    3.列表中查看阿波罗Agent发现的暴力破解事件。
	</p>
	<h3>
	    3.9.4暴力破解设置
	</h3>
	<p>
	    1.登录阿波罗主机安全Agent。
	</p>
	<p>
	    2.单击异常登陆。
	</p>
	<p>
	    3.在右上角单击暴力破解设置。
	</p>
	<p id="titleh20310">
	    4.以针对监测的服务器自主添加暴力破解监测方式。
	</p>
	<p>
	    
	</p>

	<h2>3.10资产管理</h2>
	<h3>
	    3.10.1端口管理
	</h3>
	<p>
	    <strong>功能介绍</strong><strong>：</strong>
	</p>
	<p>
	    l版本：标准版
	</p>
	<p>
	    l介绍：定期收集服务器的对外端口监听信息，并对变动信息进行记录，便于端口清点和历史端口变动查看。
	</p>
	<p>
	    l数据收集周期：用户可自定义（以小时为最小单位）
	</p>
	<p>
	    <strong>使用场景</strong><strong>：</strong>
	</p>
	<p>
	    1.可清点一个端口，有多少服务器监听了。
	</p>
	<p>
	    2.可清点一台服务器，开了多少端口。
	</p>
	<p>
	    3.可发现了异常监听端口，通过历史记录可查看到监听时间。
	</p>
	<p>
	    <strong>端口详情</strong><strong>：</strong>
	</p>
	<p>
	    l端口号
	</p>
	<p>
	    l对应进程
	</p>
	<p>
	    l网络协议，tcp或udp
	</p>
	<p>
	    l绑定的IP
	</p>
	<p>
	    <strong>变动历史说明</strong><strong>：</strong>
	</p>
	<p>
	    l变动状态：启动（上次未发现监听，本次数据收集发现监听了）、停止（相反的逻辑）
	</p>
	<p>
	    l数据获取时间（由于为周期收集，变动记录的时间为获取到改动的时间，非真实发生的时间）
	</p>
	<p>
	    
	</p>
	<h3>
	    3.10.2进程管理
	</h3>
	<p>
	    <strong>功能介绍</strong><strong>：</strong>
	</p>
	<p>
	    l功能版本：企业版
	</p>
	<p>
	    l功能介绍：定期收集服务器的进程信息，并对变动情况进行记录，便于进程清点和历史进程变动查看。
	</p>
	<p>
	    l数据收集周期：用户可自定义（以小时为最小单位）。
	</p>
	<p>
	    <strong>使用场景</strong><strong>：</strong>
	</p>
	<p>
	    1.可清点一个进程，有多少服务器运行了。
	</p>
	<p>
	    2.可清点一台服务器，运行了多少个进程。
	</p>
	<p>
	    3.可发现了非法进程，通过历史记录可查看到启动的时间。
	</p>
	<p>
	    <strong>进程详情</strong><strong>：</strong>
	</p>
	<p>
	    1.进程名
	</p>
	<p>
	    2.进程路径
	</p>
	<p>
	    3.启动参数
	</p>
	<p>
	    4.启动时间
	</p>
	<p>
	    5.运行用户
	</p>
	<p>
	    6.运行权限
	</p>
	<p>
	    7.PID
	</p>
	<p>
	    8.父进程名
	</p>
	<p>
	    9.文件MD5（小于1M的文件将计算）
	</p>
	<p>
	    <strong>变动历史说明</strong><strong>：</strong>
	</p>
	<p>
	    l变动状态：启动（上次未发现运行，本次数据收集发现运行了）、停止（相反的逻辑）
	</p>
	<p>
	    l数据获取时间（由于为周期收集，变动记录的时间为获取到改动的时间，非真实发生的时间）
	</p>
	<p>
	    
	</p>
	<h3>
	    3.10.3用户管理
	</h3>
	<p>
	    <strong>功能介绍</strong><strong>：</strong>
	</p>
	<p>
	    l功能版本：标准版
	</p>
	<p>
	    l功能介绍：定期收集服务器的账号信息，并对变动情况进行记录，便于账号清点和历史账号变动查看。
	</p>
	<p>
	    l数据收集周期：用户可自定义（以小时为最小单位）。
	</p>
	<p>
	    <strong>使用场景</strong><strong>：</strong>
	</p>
	<p>
	    1.清点一个用户，有多少服务器创建了。
	</p>
	<p>
	    2.清点一台服务器，创建了多少个用户。
	</p>
	<p>
	    3.发现了非法用户，通过历史记录可查看到变动的时间。
	</p>
	<p>
	    <strong>账号详情</strong><strong>：</strong>
	</p>
	<p>
	    1.账号名
	</p>
	<p>
	    2.是否root权限
	</p>
	<p>
	    3.用户组
	</p>
	<p>
	    4.到期时间
	</p>
	<p>
	    5.上次登录情况（登录时间、登录来源）
	</p>
	<p>
	    6.<strong>变动历史说明</strong><strong>：</strong>
	</p>
	<p>
	    l变动状态：新建（上次未发现，本次数据收集发现新建了）、删除（上次数据收集有，本次没有了）、修改（账号名没变，但是root权限、y用户组、到期时间变动了）
	</p>
	<p>
	    l数据获取时间（由于为周期收集，变动记录的时间为获取到改动的时间，非真实发生的时间）
	</p>
	<p>
	    
	</p>
	<h3>
	    3.10.4Web站点管理
	</h3>
	<p>
	    <strong>功能介绍</strong><strong>：</strong>
	</p>
	<p>
	    l功能版本：标准版
	</p>
	<p>
	    l功能介绍：定期收集服务器的web站点信息。
	</p>
	<p>
	    l数据收集周期：用户可自定义（以小时为最小单位）。
	</p>
	<p>
	    <strong>账号详情</strong><strong>：</strong>
	</p>
	<p>
	    1.域名
	</p>
	<p>
	    2.IP
	</p>
	<p>
	    3.中间件
	</p>
	<p>
	    4.端口
	</p>
	<p>
	    5.用户
	</p>
	<h3>
	    3.10.5日志管理
	</h3>
	<p>
	    <strong>功能介绍</strong><strong>：</strong>
	</p>
	<p>
	    l功能版本：标准版
	</p>
	<p>
	    l功能介绍：定期收集服务器的日志信息
	</p>
	<p>
	    l数据收集周期：用户可自定义（以小时为最小单位）。
	</p>
	<p>
	    <strong>日志管理</strong><strong>详情</strong><strong>：</strong>
	</p>
	<p>
	    1.日志文件
	</p>
	<p>
	    2.日志内容
	</p>
	<h3>
	    3.10.6操作审计管理
	</h3>
	<p>
	    <strong>功能介绍</strong><strong>：</strong>
	</p>
	<p>
	    l功能版本：标准版
	</p>
	<p>
	    l功能介绍：定期收集服务器的操作命令信息
	</p>
	<p>
	    l数据收集周期：用户可自定义（以小时为最小单位）。
	</p>
	<p>
	    <strong>账号详情</strong><strong>：</strong>
	</p>
	<p>
	    1.执行目录
	</p>
	<p>
	    2.命令
	</p>
	<p>
	    3.参数
	</p>
	<p id="titleh104">
	    4.进程名
	</p>
	<p id="titleh2041">
	    
	</p>
	<h1>4、服务条款</h1>
	<h2>4.1用户协议</h2>
	<p>
	    本服务条款是安识科技有限公司（以下简称“安识科技”）与您就“云平台”及内包含相关产品和服务（“云平台”“伏特漏洞扫描云平台”“阿波罗扫描云平台”）所订立的有效合约。在您点击“注册”或签署相关有效协议后，视为您同意遵循本协议约定使用“云平台”及内包含相关产品和功能。
	</p>
	<p id="titleh2042">
	    在接受本服务条款之前，请您仔细阅读本服务条款的全部内容。如果您对本服务条款的条款有疑问的，请通过安识科技官网（www.duoyinsu.com） 公布的联系方式，进行询问，安识科技将向您解释条款内容。如果您不同意本服务条款的任意内容，或者无法准确理解安识科技对条款的解释，请不要进行后续操作。
	</p>
	<h2>4.2定义</h2>
	<p id="titleh2043">
	    1. 本条款中的“您”是指：所有使用安识科技产品及服务的主体（包括但不限于个人、团队、公司、组织等），或称“用户”。
	</p>
	<p>
	    2.本条款中“产品”指：安识科技向您提供www.duoyinsu.com 网站上所展示的产品以及相关的安全技术及支持服务。
	</p>
	<h2>4.3产品费用</h2>
	<p>
	    1.具体计费规则请您按照平台开通付费页面公布的当时有效的计费模式与标准为准。安识科技保留在您未按照约定支付费用之前不向您提供服务和/或技术支持，或者终止服务和/或技术支持的权利，同时，安识科技保留对后付费服务中的欠费行为追究法律责任的权利。
	</p>
	<p>
	    2.服务期满双方愿意继续合作的，您应在服务期满前支付续费款项，以使服务得以继续进行。如续费时安识科技对产品体系、名称或价格进行调整的，双方同意按照届时有效的新的产品体系、名称或价格履行。
	</p>
	<p>
	    3.您理解并同意，安识科技有权根据经营情况，不定期的对产品体系、名称或价格、计费模式等进行调整。安识科技将尽合理范围内的最大努力，将前述调整及变化，通过官网公告、站内通知等方式提前告知您，或提前发送至您预留的联系方式。
	</p>
	<p>
	    
	</p>
	<p id="titleh2044">
	    4.安识科技有权根据其自身业务推广的需要不时推出优惠活动，您完全理解，所有的优惠活动以及业务推广服务都是安识科技提供的一次性特别优惠，优惠内容不包括赠送服务项目的修改、更新及维护费用，并且赠送服务项目不可折价冲抵服务价格。
	</p>
	<h2>4.4账户须知</h2>
	<p>
	    1.您在使用“平台”内服务及相关产品前，请务必确认您具有完全民事行为能力注册或代理注册相关产品。
	</p>
	<p>
	    2.在您点击“注册”并按照提示信息填写包括注册邮箱等在内的各项信息时，您即受到本协议之约束，需遵照。您所注册的账户由您管理和使用，对您所注册账户您享有终身使用权，除非您违法使用“伏特漏洞扫描云平台”及相关产品或严重违反本协议。
	</p>
	<p>
	    3.在使用的过程中，请妥善保管您的账户名和密码，当您使用完毕后，请安全登出。在使用“伏特漏洞扫描云平台”及相关产品的过程中，您发现任何人未经授权擅自使用您的账户的，请及时与安识科技沟通。因您不当授权他人使用或保管不善导致账号被盗用，甚至数据丢失的，责任自负。
	</p>
	<p>
	    4.当您在注册使用“平台”内服务及相关产品时，请务必保证您所提交的邮箱准确、合法有效，并确保能正常接收注册“平台”内服务及相关产品时发送的验证链接或其他注册必备信息。
	</p>
	<p>
	    5.请您务必保证您所创建团队在使用“平台”内服务及相关产品时遵守相关法律法规，不得传播色情、恐怖、反动、暴力等信息。
	</p>
	<p>
	    6.在使用“平台”内服务及相关产品时，您需对您的账户及密码保密（安识科技仅按现有技术提供相应的安全措施来使安识科技掌握的信息不丢失，不被滥用和变造。这些安全措施包括用户密码加密保存，聊天消息加密保存，传输的信息进行SSL加密等安全技术手段。尽管有这些安全措施，但安识科技不保证这些信息的绝对安全）。您还需对您的以下活动承担责任：包括但不限于信息披露、发布信息、通过“平台”内服务及相关产品连接其他服务、许可他人使用、他人未经授权擅自使用等。
	</p>
	<p>
	    7.安识科技保留您在违反法律法规或本协议的情况下中止或终止为您提供服务并删除您所存储的静态文件的权利。同时，您同意并认可以下条款：
	</p>
	<p>
	    8.您同意并授权安识科技，当您在使用“平台”内服务及相关产品的过程中有包括但不限于发布欺诈或反动信息、恐怖信息、侵犯他人合法权益或其他严重违反安识科技相关规则的行为时，安识科技对此有权予以披露。您的账户可能因此被注销，并不能再次登录“平台”内服务及相关产品，相应服务同时终止（有权不再保存您所存储的静态文件）。
	</p>
	<p>
	    9.您同意并授权安识科技，安识科技若接收到第三方对您的投诉、举报，并获得初步证据或经核实，安识科技对此有权披露，您的用户名可能被注销，并不能再次登录“平台”相关产品，相应服务同时终止（有权不再保存您所存储的静态文件）。
	</p>
	<p  id="titleh2045">
	    10.付费项目连续3个月未续费的，安识科技保留中止或终止为您提供服务并删除您所存储的静态文件的权利。
	</p>
	<p >
	    11.其他在本协议及安识科技通过其他方式公示的规则、声明中约定的注销情形。
	</p>
	<h2>4.5使用须知</h2>
	<p>
	    1.如果您有意愿使用“平台”及相关产品的某些付费服务，这将表示您同意支付其中的所有费用（具体收费标准以安识科技官方网站或向您推送的信息为准）。在您提交使用付费产品的申请后，安识科技将提供经我们认可的第三方在线服务机构的支付方式，并要求您支付相关费用。成功支付后，表明您已经获得使用付费服务的权利并且已经达成此项交易，除非因安识科技的原因导致服务无法正常提供，否则我们将不退还您已经支付的服务费。
	</p>
	<p>
	    2.付费开通使用安识科技的产品即表示已同意安识科技的相关产品对相应的授权资产进行关联，进行安全保护。
	</p>
	<p>
	    3.此外，由于您违反了本协议的相关规定而导，致账户不可用，安识科技将不会退还付费产品在未使用期间的服务费。
	</p>
	<p>
	    4.以下行为是安识科技坚决反对和禁止的：
	</p>
	<p>
	    5.以恶意目的对安识科技进行任何形式的反向工程、反向编译、反汇编，或在竞争产品抄袭模仿“平台”“伏特漏洞扫描云平台”“阿波罗主机安全云平台”及相关产品。
	</p>
	<p>
	    6.使用“平台”“伏特漏洞扫描云平台”“阿波罗主机安全云平台”及相关产品的通信功能发送垃圾信息、频繁骚扰其他用户和造成用户反感的行为。
	</p>
	<p>
	    7.对网站服务器进行恶意攻击（包括上传病毒性文件等），或者采取恶意手段使用“平台”“伏特漏洞扫描云平台”“阿波罗主机安全云平台”及相关产品，造成服务器异常。
	</p>
	<p>
	    8.向第三方直接或间接出售、转售“平台”“伏特漏洞扫描云平台”“阿波罗主机安全云平台”及相关产品服务。
	</p>
	<p id="titleh2046">
	    9.使用“平台”“伏特漏洞扫描云平台”“阿波罗主机安全云平台”及相关产品从事非法活动或者为非法活动提供帮助。
	</p>
	<p>
	    如果您采取了上述行为，我们将视该行为引起后果的严重性追究责任，并保留对外披露或通过法律途径追偿合理损失的权利。
	</p>
	<h2>4.6用户权利与义务</h2>
	<p>
	    1.开通付费后您有权利享受“平台”中相应产品提供的互联网技术和信息服务，并有权利在接受“平台”及相关产品提供的服务时获得安识科技的技术支持、咨询等服务。
	</p>
	<p>
	    2.您保证不会利用技术或其他手段破坏或扰乱安识科技及安识科技其他客户的账户。
	</p>
	<p>
	    3.您应仔细阅读所开通产品的相关服务说明、技术规范、使用流程等，并理解相关内容及可能发生的后果，在使用伏特漏洞扫描服务或阿波罗主机安全服务过程中，您应依照相关操作指引进行操作，请您自行把握风险谨慎操作，对于您违反相关操作指引所引起的后果，安识科技将不承担责任。
	</p>
	<p>
	    4.为了向您提供伏特漏洞扫描服务和阿波罗主机安全服务，您同意且授权安识科技对您指定的资产进行扫描，包括资产数据解析、web指纹和服务指纹识别、漏洞验证、漏洞识别、基线风险检查、入侵事件监测、相关日志进程操作命令的检测等。您知悉且完全了解使用漏洞扫描可能造成的影响和后果，您同意在自己承担风险的情况下，按漏洞扫描服务或主机安全服务的现状及当前功能使用相关服务。安识科技不对您因使用伏特漏洞扫描服务和主机安全服务导致的影响和后果承担责任。
	</p>
	<p>
	    5.您应尊重安识科技及其他第三方的知识产权和其他合法权利，并保证在发生侵犯上述权益的违法事件时尽力保护安识科技及其股东、雇员、合作伙伴等免于因该等事件受到影响或损失；安识科技保留您侵犯安识科技合法权益时终止向您提供服务、删除您存储的静态文件并不退还任何款项的权利。
	</p>
	<p>
	    6.对由于您在创建账户时向安识科技提供的电子邮箱安全性、稳定性不佳而导致的一切后果，您应自行承担责任，包括但不限于因您未能及时收到安识科技的相关通知而导致的后果和损失。
	</p>
	<p>
	    7.在您使用安识科技所提供的付费服务时，安识科技有权收取相应的服务费。若安识科技针对现有服务或产品向您收取服务费的，将提前30日予以通知。您自收到相应通知之日起仍旧继续使用的，视为您对服务费用调整结果的确认。
	</p>
	<p>
	    8.您授权安识科技可以通过第三方验证您的身份和资格，并取得您使用本协议约定服务的相关资料。
	</p>
	<p  id="titleh2047">
	    9.您保证您使用本协议约定服务时将遵从国家、地方法律法规、行业惯例和社会公共道德，不会利用安识科技提供的服务进行存储、发布、传播如下信息和内容：违反国家法律法规政策的任何内容（信息）；违反国家规定的政治宣传和/或新闻信息；涉及国家秘密和/或安全的信息；封建迷信和/或淫秽、色情、下流的信息或教唆犯罪的信息；博彩有奖、赌博游戏；违反国家民族和宗教政策的信息；防碍互联网运行安全的信息；侵害他人合法权益的信息和/或其他有损于社会秩序、社会治安、公共道德的信息或内容。您同时承诺不得为他人发布上述不符合国家规定和/或本协议约定服务条款约定的信息内容提供任何便利，包括但不限于设置URL、banner链接等。您承认安识科技有权在您违反上述约定时有权终止向您提供服务、删除您存储的静态文件并不予退还任何款项，因您上述行为给安识科技造成损失的，您应予赔偿。
	</p>
	<h2>4.7安识科技权利与义务</h2>
	<p>
	    1.安识科技应根据您选择的服务以及交纳款项的情况向您提供合格的网络技术和信息服务（包括但不限于组建服务团队、处理服务工单、添加服务供应商、添加机器人服务等），且在您需要时，我们将为您提供技术支持、咨询等服务。
	</p>
	<p>
	    2.安识科技为向您提供更为优质的服务，您同意安识科技有权传输、存储、复制您的数据及信息（主要是指您在使用“伏特漏洞扫描云平台”及其他产品时向安识科技上传的一切数据），该数据及信息仅用于为您提供相关记录的查找、搜索、翻阅及其他任何必要性服务。安识科技承诺保证该数据及信息不被泄露、外传，保证数据及信息的相对安全性。
	</p>
	<p>
	    3.安识科技承诺对您的资料采取绝对保密措施（但不保证您的资料的绝对安全），不向任何第三方披露您的资料，不授权任何第三方使用您的资料，除非：
	</p>
	<p>
	    4.依据本协议条款或者您与安识科技之间其他服务协议、合同、在线条款等规定可以提供；
	</p>
	<p>
	    5.依据法律法规的规定应当提供；
	</p>
	<p>
	    6.行政、司法等职权部门要求安识科技提供；
	</p>
	<p>
	    7.您同意安识科技向第三方提供；
	</p>
	<p>
	    8.安识科技解决投诉、举报事件、提起诉讼而提交的；
	</p>
	<p>
	    9.安识科技为防止严重违法行为或涉嫌犯罪行为发生而采取必要合理行动所必须提交的；
	</p>
	<p id="titleh2048">
	    10.安识科技为向您提供产品、服务、信息而向第三方提供的，包括安识科技通过第三方的技术及服务向您提供产品、服务、信息的情况；
	</p>
	<p >
	    11.安识科技基于为您提供更优质服务的考虑，保留使用您或您公司名称放置于安识科技网站用于宣传之权利，届时安识科技将通过邮件等方式向您发出名称使用确认函。
	</p>
	<h2 >4.8隐私保护</h2>
	<p>
	    您同意《用户服务协议》或使用本协议约定产品或服务的，您即同意安识科技按照以下条款来使用和披露您的个人信息：
	</p>
	<p>
	    1.登录名和密码：在您注册账户时，我们会要求您设置用户名和密码来识别您的身份，您仅可通过您设置的密码来使用该账户，如果您泄漏了密码，您可能会丢失您的个人识别信息，并可能导致对您不利的法律后果。该账户和密码因任何原因受到潜在或现实危险时，您应该立即和安识科技取得联系，在安识科技采取行动前，安识科技对此不负任何责任。
	</p>
	<p>
	    2.用户信息：您完成账户注册或申请时，应向安识科技提供您的真实姓名、网站域名、地址、电话号码和电子邮件地址等。为有针对性地向您提供新的服务和机会，您了解并同意安识科技及其关联公司或您登录的其他网站将通过您的电子邮件地址或该手机通知您这些信息。
	</p>
	<p>
	    3.登录记录：为了保障您使用本协议约定服务的安全以及不断改进服务质量，安识科技将记录并保存您登录和使用本协议约定服务的相关信息，但安识科技承诺不将此类信息提供给任何第三方（除双方另有约定或法律法规另有规定及安识科技关联公司外）。
	</p>
	<p>
	    4.服务信息的收集和存储：出于 a.提供服务必须收集，否则服务无法提供，或 b.改善我们的产品和服务，以期更好地满足您的需求，为您提供定制化服务，否则您的产品或者服务体验相对会弱化的目的，安识科技有可能自动从您的智能终端（包括手机、电脑和电视等）和浏览器上收集和存储您的软件信息、硬件信息、您主动上传至本网站服务器的信息及您使用偏好信息，上述信息包括但不限于您的用户名、操作系统信息、IP地址、Cookie信息、GPS等位置服务使用情况、您所访问的页面等信息。您同意安识科技对您上述信息进行收集和存储。
	</p>
	<p>
	    5.外部链接：本网站含有到其他网站的链接，但安识科技对其他网站的隐私保护措施不负任何责任。安识科技可能在任何需要的时候增加商业伙伴或共用品牌的网站。
	</p>
	<p>
	    6.安全：安识科技仅按现有技术提供相应的安全措施来使安识科技掌握的信息不丢失，不被滥用和变造。这些安全措施包括向其他服务器备份数据和对用户密码加密。尽管有这些安全措施，但安识科技不保证这些信息的绝对安全。
	</p>
	<p>
	    7.使用
	</p>
	<p >
	    8.安识科技会将依法收集到的您的个人信息用于审计、数据分析、研究和关联公司之间分享等内部目的，以便于让您享受更为优质的服务。
	</p>
	<p id="titleh2049">
	    9.视具体情况，安识科技会向与安识科技合作提供产品和服务或者帮助安识科技向客户进行营销的合作伙伴提供某些个人信息。安识科技只会为提供或改进安识科技的产品、服务和广告宣传之目的而与第三方共享个人信息；而不会为第三方的营销目的与第三方共享个人信息，更不会销售个人信息。安识科技有义务要求上述合作伙伴严格遵守保密约定。
	</p>
	<h2>4.9知识产权</h2>
	<p id="titleh20410">
	    1.“平台”内服务及相关产品中的应用程序、源代码、LOGO、界面设计、应用程序编程接口（API）所关联的所有知识产权均归属安识科技所有。除另有特别声明外，安识科技提供“平台”内服务及相关产品时，其所依托软件的著作权、专利权及其他知识产权均归安识科技所有。安识科技在服务中所使用的“安识科技”、“ 云平台”、“ 伏特漏洞扫描云平台” “ 阿波罗主机安全云平台” “ 安全脉搏”等商业标识，其著作权或商标权归安识科技所有。上述及其他任何本服务包含的内容的知识产权均受到法律保护，未经安识科技、用户或相关权利人书面许可，任何人不得以任何形式进行使用或创作相关衍生作品。
	</p>
	<p >
	    2.安识科技亦承诺将严格维护您的知识产权，不侵犯、泄露任何与您相关的知识产权或信息。
	</p>
	<h2>4.10不可抗力及系统故障</h2>
	<p>
	    1.您理解并同意，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务发生中断。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。出现上述情况时，安识科技将努力在第一时间与相关单位配合，及时进行修复，但是由此给您造成的损失，安识科技在法律允许的范围内免责。
	</p>
	<p>
	    2.在法律允许的范围内，安识科技对以下情形导致的服务中断或受阻不承担责任：
	</p>
	<p>
	    3.您受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏；
	</p>
	<p>
	    4.您或安识科技的电脑软件、系统、硬件和通信线路出现故障；
	</p>
	<p>
	    5.您单方操作不当；
	</p>
	<p>
	    6.您通过非安识科技授权的方式使用本服务；
	</p>
	<p>
	    7.其他安识科技无法控制或合理预见的情形。
	</p>
	<p>
	    8.您理解并同意，本服务并非为某些特定目的而设计，包括但不限于核设施、军事用途、 医疗设施、交通通讯等重要领域。如果因为软件或服务的原因导致上述操作失败而带来的人员伤亡、财产损失和环境破坏等，安识科技不承担法律责任。
	</p>
	<p>
	    9.系统中断
	</p>
	<p>
	    10.系统可能因下列状况无法正常运作，使您无法使用各项联网服务时，安识科技不承担损害赔偿责任，该状况包括但不限于：
	</p>
	<p>
	    11.安识科技提前3日通知，在合理期限内的系统停机维护；
	</p>
	<p>
	    12.电信设备出现故障不能进行数据传输的；
	</p>
	<p>
	    13.因不可抗力之因素，造成安识科技系统障碍不能执行业务的；
	</p>
	<p id="titleh20411">
	    14.由于黑客攻击、电信部门技术调整或故障、网站升级、银行方面的问题等原因而造成的服务中断或者延迟。
	</p>
	<h2>4.11责任范围及责任限制</h2>
	<p>
	    1.安识科技仅对本协议中列明的责任范围或法律明确规定的责任范围负责。
	</p>
	<p id="titleh20412">
	    2.本协议约定服务之合作单位，所提供之服务品质及内容由该合作单位自行负责。因您在使用安识科技合作单位产品的过程中产生的任何法律纠纷，均与安识科技无关。
	</p>
	<h2>4.12法律适用及争议解决</h2>
	<p id="titleh20413">
	    本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国大陆地区法律。因本协议产生之争议，均应依照中华人民共和国法律予以处理，并提交安识科技所在地法院审理。
	</p>
	<h2>4.13其他</h2>
	<p>
	    如果您对本协议或本服务有意见或建议，可与安识科技客户服务部门联系，我们会给予您必要的帮助。
	</p>
	<p>
	    <br/><br/>
	</p>
	<p>
	    <br/>
	</p>
</div>
            </Content>
        </Layout>
    )
}