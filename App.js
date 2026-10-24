import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Detalhes from './src/screens/Detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Receitas' }} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}