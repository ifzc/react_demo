import React from 'react';
import './App.css';

import BasicLayout from './layouts/BasicLayout'
import LoginLayout from './layouts/LoginLayout'

function App() {
  let token=localStorage.getItem('Token')
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
