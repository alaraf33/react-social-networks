import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
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
                    <Post massage="Hi, how are you? " likeCount='23' smsCa=' React Kabzda'/>
                    <Post massage="Its my first post " likeCount='0'/>
                    <Post massage="Good night!"/>
                    <Post massage="Today one Aprille day jokes!"/>
                </div>

            </div>

    );
};

export default MyPosts;