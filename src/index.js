import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import {createStore, combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import LogInReducer from "./core/reducers/LogInReducer";
import routes from './core/routes'
import { Router, browserHistory } from 'react-router';


const reducers = {
    logInReducer: LogInReducer,
    form: formReducer
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
