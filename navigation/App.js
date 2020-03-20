import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Feed from './src/screen/stack/Feed';
import Details from './src/screen/stack/Details';

import Tab1 from './src/screen/tabs/Tab1';
import Tab2 from './src/screen/tabs/Tab2';
import Tab3 from './src/screen/tabs/Tab3';


import Screen1 from './src/screen/drawer/Screen1';
import Screen2 from './src/screen/drawer/Screen2';
import Screen3 from './src/screen/drawer/Screen3';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const App = () =>{

 const createHomeStack = () => 
    <Stack.Navigator
      screenOptions={{
        gestureEnabled:true,
        gestureDirection: "horizontal",
      }}
      headerMode="float"
    >
      <Stack.Screen name="Feed" component={Feed} 
        options={{
          title:"MY FEED",
          headerStyle:{backgroundColor: "blue"},
          headerTintColor: "white"
        }}
      />
      <Stack.Screen name="Details" component={Details}/>
      <Stack.Screen name="Top Tabs" children={createTopTabs}/>
      <Stack.Screen name="Bottom Tabs" children={createBottomTabs}/>
    </Stack.Navigator>
   
const createTopTabs = ({route}) => 
  <MaterialTopTabs.Navigator>
    <MaterialTopTabs.Screen name="Tab1" component={Tab1}
      options={{title:route.params.name}}
    />
    <MaterialTopTabs.Screen name="Tab2" component={Tab2}/>
    <MaterialTopTabs.Screen name="Tab3" component={Tab3}/>
  </MaterialTopTabs.Navigator>

const createBottomTabs = () => 
  <MaterialBottomTabs.Navigator>
    <MaterialBottomTabs.Screen name="Tab1" component={Tab1}/>
    <MaterialBottomTabs.Screen name="Tab2" component={Tab2}/>
    <MaterialBottomTabs.Screen name="Tab3" component={Tab3}/>
  </MaterialBottomTabs.Navigator>


  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack}/>
        <Drawer.Screen name="Contacts" component={Screen1}/>
        <Drawer.Screen name="Favorits" component={Screen2}/>
        <Drawer.Screen name="Setting" component={Screen3}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
  
}

 
export default App;