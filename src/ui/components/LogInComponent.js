import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {login} from "../../core/actions/AuthActions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';


import {
    TextField
} from 'redux-form-material-ui'

class LogInComponent extends Component {

    render() {

        const style = {
            margin: 12,
        };

        const {dispatch} = this.props;
        const {loginError, handleSubmit, pristine, reset, submitting} = this.props;

        return (
            <form onSubmit={handleSubmit((values) => dispatch(login(values))) }>
                <Field name="username" component={TextField} hintText="User name"/>
                <Field name="password" component={TextField} hintText="Password"/>
                {loginError && <strong>{loginError}</strong>}
                <div>
                    <RaisedButton label="Login" style={style} type="Submit" />
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


