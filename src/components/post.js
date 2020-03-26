import React from 'react';
import { connect } from 'react-redux';

import { deletePost } from '../actions/postActions';

const Post = (props) => {

    const { post } = props;

    const handleClick = () => {
        props.deletePost(props.post.id);
        props.history.push('/');
    }

        console.log(props);

        const displayedPost = post ? (
            <div className="post">
                <h4 className="center">{post.title}</h4>
                <p>{post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={handleClick}>
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
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);