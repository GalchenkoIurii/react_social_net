import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let usersData = [
    {id: "john", name: "John"},
    {id: "jack", name: "Jack"},
    {id: "james", name: "James"}
];

let messagesData = [
    {id: 1, message: "First message"},
    {id: 2, message: "One more message"},
    {id: 3, message: "And one more message"}
];

ReactDOM.render(<App usersData={usersData} messagesData={messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
