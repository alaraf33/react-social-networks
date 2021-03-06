import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        {id: 1, massage: 'Hi, how are you?', likeCount: 12},
        {id: 2, massage: 'Its my first post', likeCount: 11},
        {id: 1, massage: 'you?', likeCount: 12},
        {id: 2, massage: 'first post', likeCount: 11}
    ],
    newPostText: 'it-kamasutra',// write text
    profile: null
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
        }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch (setUserProfile(response.data));
    });
}

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;