import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Restuarant from './screens/Restuarant';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Restuarant" component={Restuarant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;