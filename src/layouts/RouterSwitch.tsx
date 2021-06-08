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
                    <Route path='/detail' component={Detail} />
                </Switch>
            </Suspense>
        )
                  }

export default RouterSwitch;