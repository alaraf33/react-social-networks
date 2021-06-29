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

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                massage: state.newPostText,
                likeCount: 0
            };
                return {
                ...state,
                posts:[...state.posts, newPost],
                newPostText: ''
            };

        }

        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            };

        }
        default:
            return state;
        }
}


export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;