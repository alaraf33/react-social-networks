import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Sergio</div>
                <div className={s.dialog}>Anja</div>
                <div className={s.dialog}>Vitaljba</div>
                <div className={s.dialog}>Sveka</div>
                <div className={s.dialog}>Iriwa</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>You</div>
            </div>
        </div>
    )
}

export default Dialogs;