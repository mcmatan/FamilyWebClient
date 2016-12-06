import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "../ui/components/App";
import LoginComponent from "../ui/components/LogInComponent";
import Dashboard from "../ui/components/Dashboard";
import Welcome from "../ui/components/Welcome";
import AddTask from "../ui/components/AddTask";
import {authServiceShared} from "./Services/AuthService";


const confirmAuth = (nextState, replace) => {

    const user = authServiceShared.getCurrentUser();
    if (!user) {
        replace({ pathname: '/', state: { nextPathname: nextState.location.pathname } });
    }
};

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="login" component={LoginComponent}/>
        <Route path="dashboard" component={Dashboard} onEnter={confirmAuth} />
        <Route path="addTask" component={AddTask} />
    </Route>
);