import React, {Component} from "react";
import CardComponent from "../views/Card";
import {Field, reduxForm} from "redux-form";

class LogInComponent extends Component {

    handleSubmit = (values) => {
        console.log(values);
    };

    render() {
        return (
            <div>
                <CardComponent>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" component="input" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" component="input" type="text"/>
                        </div>
                        <button type="Log in">Submit</button>
                    </form>
                </CardComponent>
            </div>
        )
    }
}

LogInComponent = reduxForm({
    form: 'login'
})(LogInComponent);

export default LogInComponent;