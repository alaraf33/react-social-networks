import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, massage: 'Hi, how are you?', likeCount: 12},
            {id: 2, massage: 'Its my first post', likeCount: 11},
            {id: 1, massage: 'you?', likeCount: 12},
            {id: 2, massage: 'first post', likeCount: 11}
        ],
        newPostText: '' // write text
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
}

window.state = state;

export  let addPost = () => {

    let newPost = {
        id: 5,
        massage: state.profilePage.newPostText,
        likeCount: 0
    };
    state .profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export  let updateNewPostText = (newText) => {
    state .profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;