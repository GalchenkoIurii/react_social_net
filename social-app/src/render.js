import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageData, updateNewPostData} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let render = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostData={updateNewPostData}
                 addMessage={addMessage} updateNewMessageData={updateNewMessageData} />
        </BrowserRouter>,
        document.getElementById('root'));
};
