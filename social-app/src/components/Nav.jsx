import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="item"><a>Profile</a></li>
                <li className="item"><a>Messages</a></li>
                <li className="item"><a>Posts</a></li>
                <li className="item"><a>News</a></li>
            </ul>
        </nav>
    );
}

export default Nav;