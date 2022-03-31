import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { connect } from 'react-redux';
import { userSignIn, userLogOut, deleteAccount, changeEmail } from '../../Actions';

function Profile(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userIdToken, setUserIdToken] = useState(null)
    const [userStatus, setUserStatus] = useState(false)

    const signIn = () => {
        props.userSignIn({
            email: email,
            password: password
        })
    }

    const logOut = () => {
        props.userLogOut()
    }

    const deleteAccount = () => {
        props.deleteAccount(props.items.userData.userIdToken)
    }

    const changeEmail = () => {
        props.changeEmail(props.items.userData.userIdToken)
    }

    const checkData = () => {
        console.log('my email')
        console.log(props.items.userData.email)
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAELhgKu2XDB47eV0AGrDhrHxqb-o1gH6s',
            {
                idToken: props.items.userData.userIdToken,
                displayName: 'first name',
                returnSecureToken: true
            }).then((res) => {
                console.log('update ok')
                console.log(res.data)
            }).catch((error) => {
                console.log('error in name update ')
                console.error(error)
            })
    }

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.txt}>Profile Page</Text>
                <Button title='go to Home' onPress={() => props.navigation.navigate('Home')} />
                <Button title='check data' onPress={() => checkData()} />
            </View>
            {props.items.userData.userStatus ? (
                <View style={styles.userStatusView}>
                    <Text style={styles.userStatusTxt}>welcome {props.items.userData.email}</Text>
                    <Button title='change email' onPress={() => changeEmail()} />
                    <Button title='Logout' onPress={() => logOut()} />
                    <Button title='Delete account' onPress={() => deleteAccount()} />
                </View>
            ) : (
                <View>
                    <View style={styles.userStatusView}>
                        <Text style={styles.userStatusTxt}>please Login</Text>
                    </View>
                    <View style={styles.mainView}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter Name'
                            onChangeText={(e) => setName(e)}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter Email'
                            onChangeText={(e) => setEmail(e)}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter Password'
                            onChangeText={(e) => setPassword(e)}
                        />
                    </View>
                    <TouchableOpacity style={styles.signInView} onPress={() => signIn()}>
                        <Text style={styles.signInbtn}>SignIn</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const mapStateToProps = (state) => {
    const { items } = state;
    return { items };
};

const mapDispatchToProps = (dispatch) => ({
    userSignIn: (item) => dispatch(userSignIn(item)),
    userLogOut: () => dispatch(userLogOut()),
    deleteAccount: (item) => dispatch(deleteAccount(item)),
    changeEmail: (item) => dispatch(changeEmail(item))
})

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        textAlign: 'center',
    },
    mainView: {
        marginVertical: 20,
        marginHorizontal: 30,
    },
    textInput: {
        margin: 5,
        padding: 8,
        backgroundColor: '#e9e9e9',
        fontSize: 18,
    },
    signInView: {
        alignItems: 'center',
        backgroundColor: '#E8EAED',
        justifyContent: 'center',
        width: 100,
        marginLeft: 140,
    },
    signInbtn: {
        padding: 10,
        fontSize: 20,
    },
    userStatusView: {
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userStatusTxt: {
        textAlign: 'center',
        fontSize: 17,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
