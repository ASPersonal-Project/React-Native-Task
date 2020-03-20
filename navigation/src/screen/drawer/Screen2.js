import React from 'react';
import {View,Text,StyleSheet }from 'react-native';

const Screen2 = () =>{
    return (
        <View style={style.viewStyle}>
            <Text>Favorite</Text>
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle:{
        margin:30,
        fontSize:20
        //padding:20
    }
})

export default Screen2;
