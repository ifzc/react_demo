import React, { useState, useEffect } from 'react'
import { Anchor, Layout, Image } from 'antd';
import './index.scss';

const { Link } = Anchor;
const { Sider, Content } = Layout;
export default function HelpDocument() {
    return (
        <Layout className="helpIndex">
            <Sider style={{ background: "#fff",position: "fixed", width: "200px",height:"100%" }}><div>
                <Anchor affix={false} targetOffset={80}>
                    <Link href={"#content-details"} title="产品详情" />
                    <Link href={"#content-guide"} title="使用指南" />
                    <Link href="#content-problem" title="问题指引">
                        <Link href="#content-problem-first" title="Q1.服务器被入侵有哪些危害?" />
                        <Link href="#content-problem-second" title="Q2.显示登录异常怎么解决?" />
                        <Link href="#content-problem-third" title="Q3.提示密码被暴力破解成功之后该如何解决?" />
                        <Link href="#content-problem-fourth" title="Q4.Agent能起什么作用?" />
                        <Link href="#content-problem-fifth" title="Q5.如何处置webshell文件?" />
                        <Link href="#content-problem-sixth" title="Q6.未能成功检测出木马（漏报）如何解决?" />
                    </Link>
                    <Link href="#content-installation" title="安装问题">
                        <Link href="#content-installation-first" title="1.ImportError: No module named ..." />
                        <Link href="#content-installation-second" title="2.Command ’python setup.py ..." />
                        <Link href="#content-installation-third" title="3.agent is start failed" />
                        <Link href="#content-installation-fourth" title="4.-bash:/usr/local/Apollo_IDS..." />
                        <Link href="#content-installation-fifth" title="5.-bash : curl : command not found" />
                        <Link href="#content-installation-sixth" title="6.Requirement already up-to-date..." />
                    </Link>
                </Anchor></div></Sider>
            <Content>
                <div id="content">
                    <div id="content-details"><h4 className="blue"><a href="/introduction">产品详情</a></h4></div>
                    <div id="content-guide"><h4 className="blue"><a href="/guide">使用指南</a></h4></div>
                    <div id="content-problem"><h4>问题指引</h4></div>
                    <div id="content-problem-first">
                        <h4>Q1.服务器被入侵有哪些危害?</h4>
                        <div className="answer">
                            <p>业务被中断：数据库、文件被篡改或删除，导致服务无法访问，系统瘫痪。</p>
                            <p>数据被窃取：黑客窃取企业数据后公开售卖，客户隐私数据被泄漏，导致企业品牌受损、用户流失。</p>
                            <p>被加密勒索：黑客入侵服务器后通过植入不可逆的加密勒索软件对数据进行加密，对企业进行金钱勒索。</p>
                            <p>服务不稳定：黑客在服务器中运行挖矿程序、DDoS 木马程序，消耗大量系统资源，导致服务器不能提供正常服务。</p>
                        </div>
                    </div>
                    <div id="content-problem-second">
                        <h4>Q2.显示登录异常怎么解决?</h4>
                        <div className="answer">
                            <p>请检查登录记录，若非管理员本人登录，说明密码可能已经泄露或服务器被入侵，用户需要对服务器进行详细的安全检查。</p>
                        </div>
                    </div>
                    <div id="content-problem-third">
                        <h4>Q3.提示密码被暴力破解成功之后该如何解决?</h4>
                        <div className="answer">
                            <p>首先确认对应IP是否是自身IP，若非自身IP，说明服务器已被黑客入侵。</p>
                            <p>检查服务器安全状况，是否还有其它未知账户和木马文件，如果存在请立即删除和修复，并修改服务器登录密码。</p>
                            <p>根据实际情况决定是否需要对服务器进行重置，并设置复杂密码。</p>
                        </div>
                    </div>
                    <div id="content-problem-fourth"><h4>Q4.Agent能起什么作用?</h4>
                        <div className="answer">
                            <p>若发现有未检测出来的木马文件，请拨打电话<span className="blue">021-3332 8652</span>或发邮件到<a href="Mailto:hi@duoyinsu.com" className="blue">hi@duoyinsu.com</a>联系我们技术团队，我们会为尽快为您鉴定处理。</p>
                        </div>
                    </div>
                    <div id="content-problem-fifth"><h4>Q5.如何处置webshell文件?</h4>
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