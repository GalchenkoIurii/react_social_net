import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages-reducer";
import postsReducer from "./posts-reducer";

let reducers = combineReducers({
    messagesReducer,
    postsReducer
});

let store = createStore();

export default store;