import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
                    <div className={s.item}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHoRATlNY-kqzbPH1X6dK5tNFSgg4Y9UD3EQ&usqp=CAU' />
                        post 1
                        <span>like</span>
                    </div>
    )
}

export default Post;