let store = {
    _state: {
        usersData: [
            {id: "john", name: "John", avatarUrl: "https://www.arbse.net/Files/Warcraft3_tft/id149/warcraft_3_solution.jpg"},
            {id: "jack", name: "Jack", avatarUrl: "https://i.ytimg.com/vi/WxUeT4sfEB8/hqdefault.jpg"},
            {id: "james", name: "James", avatarUrl: "https://image.shutterstock.com/image-illustration/3d-render-abstract-face-analysis-260nw-1527977660.jpg"}
        ],
        messagesData: [
            {id: 1, message: "First message"},
            {id: 2, message: "One more message"},
            {id: 3, message: "And one more message"}
        ],
        newMessageData: "",
        postsData: [
            {id: 1, title: "First post", postContent: "First post content"},
            {id: 2, title: "Second post", postContent: "Second post content"},
            {id: 3, title: "Third post", postContent: "Third post content"}
        ],
        newPostData: "",
        contactsData: [
            {id: 1, name: "Genry", avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2EWiPWkXNn2VBN_RdN0nJ2Rn5huij1ovZQZmetyG03Armpnf2"},
            {id: 2, name: "Andrew", avatarUrl: "https://cdn.igromania.ru/mnt/news/d/6/e/d/a/d/87586/e0d6d89899ada4cf_1920xH.jpg"}
        ]
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.newMessageData
        };

        this._state.messagesData.push(newMessage);

        this._state.newMessageData = "";

        this._callSubscriber(this._state);
    },
    updateNewMessageData(newMessageText) {

        this._state.newMessageData = newMessageText;

        this._callSubscriber(this._state);
    },
    addPost() {
        let newPost = {
            id: 4,
            title: "Fourth post",
            postContent: this._state.newPostData
        };

        this._state.postsData.push(newPost);

        this._state.newPostData = "";

        this._callSubscriber(this._state);
    },
    updateNewPostData(newPostText) {

        this._state.newPostData = newPostText;

        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;

window.store = store;

// let render = () => {
//     console.log('state changed');
// };

// let state = {
//     usersData: [
//         {id: "john", name: "John", avatarUrl: "https://www.arbse.net/Files/Warcraft3_tft/id149/warcraft_3_solution.jpg"},
//         {id: "jack", name: "Jack", avatarUrl: "https://i.ytimg.com/vi/WxUeT4sfEB8/hqdefault.jpg"},
//         {id: "james", name: "James", avatarUrl: "https://image.shutterstock.com/image-illustration/3d-render-abstract-face-analysis-260nw-1527977660.jpg"}
//     ],
//     messagesData: [
//         {id: 1, message: "First message"},
//         {id: 2, message: "One more message"},
//         {id: 3, message: "And one more message"}
//     ],
//     newMessageData: "",
//     postsData: [
//         {id: 1, title: "First post", postContent: "First post content"},
//         {id: 2, title: "Second post", postContent: "Second post content"},
//         {id: 3, title: "Third post", postContent: "Third post content"}
//     ],
//     newPostData: "",
//     contactsData: [
//         {id: 1, name: "Genry", avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2EWiPWkXNn2VBN_RdN0nJ2Rn5huij1ovZQZmetyG03Armpnf2"},
//         {id: 2, name: "Andrew", avatarUrl: "https://cdn.igromania.ru/mnt/news/d/6/e/d/a/d/87586/e0d6d89899ada4cf_1920xH.jpg"}
//     ]
// };

// export const addMessage = () => {
//     let newMessage = {
//         id: 4,
//         message: state.newMessageData
//     };
//
//     state.messagesData.push(newMessage);
//
//     state.newMessageData = "";
//
//     render(state);
// };

// export const updateNewMessageData = (newMessageText) => {
//
//     state.newMessageData = newMessageText;
//
//     render(state);
// };

// export const addPost = () => {
//     let newPost = {
//         id: 4,
//         title: "Fourth post",
//         postContent: state.newPostData
//     };
//
//     state.postsData.push(newPost);
//
//     state.newPostData = "";
//
//     render(state);
// };

// export const updateNewPostData = (newPostText) => {
//
//     state.newPostData = newPostText;
//
//     render(state);
// };

// export const subscribe = (observer) => {
//     render = observer;
// };

// export default state;
