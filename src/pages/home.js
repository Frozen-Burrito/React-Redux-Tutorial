import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import Pokeball from '../img/pokeball.png';

const Home = ({posts}) => {

    console.log(posts);

    const postList = posts.length ? (
        posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="Pokeball" />
                    <div className="card-content">
                        <Link to={`/${post.id}`}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="center">No posts yet</div>
    )

    return (
        <div className="container home">
            <h4 className="center">Home</h4>
            <p>Etiam faucibus mi non lectus aliquam, in sollicitudin massa ultrices. Curabitur ac ultrices est. Nullam rutrum commodo leo quis ultrices. Maecenas dui turpis, varius vitae metus sed, laoreet eleifend felis.</p>
            {postList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);