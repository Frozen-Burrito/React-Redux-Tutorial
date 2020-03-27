import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addPost } from '../actions/postActions';

const NewPost = (props) => {

    const [post, setPost] = useState(
        {
            id: Math.floor(Math.random() * 101),
            title: '',
            body: '',
        }
    );

    const updatePost = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    }

    const submitPost = e => {
        e.preventDefault();
        console.log(post);
        props.addPost(post);
    }

    return (
        <form className="center container" onSubmit={submitPost}>
            <h1>Add New Post</h1>

            <input type="text" placeholder="Title" name="title" value={post.title} onChange={updatePost}/>
            <input type="text" placeholder="Content" name="body" value={post.body} onChange={updatePost}/>

            <button className="btn green">Add Post</button>

        </form>
    )
}

const mapStateToProps = (state, ownProps) => {

    let id = ownProps.match.params.post_id;

    return {
        post: state.posts.find(post => post.id == id)
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {dispatch(addPost(post))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);