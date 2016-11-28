import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../core/actions/AuthActions'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const LogInComponent = (props) => {
    const { dispatch } = props;
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit( (values) => dispatch(login(values)))}>
            <Field name="username" type="text" component={renderField} label="Username"/>
            <Field name="password" type="password" component={renderField} label="Password"/>
            {error && <strong>{error}</strong>}
            <div>
                <button type="submit" disabled={submitting}>Log In</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(LogInComponent)

