import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

let render = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root'));
};

render(store.getState.call(store));

store.subscribe(() => {
    let state = store.getState.call(store);
    render(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
