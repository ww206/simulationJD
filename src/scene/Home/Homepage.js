/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
//import Header from '../../widget/Header';
import Viewpaper from 'react-native-viewpager';

const banner_img=[
    require('../../images/banner/1.jpg'),
    require('../../images/banner/2.jpg'),
    require('../../images/banner/3.jpg'),
    require('../../images/banner/4.jpg')
];
export default class Homepage extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<Header/>*/}
                <Text>Homepage</Text>
                <Viewpaper

                > </Viewpaper>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d74047',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

