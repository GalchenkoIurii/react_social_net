const ADD_USER = 'ADD-USER';
const UPDATE_NEW_USER_DATA = 'UPDATE-NEW-USER-DATA';

let initialState = {
    usersData: [
        {id: "john", name: "John", avatarUrl: "https://www.arbse.net/Files/Warcraft3_tft/id149/warcraft_3_solution.jpg"},
        {id: "jack", name: "Jack", avatarUrl: "https://i.ytimg.com/vi/WxUeT4sfEB8/hqdefault.jpg"},
        {id: "james", name: "James", avatarUrl: "https://image.shutterstock.com/image-illustration/3d-render-abstract-face-analysis-260nw-1527977660.jpg"}
    ],
    newUserData: {
        id: "", name: "", avatarUrl: ""
    }
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_USER: {
            let newUser = {
                id: 4,
                name: "Some User",
                avatarUrl: state.newUserData.avatarUrl
            };

            state.usersData.push(newUser);

            state.newUserData = {};

            return state;
        }
        case UPDATE_NEW_USER_DATA: {
            state.newUserData = action.newUserData;
            return state;
        }
        default: {
            return state;
        }
    }

};

export default usersReducer;

export const addUserActionCreator = () => {
    return {
        type: ADD_USER
    };
};
export const updateNewUserDataActionCreator = (newUserData) => {
    return {
        type: UPDATE_NEW_USER_DATA,
        newUserData: newUserData
    };
};