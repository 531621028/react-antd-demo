import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './pages/Login';
import App from './pages/App';
import Mine from './pages/Mine';
import MainLayout from './layout/MainLayout';
import Register from './pages/Register';

ReactDOM.render(<BrowserRouter>
    <div>
        <Switch>
            <Route path='/pages' component={App}></Route>
            <Route path='/mine' component={Mine}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/' exact component={Login}></Route>
        </Switch>
    </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
