import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from "./router/router";

export default function App() {
  const routing = useRoute(true);
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
     <NavigationContainer>
      {routing}
    </NavigationContainer>
    </>
  );
}


