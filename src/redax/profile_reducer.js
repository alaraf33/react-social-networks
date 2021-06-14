const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, massage: 'Hi, how are you?', likeCount: 12},
        {id: 2, massage: 'Its my first post', likeCount: 11},
        {id: 1, massage: 'you?', likeCount: 12},
        {id: 2, massage: 'first post', likeCount: 11}
    ],
    newPostText: 'it-kamasutra' // write text
}

const profileReducer = (state = initialState, action) =>{

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            massage: state.newPostText,
            likeCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = '';
    }
    else if(action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;