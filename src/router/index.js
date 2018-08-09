import React from 'react';
// import { Route, withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home';
import HomeTwo from '../pages/Home/HomeTwo.js';
import About from '../pages/About';
import AboutTwo from '../pages/About/AboutTwo.js';
import Mine from '../pages/Mine';
import MineTwo from '../pages/Mine/MineTwo.js';
import Main from '../pages/Main';
// import Login from '../pages/Login';

const routes = [
	{
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home/two',
    component: HomeTwo,
    exact: true,
  },
  {
    path: '/about/one',
    component: About,
    exact: true,
  },
  {
    path: '/about/two',
    component: AboutTwo,
    exact: true,
  },
  {
    path: '/mine/one',
    component: Mine,
    exact: true,
  },
  {
    path: '/mine/two',
    component: MineTwo,
    exact: true,
  },
	{
		component: Main
	}
]

const RouteConfig = () => {
  return (
    <Switch>
      {
        routes.map((route,i)=> (
          <Route key={i} path={route.path} exact={route.exact} component={route.component} />
        ))
      }
    </Switch>
  )
}

export default RouteConfig;
