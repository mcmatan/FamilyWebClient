import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../ui/components/App';
import LoginComponent from '../ui/components/LogInComponent';
import Dashboard from '../ui/components/Dashboard';
import Welcome from '../ui/components/Welcome';
import {firebaseAuth} from '../core/firebase';


const confirmAuth = (nextState, replace) => {
    if (!firebaseAuth.currentUser) {
        replace({ pathname: '/', state: { nextPathname: nextState.location.pathname } });
    }
};

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="login" component={LoginComponent}/>
        <Route path="dashboard" component={Dashboard} onEnter={confirmAuth} />
    </Route>
);