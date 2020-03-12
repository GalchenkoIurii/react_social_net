import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">

        <nav className="nav">
            <ul>
                <li><a>Profile</a></li>
                <li><a>Messages</a></li>
                <li><a>Posts</a></li>
                <li><a>News</a></li>
            </ul>
        </nav>
        <section className="content">
            <div className="main-img">
                <img src="https://community.kodular.io/uploads/default/original/2X/6/6218d50608595a107c07c35a12979966a620d433.jpg" alt=""/>
            </div>
            <h2>Content</h2>
        </section>
    </div>
  );
}

export default App;
