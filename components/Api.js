import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://redux-test-1f9b2-default-rtdb.firebaseio.com' });

export const API = {
    userApi: {

        chating: async (item) => {
            try {
                await axiosInstance.post('/chat.json', {
                    message: item.message,
                    userId: item.userId,
                    opponentId: item.opponentId,
                });
                try {
                    const res = await axiosInstance
                        .get('/chat.json');
                    const item = Object.values(res.data);
                    return item;
                } catch (error) {
                    console.log('error to receive');
                    console.error(error);
                }
            } catch (error_1) {
                console.log('error to send');
                console.error(error_1);
            }
        },

        signIn: (item) => {
            return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAELhgKu2XDB47eV0AGrDhrHxqb-o1gH6s',
                {
                    email: item.email,
                    password: item.password,
                    returnSecureToken: true
                }).then((res) => {
                    const item = {
                        email: res.data.email,
                        idToken: res.data.idToken,
                    }
                    return item
                }).catch((error) => {
                    console.log('error in user signIn')
                    console.error(error)
                })
        },

        deleteUser: (item) => {
            return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyAELhgKu2XDB47eV0AGrDhrHxqb-o1gH6s',
                {
                    idToken: item,
                }).then((res) => {
                    console.log('delete user')
                    return null
                }).catch((error) => {
                    console.log('error in userDelete ')
                    console.error(error)
                })
        },

        changeEmail: (item) => {
            return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAELhgKu2XDB47eV0AGrDhrHxqb-o1gH6s',
                {
                    idToken: item,
                    email: 'newEmail@change.ok',
                    returnSecureToken: true
                }).then((res) => {
                    console.log('email change')
                    const item = {
                        email: res.data.email,
                        idToken: res.data.idToken,
                    }
                    return item
                }).catch((error) => {
                    console.log('error in change Email ')
                    console.error(error)
                })
        }

    }
}

module.exports = API;
