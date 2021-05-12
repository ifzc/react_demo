import React, { Suspense } from 'react';
import { Spin } from 'antd'
import { routes } from '../router';
import { Route, Switch } from 'react-router-dom';

function RouterSwitch() {
  const numbers = routes;
  const listItems = numbers.map((item:any,index:number) =>
    <Route path={item.path} component={item.name} key={index} />
  );
  console.log(listItems)
        return (
            <Suspense fallback={<div className="suspense-box"><Spin size="large" /></div>}>
                <Switch>
                    {/* <Route path='/dashboard' exact render={() => (
                        <Redirect to='/dashboard' />
                    )} />
                    <Route path='/to' component={TodoList}/>
                    <Route path='/assets' component={AssetsTable} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/user/info' component={UserInfo} />
                    <Route path='/user/settings' component={UserSettings} />
                    <Route path='/user/log' component={UserLog} />
                    <Route path='/user/share' component={ShareAccount} />
                    <Route path='/agent' component={Open} /> */}
                    {listItems}
                </Switch>
            </Suspense>
        )
}

export default RouterSwitch;