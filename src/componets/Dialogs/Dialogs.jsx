import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id;

  return  <div className={s.dialog + ' ' + s.active}>
        <NavLink to= {path}>{props.name}{props.id}</NavLink>
    </div>
}

const Message =(props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name = "Sergio" id = "1"/>
                <DialogItem name = "Anja" id = "2"/>
                <DialogItem name = "Vitaljba" id = "3"/>
                <DialogItem name = "Sveka" id = "4"/>
                <DialogItem name = "Iriwa" id = "5"/>

            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="You"/>
            </div>
        </div>
    )
}

export default Dialogs;