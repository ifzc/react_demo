import React, {useState}from 'react';
import './App.scss';
import store from './store';

import BasicLayout from './layouts/BasicLayout'
import LoginLayout from './layouts/LoginLayout'

function App() {
  const [token, setToken] = useState(store.getState().token);
  const change = () =>{
    setToken(store.getState().token)
  }
  //监听token变化
  store.subscribe(change);
  
  if(token===null || token===undefined || token===""){    
    return(
      <LoginLayout />
    )
  }else{
  return (
    <BasicLayout />
  );
  }
}

export default App;
