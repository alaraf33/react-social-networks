import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


let AddNewPostForm = (props) =>  {
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name= 'newPostText' component='textarea' />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
   )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {

    let postElements =
        props.posts.map( p => <Post massage={p.massage} likeCount={p.likeCount}/>);


    let newPostElement = React.createRef();


    let onAddPost = (values) => {
        props.addPost(values.newPostText);  //функция с мира бизнеса
    }

    return (
        <div className={s.postBlock}>
            <h3>My Post</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    );
};

export default MyPosts;