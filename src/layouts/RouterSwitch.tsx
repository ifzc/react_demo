import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd'
import { Route, Switch } from 'react-router-dom';
const Open = lazy(() => import('../routes/open'));
const Dashboard = lazy(() => import('../routes/dashboard'));
const UserInfo = lazy(() => import('../routes/userCenter/userInfo'));
const UserSettings = lazy(() => import('../routes/userCenter/settings'));
const UserLog = lazy(() => import('../routes/userCenter/log'));
const ShareAccount = lazy(() => import('../routes/userCenter/share'));
//asset
const AssetsTable = lazy(() => import('../routes/assets/index'));
const Detail = lazy(() => import('../routes/assets/detail'));
const TodoList = lazy(() => import('../routes/assets/test'));
//assetManagement
const AssetFingerprint = lazy(() => import('../routes/assetManagement/fingerprint'));
const AssetLog = lazy(() => import('../routes/assetManagement/log'));
const CustomLog = lazy(() => import('../routes/assetManagement/customLog'));
const AddCustomLog = lazy(() => import('../routes/assetManagement/addCustomLog'));
const AssetOperating = lazy(() => import('../routes/assetManagement/operating'));
//top
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
                </Switch>
            </Suspense>
        )
                  }

export default RouterSwitch;