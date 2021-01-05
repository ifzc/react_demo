import React, {useState} from 'react';
import './App.css';

import BasicLayout from './layouts/BasicLayout'
import LoginLayout from './layouts/LoginLayout'

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  // 父组件中的函数,接受一个参数
 const loginSet = (status:boolean) => {
  setLoginStatus(status)
};
  if(!loginStatus){
    return(
      <LoginLayout login={loginSet}/>
    )
  }else{
  return (
    <BasicLayout />
  );
  }
}

export default App;
