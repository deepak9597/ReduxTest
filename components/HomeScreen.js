import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import LinearGradient from 'react-native-linear-gradient';
import { checkPluginState } from 'react-native-reanimated/src/reanimated2/core';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
    const [index, setIndex] = useState();

    const check = () => {
        console.log('index is')
        console.log(index)
    }

    const imageData = [
        {
            imageSource: require('../src/assets/image/Slide19_2022-04-07/Slide19.png'),
        },
        {
            imageSource: require('../src/assets/image/Slide19_2022-04-07/image111.jpeg'),
        },
        {
            imageSource: require('../src/assets/image/Slide19_2022-04-07/simpleImage.jpeg'),
        },
    ]

    return (
        <View style={styles.root}>
            <View style={styles.topView}>
                <Text> some change </Text>
                <SwiperFlatList
                    showPagination
                    paginationStyleItemActive={styles.activedotstyle}
                    paginationStyleItemInactive={styles.dotstyle}
                    onChangeIndex={(e) => setIndex(e)}
                    data={imageData}
                    renderItem={({ item }) => (
                        <View>
                            <Image
                                style={styles.slideImage2}
                                source={item.imageSource}
                            />
                        </View>
                    )}
                />

            </View>
            <View style={styles.mainView}>

                {/* {index.index == 0 ? (
                    <View>
                        <Text style={styles.txtTitle}>Personal chefs Close to You</Text>
                        <Text style={styles.txtMain}>Your Chef helps thousands of people get an answer to their question “How do I connect with the best Personal chefs in my area?</Text>
                    </View>
                ) : index.index == 1 ? (
                    <View>
                        <Text style={styles.txtTitle}>Choose your Meal</Text>
                        <Text style={styles.txtMain}>We offer free custom quotes from Personal chefs near you, ready to cater your needs.</Text>
                    </View>
                ) : index.index == 2 ? (
                    <View>
                        <Text style={styles.txtTitle}>Find or Book your Chef</Text>
                        <Text style={styles.txtMain}>You'll be presented to a list of qualified professionals: reviews, price, everything is included!</Text>
                    </View>
                ) : (
                    <View />
                )} */}

                <TouchableOpacity style={styles.nextBtnView} onPress={() => navigation.navigate('Home')}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['rgb(241,91,58)', 'rgb(255,160,21)']}
                        style={styles.linearGradient}
                    >
                        <Text style={styles.nextBtn}>Next</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.skipBtn}>Skip</Text>
            </View>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
    },
    topView: {
        height: 457,
        width: windowWidth,
        backgroundColor: 'white',
    },
    dotstyle: {
        backgroundColor: '#999999',
        height: 8,
        width: 8,
        borderRadius: 5,
    },
    activedotstyle: {
        backgroundColor: '#F29F17',
        height: 8,
        width: 32,
        borderRadius: 22,
    },
    slideImage2: {
        height: 406,
        width: windowWidth,
        borderBottomLeftRadius: 180,
        borderBottomRightRadius: 180,
    },

    mainView: {
        height: windowHeight - 457,
        width: windowWidth,
        backgroundColor: '#FFFFFF',
    },
    txtTitle: {
        marginTop: 38,
        paddingHorizontal: 36,
        textAlign: 'center',
        fontSize: 22,
        lineHeight: 40,
        color: '#000000',
        fontFamily: 'Montserrat-Bold',
    },
    txtMain: {
        marginTop: 20,
        marginHorizontal: 20,
        color: '#666666',
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 22,
        fontFamily: 'Montserrat-Regular',
    },
    nextBtnView: {
        marginTop: 42,
        marginHorizontal: 32,
        width: windowWidth - 64,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        width: '100%',
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextBtn: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 22,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Medium',
    },
    skipBtn: {
        marginTop: 48,
        marginHorizontal: 30,
        textAlign: 'center',
        color: '#666666',
        fontSize: 15,
        lineHeight: 22,
        fontFamily: 'Montserrat-Regular',
    },
});

export default HomeScreen;
