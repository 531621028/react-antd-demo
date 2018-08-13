import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainLayout from '../layout/MainLayout';
import UserList from './user/UserList';
import RoleList from './role/RoleList';



class App extends Component {
  render() {
    return (
      <div>
        <MainLayout>
          <Switch>
            <Route path='/pages/index' component={RoleList}></Route>
            <Route path='/pages/user/list' component={UserList}></Route>
            <Route path='/pages/role/list' component={RoleList}></Route>
          </Switch>
        </MainLayout>
      </div>
    );
  }

}
export default App;
