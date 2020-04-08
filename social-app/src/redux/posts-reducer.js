const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA';

let initialState = {
    postsData: [
        {id: 1, title: "First post", postContent: "First post content"},
        {id: 2, title: "Second post", postContent: "Second post content"},
        {id: 3, title: "Third post", postContent: "Third post content"}
    ],
    newPostData: ""
};

const postsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                title: "Fourth post",
                postContent: state.newPostData
            };

            state.postsData.push(newPost);

            state.newPostData = "";

            return state;
        }
        case UPDATE_NEW_POST_DATA: {
            state.newPostData = action.newPostText;
            return state;
        }
        default: {
            return state;
        }
    }

};

export default postsReducer;

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};
export const updateNewPostDataActionCreator = (postText) => {
    return {
        type: UPDATE_NEW_POST_DATA,
        newPostText: postText
    };
};