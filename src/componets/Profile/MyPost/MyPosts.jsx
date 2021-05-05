import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
        {id: 1, massage: 'Hi, how are you?', likeCount: 12},
        {id: 2, massage: 'Its my first post', likeCount: 11}
    ]

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
                <Post massage={postData[0].massage} likeCount={postData[0].likeCount}/>
                <Post massage={postData[1].massage} likeCount={postData[1].likeCount}/>
            </div>

        </div>

    );
};

export default MyPosts;