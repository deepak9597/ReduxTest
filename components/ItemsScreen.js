import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

function ItemScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Item</Text>
        </View>
    );
}

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
});

export default ItemScreen;
