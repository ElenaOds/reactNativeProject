import { useFonts } from 'expo-font';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './Screens/auth/RegisterScreen';
import LoginScreen from "./Screens/auth/LoginScreen";

const AuthStack = createStackNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });


  return (
    <>

    <NavigationContainer>
      <AuthStack.Navigator>
      <AuthStack.Screen 
      options={{headerShown: false}}
      name='Login' component={LoginScreen} />
      <AuthStack.Screen 
      options={{headerShown: false}}
      name='Register' component={RegisterScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  
    </>
    
  );
}


