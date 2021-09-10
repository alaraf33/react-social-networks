import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../componets/common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {login} from "../redax/auth_reducer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import style from './../componets/common/FormsControls/FormsControls.module.css';


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} type={"password"}
                       name={'password'} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}  type={'checkbox'}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formDate) =>{
        props.login(formDate.email, formDate.password, formDate.rememberMe);
    }

    if(props.isAuth){
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} ) (Login);