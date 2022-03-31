import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Pressable,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { chatData } from '../../Actions';

function Chat2(props) {
    const [messageTxt, setMessageTxt] = useState('')
    const senderId = 100;
    const receiverId = 200;
    const [data, setData] = useState([])

    const sendRedux = () => {
        props.chatData({
            message: messageTxt,
            userId: receiverId,
            opponentId: senderId
        })
    }

    return (
        <View style={styles.root}>

            <View style={styles.container}>
                <Text style={styles.txt}>Chat2 Page</Text>
                <Button title='go to Home' onPress={() => props.navigation.navigate('Home')} />
            </View>
            <View style={styles.mainView}>
                <View style={styles.mainView2}>
                    <FlatList
                        data={props.items.chatData}
                        renderItem={({ item }) => (
                            <View>
                                {item.userId == receiverId ? (
                                    <Pressable style={styles.chatView}>
                                        <Text style={styles.chat}>{item.message}</Text>
                                    </Pressable>
                                ) : (
                                    <Pressable style={styles.chatView2}>
                                        <Text style={styles.chat}>{item.message}</Text>
                                    </Pressable>
                                )}
                            </View>
                        )}
                    />
                </View>
            </View>

            <View style={styles.BottomView}>
                <TextInput
                    placeholder="Message"
                    placeholderTextColor={'black'}
                    style={styles.writetxt}
                    onChangeText={(e) => setMessageTxt(e)}
                />
                <TouchableOpacity style={styles.sendBtnView} onPress={() => sendRedux()}>
                    <Icon name="send" color={'black'} size={26} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const mapStateToProps = (state) => {
    const { items } = state;
    return { items };
};

const mapDispatchToProps = (dispatch) => ({
    chatData: (item) => dispatch(chatData(item))
})

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
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
        width: windowWidth - 20,
        height: windowHeight - 320,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: 10,
    },
    mainView2: {
        width: '100%',
    },
    chatView: {
        margin: 5,
        alignItems: 'flex-end',
    },
    chatView2: {
        margin: 5,
        alignItems: 'flex-start',
    },
    chat: {
        fontSize: 17,
    },

    BottomView: {
        position: 'absolute',
        bottom: 10,
        width: windowWidth - 30,
        height: 60,
        backgroundColor: '#e1e1e1',
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        marginHorizontal: 15,
    },
    writetxt: {
        marginLeft: 10,
        fontSize: 18,
        paddingLeft: 5,
        width: windowWidth - 110,
    },
    sendBtnView: {
        position: 'absolute',
        right: 10,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat2);
