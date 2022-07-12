import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home';
import Breads from '../../screens/Breads';
import { COLORS } from '../../data/colors';
import Details from '../../screens/Details';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{headerStyle: {
            backgroundColor: COLORS.primary},
            headerTintColor: COLORS.secondary,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Breads" component={Breads} />
        <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
);