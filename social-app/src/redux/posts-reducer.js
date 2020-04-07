const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA';

const postsReducer = (state, action) => {

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