import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile_reducer";

const MyPosts = (props) => {

    let postElements =
        props.posts.map( p => <Post massage={p.massage} likeCount={p.likeCount}/>);


    let newPostElement = React.createRef();


    let addPost = () => {
        debugger;
        props.dispatch(addPostActionCreator());  //функция с мира бизнеса
    }

    let  onPostChange = () => {
        let text = newPostElement.current.value;
        //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action); //функция с мира бизнеса
    }

    return (
        <div className={s.postBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value= {props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>

        </div>

    );
};

export default MyPosts;