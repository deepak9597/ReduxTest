import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.root}>
            <Text style={styles.txt}>Home Page</Text>
            <Button title='go to Preference' onPress={() => navigation.navigate('Preference')} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    txt: {
        marginTop: 50,
        textAlign: 'center',
    },
});

export default HomeScreen;
