import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";

import App from './App';
import {addMessage, addPost, updateNewMessageData, updateNewPostData} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let render = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostData={updateNewPostData}
                 addMessage={addMessage} updateNewMessageData={updateNewMessageData} />
        </BrowserRouter>,
        document.getElementById('root'));
};

render(state);

subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
