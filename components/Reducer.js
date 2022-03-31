import { combineReducers } from 'redux';

const INITIAL_STATE = {
    current: [],
    possible: ['One', 'Two', 'Three', 'Four', 'Five'],
    postData: [],
    chatData: null,
    userData: {
        name: '',
        email: '',
        password: '',
        userIdToken: null,
        userStatus: false,
    }

};

const itemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const { current, possible } = state;
            const addedItem = possible.splice(action.payload, 1);
            current.push(addedItem);
            const newState = { ...state, current, possible };
            return newState;
        case 'POST_DATA':
            return { ...state, postData: action.payload }
        case 'CHAT_DATA':
            return { ...state, chatData: action.payload }
        case 'USER_SignIn':
            return { ...state, userData: { ...state.userData, email: action.payload.email, userIdToken: action.payload.idToken, userStatus: true } }
        case 'USER_LogOut':
            return { ...state, userData: { ...state.userData, email: '', userIdToken: null, userStatus: false } }
        case 'USER_Delete':
            return { ...state, userData: { ...state.userData, email: '', userIdToken: null, userStatus: false } }
        case 'USER_ChangeEmail':
            return { ...state, userData: { ...state.userData, email: action.payload.email, userIdToken: action.payload.idToken, userStatus: true } }
        default:
            return state;
    }
};

const counterReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'INCRMENT':
            return { value: state.value + 1 };
        case 'DECRMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

export default combineReducers({
    items: itemsReducer,
    counters: counterReducer
});
