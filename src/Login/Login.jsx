import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../componets/common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {login} from "../redax/auth_reducer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import style from './../componets/common/FormsControls/FormsControls.module.css';


const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>

     {createField('Email', 'email', [required],Input)}
     {createField('Password', 'password', [required],Input, {type: "password"})}
     {createField(null,'rememberMe', [], Input, {type: "checkbox"}, 'remember me')}

            {error && <div className={style.formSummaryError}>
                {error}
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