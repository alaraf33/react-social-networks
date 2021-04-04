import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                My Post
                <div>
                <textarea></textarea>
                <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post massage="Hi, how are you? " likeCount='23' smsCa=' React Kabzda'/>
                    <Post massage="Its my first post "likeCount='0'/>
                    <Post massage="Good night!"/>
                    <Post massage="Today one Aprille day jokes!"/>
                </div>

            </div>
        </div>
    );
};

export default MyPosts;