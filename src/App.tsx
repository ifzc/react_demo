import React, {useState}from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import { createBrowserHistory } from 'history'
import store from './store';

import BasicLayout from './layouts/BasicLayout'
import LoginLayout from './layouts/LoginLayout'

function App(){
  const [token, setToken] = useState(store.getState().token);
  const [open, setOpen] = useState(store.getState().open);
  const change = () =>{
    setToken(store.getState().token)
    setOpen(store.getState().open)
  }
  //监听token变化
  store.subscribe(change);
    
    return(
      
      <Router>
            <Route path="/login" component={LoginLayout}/>
            {token===null || token===undefined || token==="" ?
            <LoginLayout />
            :
            <BasicLayout />
    }
        </Router>
        
    )
  }

export default App;
