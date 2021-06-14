import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());  //функция с мира бизнеса
    }

    let  onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action); //функция с мира бизнеса
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText} />)
}

export default MyPostsContainer;