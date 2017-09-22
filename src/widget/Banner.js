/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import  Swiper from 'react-native-swiper';

export default class Banner extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                <Swiper style={styles.wrapper} height={200}
                        dot={<View style={{backgroundColor: 'rgba(0,0,0,0.8)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                >
                    <View style={styles.slide1}>
                        <Image source={require('../images/banner/1.jpg')}/>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={require('../images/banner/2.jpg')}/>
                    </View>
                    <View style={styles.slide3}>
                        <Image source={require('../images/banner/3.jpg')}/>
                    </View>
                    <View style={styles.slide3}>
                        <Image source={require('../images/banner/4.jpg')}/>
                    </View>
                </Swiper>
                </View>
                <View >
                    <Text>11111</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',

        backgroundColor: '#d74047',
    },
    Swiperpaper:{
        backgroundColor:'lightblue',
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
    //切割
    wrapper: {
        backgroundColor:'lightblue',
        //flex: 0.3,
        height:500,

    },
    slide1: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

