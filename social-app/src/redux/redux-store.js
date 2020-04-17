import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages-reducer";
import postsReducer from "./posts-reducer";
import usersReducer from "./users-reducer";
import contactsReducer from "./contacts-reducer";

let reducers = combineReducers({
    messages: messagesReducer,
    posts: postsReducer,
    users: usersReducer,
    contacts: contactsReducer
});

let store = createStore(reducers);

export default store;