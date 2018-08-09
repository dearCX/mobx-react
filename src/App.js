import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// 引入react-router配置
import Main from './pages/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';

const loggedIn = localStorage.getItem('loggedIn')

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {
        loggedIn ? <Main/> : <Route exact path="/" component={Login} />
      }
      </BrowserRouter>
    );
  }
}
export default App;
