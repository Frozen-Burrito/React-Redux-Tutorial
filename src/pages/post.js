import React, {useState} from 'react';
import { connect } from 'react-redux';

import { deletePost, addPost } from '../actions/postActions';

const Post = (props) => {

    const [state, setstate] = useState('Hello');

    const { post } = props;

    const removePost = () => {
        props.deletePost(props.post.id);
        props.history.push('/');
    }

    const addNewPost = () => {
        props.addPost({id: 4, title: 'Added Post', body: 'This is random text with no logic, just to fill my post.'},)
    }

    console.log(props);

    const displayedPost = post ? (
        <div className="post">
            <h4 className="center">{post.title}</h4>
            <p>{post.body}</p>
            <div className="center">
                <button className="btn grey" onClick={removePost}>
                    Delete Post
                </button>
            </div>
        </div> 
    ) : (
        <div className="center">Loading Post...</div>
    )

    return (
        <div className="container">
            {displayedPost}
        </div>
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
        deletePost: (id) => {dispatch(deletePost(id))},
        addPost: (post) => {dispatch(addPost(post))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);