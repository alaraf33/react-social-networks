import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements =
        props.posts.map( p => <Post massage={p.massage} likeCount={p.likeCount}/>);


    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost();  //функция с мира бизнеса
    }

    let  onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>

        </div>

    );
};

export default MyPosts;