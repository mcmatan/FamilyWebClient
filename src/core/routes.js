import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../ui/components/App';
import LoginComponent from '../ui/components/LogInComponent';
import Dashboard from '../ui/components/Dashboard';
import Welcome from '../ui/components/Welcome';



function MatchWhenAuthed ({component: Component, authed, ...rest}) {
    return (
        <Match
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="login" component={LoginComponent}/>
        <Route path="dashboard" component={Dashboard} />
    </Route>
);