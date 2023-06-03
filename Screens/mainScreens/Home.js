import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from './PostsScreen';
import CommentsScreen from './CommentsScreen';
import MapScreen from './MapScreen';

const NestedScreen = createStackNavigator();


const Home = () => {
   
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen 
      options={{headerShown: false}} 
      name="Posts" component={PostsScreen} />
      <NestedScreen.Screen 
      options={{
        headerShown: false,
        tabBarStyle: {display: 'none'},          
      }}
      name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen 
      options={{headerShown: false}} 
      name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};
  

export default Home;