import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Sergio'},
        {id: 2, name: 'Anja'},
        {id: 3, name: 'Jon'},
        {id: 4, name: 'Irina'},
        {id: 5, name: 'Valentina'}
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let massages = [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'How are you?'},
        {id: 3, massage: 'You'},
        {id: 4, massage: 'Yo'},
        {id: 5, massage: 'Yo'}
    ]

    let messagesElements = massages.map(m => <Message message={m.massage}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;