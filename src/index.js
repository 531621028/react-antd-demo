import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import App from './pages/App';
import Me from './components/Me';
import MainLayout from './layout/MainLayout';

ReactDOM.render(<BrowserRouter>
    <div>
        <Switch>
            <Route path='/' exact component={Login}></Route>
            <Route path='/pages' component={App}></Route>
            <Route path='/me' component={Me}></Route>
        </Switch>
    </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
