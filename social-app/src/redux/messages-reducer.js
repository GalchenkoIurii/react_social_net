const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE-NEW-MESSAGE-DATA';

const messagesReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageData
            };

            state.messagesData.push(newMessage);

            state.newMessageData = "";

            return state;
        }
        case UPDATE_NEW_MESSAGE_DATA: {
            state.newMessageData = action.newMessageText;
            return state;
        }
        default: {
            return state;
        }
    }
};

export default messagesReducer;

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    };
};
export const updateNewMessageDataActionCreator = (messageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_DATA,
        newMessageText: messageText
    };
};