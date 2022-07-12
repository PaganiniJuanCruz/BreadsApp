import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../../data/colors';

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
        <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
);