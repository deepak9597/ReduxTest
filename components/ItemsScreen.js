import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { addItem } from './Actions'

function ItemsScreen(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add items here!</Text>
            {props.items.possible.map((item, index) => (
                <Button
                    key={item}
                    title={item}
                    onPress={() => props.addItem(index)}
                />
            ))}

            <Button
                title="Back to home"
                onPress={() => props.navigation.navigate('Home')}
            />
        </View>
    );
}


const mapStateToProps = (state) => {
    const { items } = state;
    return { items };
};

const mapDispatchToProps = (dispatch) => ({
    // addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item })
    addItem: (item) => dispatch(addItem(item))
})

// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
//             addItem,
//         },
//         dispatch,
//     );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        marginVertical: 2,
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemsScreen);

