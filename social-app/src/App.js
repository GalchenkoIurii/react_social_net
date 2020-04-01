import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import Posts from "./components/Posts/Posts";
import News from "./components/News/News";
import {Route} from "react-router-dom";

const App = (props) => {
  return (
          <div className="app-wrapper">
              <Header />
              <Nav state={props.state} />
              <div className="app-content">
                  <Route path='/profile' render={ () => <Profile state={props.state} addPost={props.addPost} updateNewPostData={props.updateNewPostData} /> }/>
                  <Route path='/messages' render={ () => <Messages state={props.state} addMessage={props.addMessage} updateNewMessageData={props.updateNewMessageData} /> }/>
                  <Route path='/posts' render={ () => <Posts state={props.state} /> }/>
                  <Route path='/news' component={News}/>
              </div>
          </div>
  );
};

export default App;
