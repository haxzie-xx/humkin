import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import registerServiceWorker from './registerServiceWorker';
// eslint-disable-next-line
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
// import { createHashHistory } from 'history';

// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render((
    <Router>
      <Route path="/" component={Home}/>
       <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Router>
  ), document.getElementById('root'));
registerServiceWorker();
