import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Some'Times</a>

                <ul className="right">
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/new-post">Create New</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);