const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MASSAGE = 'SEND-MASSAGE';

const dialogsReducer = (state, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    }
    else if (action.type === SEND_MASSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.massages.push({id: 6, massage: body});
    }

    return state;
}

export const sendMessageCreator = () =>({type: SEND_MASSAGE})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;