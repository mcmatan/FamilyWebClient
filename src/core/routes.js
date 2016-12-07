import React from "react";
import {Route} from "react-router";
import App from "../ui/components/App";
import LoginComponent from "../ui/components/LogInComponent";
import Dashboard from "../ui/components/Dashboard";
import AddTask from "../ui/components/AddTask";
import {authServiceShared} from "./Services/AuthService";


const confirmAuth = (nextState, replace) => {

    if (!authServiceShared.isLoggedIn()) {
        replace({ pathname: '/', state: { nextPathname: nextState.location.pathname } });
    }
};

const checkIfBase = (nextState, replace) => {
    if (authServiceShared.isLoggedIn() && nextState.routes.length === 1) {
        replace({ pathname: '/dashboard', state: { nextPathname: nextState.location.pathname } });
    }
};

export default (
    <Route path="/" component={App} onEnter={checkIfBase} >
        <Route path="login" component={LoginComponent}/>
        <Route path="dashboard" component={Dashboard} onEnter={confirmAuth} />
        <Route path="addTask" component={AddTask} />
    </Route>
);