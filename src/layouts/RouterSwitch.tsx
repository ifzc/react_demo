import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom';

const Dashboard = lazy(() => import('../routes/dashboard'))
const UserInfo = lazy(() => import('../routes/userCenter/userInfo'))
const UserSettings = lazy(() => import('../routes/userCenter/settings'))
const UserLog = lazy(() => import('../routes/userCenter/log'))

class RouterSwitch extends React.Component {
    render() {
        return (
            <Suspense fallback={<div className="suspense-box"><Spin size="large" /></div>}>
                <Switch>
                    <Route path='/' exact render={() => (
                        <Redirect to='/dashboard' />
                    )} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/user/info' component={UserInfo} />
                    <Route path='/user/settings' component={UserSettings} />
                    <Route path='/user/log' component={UserLog} />
                </Switch>
            </Suspense>
        )
    }
}
export default RouterSwitch;