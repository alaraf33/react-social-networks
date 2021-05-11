import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, massage: 'Hi, how are you?', likeCount: 12},
        {id: 2, massage: 'Its my first post', likeCount: 11},
        {id: 1, massage: 'you?', likeCount: 12},
        {id: 2, massage: 'first post', likeCount: 11}
    ]


    let postElements =
        posts.map( p => <Post massage={p.massage} likeCount={p.likeCount}/>);


    return (

        <div className={s.postBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>

        </div>

    );
};

export default MyPosts;