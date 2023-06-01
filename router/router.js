import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RegisterScreen from '../Screens/auth/RegisterScreen';
import LoginScreen from "../Screens/auth/LoginScreen";
import PostsScreen from '../Screens/mainScreens/PostsScreen';
import CreatePostsScreen from '../Screens/mainScreens/CreatePostsScreen';
import ProfileScreen from '../Screens/mainScreens/ProfileScreen';

import Svg, { Path } from "react-native-svg";
import { View } from "react-native";

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
            const stroke = focused ? '#0096FF' : '#212121';
            return (
              <Svg 
              width={24}
              height={24}
              viewBox="0 0 24 24"
              >
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H10V10H3V3Z" stroke={stroke} stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M14 3H21V10H14V3Z" stroke={stroke} stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M14 14H21V21H14V14Z" stroke={stroke} stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M3 14H10V21H3V14Z" stroke={stroke} stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
              </Svg>
            );  
          },
        }}
        name='Posts' component={PostsScreen}></MainTab.Screen>
        <MainTab.Screen 
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 40, borderRadius: 20, backgroundColor: focused ? '#0096FF' : '#FF6C00' }}>
              <Svg 
              width={14}
              height={14}
              viewBox="0 0 14 14"
              >
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z" fill="white"/>
              </Svg>
              </View>
            );  
          },
        }}
        name='Create Posts' component={CreatePostsScreen}></MainTab.Screen>
        <MainTab.Screen 
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            const stroke = focused ? '#0096FF' : '#212121';
            return (
              <Svg 
              width={24}
              height={24}
              viewBox="0 0 24 24"
              >
              <Path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke={stroke} stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={stroke} stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
              </Svg>
            );  
          },
        }}
        name='Profile' component={ProfileScreen}></MainTab.Screen>
      </MainTab.Navigator>
  );
}
