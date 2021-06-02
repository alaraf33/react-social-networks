let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, massage: 'Hi, how are you?', likeCount: 12},
                {id: 2, massage: 'Its my first post', likeCount: 11},
                {id: 1, massage: 'you?', likeCount: 12},
                {id: 2, massage: 'first post', likeCount: 11}
            ],
            newPostText: 'it-kamasutra' // write text
        },
        dialogsPage: {
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
            ]
        }
    },
    _callSubscriber(){
        console.log('State changed');
    },

    getState(){
      return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                massage: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state .profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state .profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export default store;
window.state = store;