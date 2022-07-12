import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../../screens/Register';
import Access from '../../screens/Access';
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
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Access} />

    </Stack.Navigator>
);