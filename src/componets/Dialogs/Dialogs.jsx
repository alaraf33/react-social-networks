import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElements = state.massages.map(m => <Message message={m.massage} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
      let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value ={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your massage'></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;