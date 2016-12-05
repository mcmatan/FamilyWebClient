import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {login} from "../../core/actions/AuthActions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';


import {
    TextField
} from 'redux-form-material-ui'


const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const renderTextField = props => (
    <TextField hintText={props.label}
               floatingLabelText={props.label}
               errorText={props.touched && props.error}
               {...props}
    />
)

class LogInComponent extends Component {

    render() {
        const {dispatch} = this.props;
        const {loginError, handleSubmit, pristine, reset, submitting} = this.props;

        return (
            <form onSubmit={handleSubmit((values) => dispatch(login(values))) }>
                <Field name="username" component={TextField} hintText="User name"/>
                <Field name="password" component={TextField} hintText="Password"/>
                {loginError && <strong>{loginError}</strong>}
                <div>
                    <button type="submit" disabled={submitting}>Log In</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        )
    }
}

LogInComponent = reduxForm({
    form: 'login'
})(LogInComponent);


function mapStateToProps(state) {
    return {loginError: state.authReducer.loginError}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(LogInComponent)


