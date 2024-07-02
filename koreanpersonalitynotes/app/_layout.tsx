import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/components/navigation/HomeScreen';
import SelectMethodScreen from '@/components/navigation/SelectMethod';
import RandomNote from '@/components/navigation/RandomNote';
import SearchWrite from '@/components/navigation/SearchWrite';
import LearnMoreView from '@/components/navigation/LearnMoreView';

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
        <Stack.Screen name="RandomNote" component={RandomNote} />
        <Stack.Screen name="SearchNote" component={SearchWrite} />
        <Stack.Screen name="LearnMoreView" component={LearnMoreView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
