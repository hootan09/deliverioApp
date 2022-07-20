import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import HomeScreen from './Screens/HomeScreen';
import ResturantScreen from './Screens/ResturantScreen';

const Stack = createNativeStackNavigator();


export default function App() {

  const [loaded] = useFonts({
    // 'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    // 'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    // 'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
  });
  


  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
        //headerShown: false
      }} />
      <Stack.Screen name="ResturantScreen" component={ResturantScreen} options={{
        headerShown: false,
        presentation: 'modal'
      }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}