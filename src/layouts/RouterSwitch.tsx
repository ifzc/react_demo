import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom';

const Open = lazy(() => import('../routes/open'))
/* const LoginLayout = lazy(() => import('./LoginLayout')) */
const Dashboard = lazy(() => import('../routes/dashboard'))
const UserInfo = lazy(() => import('../routes/userCenter/userInfo'))
const UserSettings = lazy(() => import('../routes/userCenter/settings'))
const UserLog = lazy(() => import('../routes/userCenter/log'))
const ShareAccount = lazy(() => import('../routes/userCenter/share'))
const AssetsTable = lazy(() => import('../routes/assets'))
class RouterSwitch extends React.Component {
    render() {
        return (
            <Suspense fallback={<div className="suspense-box"><Spin size="large" /></div>}>
                <Switch>
                    <Route path='/dashboard' exact render={() => (
                        <Redirect to='/dashboard' />
                    )} />
                    <Route path='/assets' component={AssetsTable} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/user/info' component={UserInfo} />
                    <Route path='/user/settings' component={UserSettings} />
                    <Route path='/user/log' component={UserLog} />
                    <Route path='/user/share' component={ShareAccount} />
                    <Route path='/agent' component={Open} />
                </Switch>
            </Suspense>
        )
    }
}

export default RouterSwitch;