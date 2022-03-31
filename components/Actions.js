import axios from 'axios';
import { userApi } from './Api'

const axiosInstance = axios.create({ baseURL: 'https://reactnative.dev' });

export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item,
    };
}

export const dataList = async () => {
    try {
        const response = await axiosInstance.get('/movies.json');
        return {
            type: 'POST_DATA',
            payload: response.data
        };
    } catch (error) {
        console.log('error');
        console.error(error);
    }
};

export const incrment = () => {
    return {
        type: 'INCRMENT',
    };
};

export const decrment = () => {
    return {
        type: 'DECRMENT',
    };
};

export const chatData = (item) => {
    return {
        type: 'CHAT_DATA',
        payload: userApi.chating(item)
    }
}

export const userSignIn = (item) => {
    return {
        type: 'USER_SignIn',
        payload: userApi.signIn(item)
    }
}
export const userLogOut = () => {
    return {
        type: 'USER_LogOut',
    }
}
export const deleteAccount = (item) => {
    return {
        type: 'USER_Delete',
        payload: userApi.deleteUser(item)
    }
}
export const changeEmail = (item) => {
    return {
        type: 'USER_ChangeEmail',
        payload: userApi.changeEmail(item)
    }
}
