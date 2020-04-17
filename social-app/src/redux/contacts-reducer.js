const ADD_CONTACT = 'ADD-CONTACT';
const UPDATE_NEW_CONTACT_DATA = 'UPDATE-NEW-CONTACT-DATA';
const RENDER_CONTACTS = 'RENDER-CONTACTS';

let initialState = {
    contactsData: [
        {id: 1, name: "Genry", avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2EWiPWkXNn2VBN_RdN0nJ2Rn5huij1ovZQZmetyG03Armpnf2"},
        {id: 2, name: "Andrew", avatarUrl: "https://cdn.igromania.ru/mnt/news/d/6/e/d/a/d/87586/e0d6d89899ada4cf_1920xH.jpg"}
    ],
    newContactData: {}
};

const contactsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_CONTACT: {
            let newContact = {
                id: 4,
                name: "Some User",
                avatarUrl: state.newContactData.avatarUrl
            };

            state.contactsData.push(newContact);

            state.newContactData = {};

            return state;
        }
        case UPDATE_NEW_CONTACT_DATA: {
            state.newContactData = action.newContactData;
            return state;
        }
        case RENDER_CONTACTS: {
            return state;
        }
        default: {
            return state;
        }
    }

};

export default contactsReducer;

export const addContactActionCreator = () => {
    return {
        type: ADD_CONTACT
    };
};
export const updateNewContactDataActionCreator = (newContactData) => {
    return {
        type: UPDATE_NEW_CONTACT_DATA,
        newContactData: newContactData
    };
};
export const renderContactsActionCreator = () => {
    return {
        type: RENDER_CONTACTS
    };
};