import React from 'react'
import {View,Text,Button} from 'react-native';

const Details = ({navigation,route})=> {
    return (
        <View>
            <Text>{route.params.Name}</Text>
            <Button 
                title="View Bottom Tabs"
                onPress={() =>{navigation.navigate('Bottom Tabs',{name:"param1"})}}
                />
             <Button 
                title="View Top Tabs"
                onPress={() =>{navigation.navigate('Top Tabs',{name:"parma2"})}}
                />
        </View>
    )
}

export default Details
