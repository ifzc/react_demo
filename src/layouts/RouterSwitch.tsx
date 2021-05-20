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
                    {listItems}
                </Switch>
            </Suspense>
        )
}

export default RouterSwitch;