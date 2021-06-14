const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MASSAGE = 'SEND-MASSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Sergio'},
        {id: 2, name: 'Anja'},
        {id: 3, name: 'Jon'},
        {id: 4, name: 'Irina'},
        {id: 5, name: 'Valentina'}
    ],
    massages: [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'How are you?'},
        {id: 3, massage: 'You'},
        {id: 4, massage: 'Yo'},
        {id: 5, massage: 'Yo'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

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