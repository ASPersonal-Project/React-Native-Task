import React,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';


const ShowScreen = ({navigation}) =>{
    const {data} = useContext(BlogContext);

    const blogPost = data.find((blogpost) => blogpost.id === navigation.getParam('id'));
    return (
       <View>
           <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
       </View>
    )
}


export default ShowScreen;
