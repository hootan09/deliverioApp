import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store'
import { Provider } from 'react-redux'

import { useFonts } from 'expo-font';

import HomeScreen from './Screens/HomeScreen';
import ResturantScreen from './Screens/ResturantScreen';
import BasketScreen from './Screens/BasketScreen';
import PrepareOrderScreen from './Screens/PrepareOrderScreen';
import DeliveryScreen from './Screens/DeliveryScreen';
import TestMap from './Screens/TestMap';

const Stack = createNativeStackNavigator();


export default function App() {

  const [loaded] = useFonts({
    // 'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    // 'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    // 'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
  });
  


  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          //headerShown: false
        }} />
        <Stack.Screen name="ResturantScreen" component={ResturantScreen} options={{
          headerShown: false,
          presentation: 'modal'
        }} />
        <Stack.Screen name="BasketScreen" component={BasketScreen} options={{
          headerShown: false,
          presentation: 'modal'
        }} />
        <Stack.Screen name="PrepareOrderScreen" component={PrepareOrderScreen} options={{
          headerShown: false,
          presentation: 'fullScreenModal'
        }} />
        <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} options={{
          headerShown: false,
          presentation: 'fullScreenModal'
        }} />
        <Stack.Screen name="TestMap" component={TestMap} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
      </Provider>
  </NavigationContainer>
  );
}