import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Detail extends Component {
    render() {
        const { container, text } = styles;
        return (
            <View style={container} >
                <Text style={text} >Detail</Text>
                <Text style={text} >{this.props.navigation.state.params.thamso}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'skyblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});