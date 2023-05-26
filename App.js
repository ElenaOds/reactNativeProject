// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { Dimensions } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Registration from './screens/Registration';

import { useFonts } from 'expo-font';
import RegistrationScreen from './screens/auth/RegistrationScreen';
import LoginScreen from './screens/auth/LoginScreen';
import React, { useEffect} from "react";
// import { Dimensions  } from "react-native";

// const MainStack = createStackNavigator(); 

export default function App() {
  // const [dimensions, setDimensions] = useState(Dimensions.get('window').width - 20*2);
  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    // 'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-700': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
    // 'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
  });
  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get('window').width;
  //   };
  //   Dimensions.addEventListener('change', onChange);
  //   return () => {
  //     Dimensions.removeEventListener('change', onChange);
  //   };
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <>
     {/* <RegistrationScreen />  */}
    <LoginScreen />
    </>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>

    //   <StatusBar style="auto" />
    // </View>
    // <NavigationContainer>
    //   <MainStack.Navigator>
    //     <MainStack.Screen name="Registration" component={Registration} />
    //     <MainStack.Screen name="Login" component={Login} options={{ title: "Start screen" }}/>
    //   </MainStack.Navigator>
    // </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
