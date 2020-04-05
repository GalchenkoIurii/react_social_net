import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import App from './App';
import {BrowserRouter} from "react-router-dom";

let render = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostData={store.updateNewPostData.bind(store)}
                 addMessage={store.addMessage.bind(store)} updateNewMessageData={store.updateNewMessageData.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root'));
};

render(store.getState());

store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
