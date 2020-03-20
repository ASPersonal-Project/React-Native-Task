import React from 'react'
import {View,Text,Button} from 'react-native';

const Feed = ({navigation})=> {
    return (
        <View>
            <Text>Feed</Text>
            <Button title="Go To Feed Item" 
                onPress={() => {navigation.navigate('Details',{Name:"Dee"})}}
            />
        </View>
    )
}

export default Feed;
