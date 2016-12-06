import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {reducer as formReducer} from "redux-form";
import AuthReducer from "./core/reducers/AuthReducer";
import routes from "./core/routes";
import {Router, browserHistory} from "react-router";
import thunk from "redux-thunk";

const reducers = {
    authReducer: AuthReducer,
    form: formReducer
};
const reducer = combineReducers(reducers);

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <div>
            <Router history={browserHistory} routes={routes}/>
        </div>
    </Provider>,
    document.getElementById('root')
);
