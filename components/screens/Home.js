import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Home extends Component {
    render() {
        const { container, button, text } = styles;
        const { navigate } = this.props.navigation;
        return (
            <View style={container} >
                <Text>Home</Text>
                <TouchableOpacity
                    onPress={() => {navigate('Detail_Screen', {thamso: 'Hello, My name is Home'} )}}
                    style={button}
                >
                    <Text style={text} >Go to Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigate('DrawerOpen') }}
                    style={button}
                >
                    <Text style={text} >Go to Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        margin: 10,
        width: 150,
        height: 40,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});