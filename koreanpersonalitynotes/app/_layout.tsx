import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/components/navigation/HomeScreen';
import SelectMethodScreen from '@/components/navigation/SelectMethod';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SelectMethod" component={SelectMethodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
