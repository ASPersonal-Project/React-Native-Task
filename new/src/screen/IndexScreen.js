import React,{useContext} from 'react'
import {View,Text,StyleSheet, Button,FlatList,TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
   
    const {data,addBlogPost,deleteBlogPost} = useContext(BlogContext);
    return (
        <View>
            <Button title="Add" onPress={addBlogPost}/>
            <FlatList  
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) =>{
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show',{id: item.id})}>
                    <View style={styles.row}>
                <Text>{item.title}-{item.id }</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather name="trash"/>
                </TouchableOpacity>
                </View>
                </TouchableOpacity>

                );
                }}

            />
        </View>
    )
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}><Feather name="plus" size={30}/></TouchableOpacity> 
    }
}


const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    }
})

export default IndexScreen;
