import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {reducer as formReducer} from "redux-form";
import AuthReducer from "./core/reducers/AuthReducer";
import CreateTaskReducer from "./core/reducers/CreateTaskReducer";
import routes from "./core/routes";
import {Router, browserHistory} from "react-router";
import thunk from "redux-thunk";
import DataBaseReducer from "./core/reducers/DataBaseReducer";

const reducers = {
    authReducer: AuthReducer,
    createTaskReducer: CreateTaskReducer,
    dataBaseReducer: DataBaseReducer,
    form: formReducer
};
const reducer = combineReducers(reducers);

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(thunk)
);

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});


render(
    <Provider store={store}>
        <div>
            <Router history={browserHistory} routes={routes}/>
        </div>
    </Provider>,
    document.getElementById('root')
);
