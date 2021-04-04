import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
                    <div className={s.item}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHoRATlNY-kqzbPH1X6dK5tNFSgg4Y9UD3EQ&usqp=CAU' />
                        {props.massage}
                        {props.likeCount}
                        {props.smsCa}
                    </div>
    )
}

export default Post;