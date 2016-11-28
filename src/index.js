import React from "react";
import {render} from "react-dom";
import App from "./ui/components/App";
import {Provider} from "react-redux";
import "./index.css";
import {createStore, combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import LogInReducer from "./core/reducers/LogInReducer"


const reducers = {
    logInReducer: LogInReducer,
    form: formReducer
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
