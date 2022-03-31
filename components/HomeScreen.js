import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { decrment, incrment, dataList } from './Actions';

function HomeScreen(props) {

    const getDataList = () => {
        props.dataList()
    }
    const renderItem = ({ item }) => (
        <View style={styles.postdataView}>
            <Text style={styles.postdata}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.counters.value}</Text>
            <Button title='incrment value' onPress={() => props.incrment()} />
            <Button title='decrment value' onPress={() => props.decrment()} />
            <Text style={styles.text}>You have {props.items.current.length} items with value</Text>
            {props.items.current.map((item, index) => (
                <View>
                    <Text key={item} style={styles.text}>{item}</Text>
                </View>
            ))}
            <Button
                title="Add some Items"
                onPress={() => props.navigation.navigate('Item')}
            />
            <Button title='get Data' onPress={() => getDataList()} />
            <View style={styles.mainDataView}>
                <FlatList
                    data={props.items.postData.movies}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}


const mapStateToProps = (state) => {
    const { items } = state;
    const { counters } = state;
    return { items, counters };
};

const mapDispatchToProps = (dispatch) => ({
    incrment: () => dispatch(incrment()),
    decrment: () => dispatch(decrment()),
    dataList: () => dispatch(dataList())

})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginVertical: 2,
    },
    mainDataView: {
        alignItems: 'center',
    },
    postdataView: {
        marginVertical: 2,
    },
    postdata: {
        fontSize: 16,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
