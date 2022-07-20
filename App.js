import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Home from './Screens/Home';

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
      <Stack.Screen name="Home" component={Home} options={{
        //headerShown: false
      }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}