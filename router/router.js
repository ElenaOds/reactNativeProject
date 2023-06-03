import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RegisterScreen from '../Screens/auth/RegisterScreen';
import LoginScreen from "../Screens/auth/LoginScreen";
import Home from '../Screens/mainScreens/Home';
import CreatePostsScreen from '../Screens/mainScreens/CreatePostsScreen';
import ProfileScreen from '../Screens/mainScreens/ProfileScreen';

import Grid from '../components/icons/Grid';
import Plus from '../components/icons/Plus';
import User from '../components/icons/User';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if(!isAuth) {
    return (
      <AuthStack.Navigator>
      <AuthStack.Screen 
      options={{headerShown: false}}
      name='Login' component={LoginScreen} />
      <AuthStack.Screen 
      options={{headerShown: false}}
      name='Register' component={RegisterScreen} />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator 
    screenOptions={{ tabBarShowLabel: false }}
      >
        <MainTab.Screen 
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Grid focused={focused}/>
           );  
          },
        }}
        name='Home' component={Home}>
        </MainTab.Screen>

        <MainTab.Screen 
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},          
          tabBarIcon: () => {
            return (
              <Plus/>
            )
          },
        }}
        name='Create Posts' component={CreatePostsScreen}>
        </MainTab.Screen>

        <MainTab.Screen 
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
          return <User focused={focused}/>
          },
        }}
        name='Profile' component={ProfileScreen}></MainTab.Screen>
      </MainTab.Navigator>
  );
}
