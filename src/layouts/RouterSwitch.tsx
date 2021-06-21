import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd'
import { Route, Switch } from 'react-router-dom';
const Open = lazy(() => import('../routes/open'));
const Dashboard = lazy(() => import('../routes/dashboard'));
//个人中心
const UserInfo = lazy(() => import('../routes/userCenter/userInfo'));
const UserSettings = lazy(() => import('../routes/userCenter/settings'));
const UserLog = lazy(() => import('../routes/userCenter/log'));
const ShareAccount = lazy(() => import('../routes/userCenter/share'));
//资产列表
const AssetsTable = lazy(() => import('../routes/assets/index'));
const Detail = lazy(() => import('../routes/assets/detail'));
const TodoList = lazy(() => import('../routes/assets/test'));
//资产管理
const AssetFingerprint = lazy(() => import('../routes/assetManagement/fingerprint'));
const AssetLog = lazy(() => import('../routes/assetManagement/log'));
const CustomLog = lazy(() => import('../routes/assetManagement/customLog'));
const AddCustomLog = lazy(() => import('../routes/assetManagement/addCustomLog'));
const AssetOperating = lazy(() => import('../routes/assetManagement/operating'));
//安全检查
const Loop = lazy(() => import('../routes/securityCheck/loop'));
const Baseline = lazy(() => import('../routes/securityCheck/baseline'));
const WeakPassword = lazy(() => import('../routes/securityCheck/weakPassword'));
//头部
const Help = lazy(() => import('../routes/top/help'));
const Introduction = lazy(() => import('../routes/top/introduction'));
const Guide = lazy(() => import('../routes/top/guide'));
function RouterSwitch() {
        return (
            <Suspense fallback={<div className="suspense-box"><Spin size="large" /></div>}>
                <Switch>
                    {/* <Route path='/dashboard' exact render={() => (
                        <Redirect to='/dashboard' />
                    )} /> */}
                    <Route path='/to' component={TodoList}/>
                    <Route path='/assets' component={AssetsTable} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/user/info' component={UserInfo} />
                    <Route path='/user/settings' component={UserSettings} />
                    <Route path='/user/log' component={UserLog} />
                    <Route path='/user/share' component={ShareAccount} />
                    <Route path='/agent' component={Open} />
                    <Route path='/help' component={Help} />
                    <Route path='/introduction' component={Introduction} />
                    <Route path='/guide' component={Guide} />
                    <Route path='/asset/detail' component={Detail} />
                    <Route path='/asset/fingerprint' component={AssetFingerprint} />
                    <Route path='/asset/log' component={AssetLog} />
                    <Route path='/asset/custom_log' component={CustomLog} />
                    <Route path='/asset/custom_log_add' component={AddCustomLog} />
                    <Route path='/asset/operating' component={AssetOperating} />
                    <Route path='/loop' component={Loop} />
                    <Route path='/baseline' component={Baseline} />
                    <Route path='/weak' component={WeakPassword} />
                </Switch>
            </Suspense>
        )
                  }

export default RouterSwitch;