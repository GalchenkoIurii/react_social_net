import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import Posts from "./components/Posts/Posts";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Nav />
              <div className="app-content">
                  <Route path='/profile' render={ () => <Profile state={props.state}/> }/>
                  <Route path='/messages' render={ () => <Messages state={props.state} /> }/>
                  <Route path='/posts' render={ () => <Posts state={props.state} /> }/>
                  <Route path='/news' component={News}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
