import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

const App = () => {
  return (
    <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-content">
            {/*<Profile />*/}
            <Messages />
        </div>
    </div>
  );
}

export default App;
