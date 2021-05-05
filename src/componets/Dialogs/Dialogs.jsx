import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}{props.id}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsDate = [
        {id: 1, name: 'Sergio'},
        {id: 2, name: 'Anja'},
        {id: 3, name: 'Jon'},
        {id: 4, name: 'Irina'},
        {id: 5, name: 'Valentina'}
    ]
    let massagesDate = [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'How are you?'},
        {id: 3, massage: 'You'},
        {id: 4, massage: 'Yo'},
        {id: 5, massage: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsDate[0].name} id={dialogsDate[0].id}/>
                <DialogItem name={dialogsDate[1].name} id={dialogsDate[1].id}/>
                <DialogItem name={dialogsDate[2].name} id={dialogsDate[2].id}/>
            </div>
            <div className={s.messages}>
                <Message message={massagesDate[0].massage}/>
                <Message message={massagesDate[1].massage}/>
                <Message message={massagesDate[2].massage}/>

            </div>
        </div>
    )
}

export default Dialogs;