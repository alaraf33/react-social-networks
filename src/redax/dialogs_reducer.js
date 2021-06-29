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


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MASSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                massages: [...state.massages, {id: 6, massage: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () =>({type: SEND_MASSAGE})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;