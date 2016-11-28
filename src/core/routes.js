import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../ui/components/App';
import LoginComponent from '../ui/components/LogInComponent'

export default (
    <Route path="/" component={App}>
        <Route path="login" component={LoginComponent}/>
    </Route>
);