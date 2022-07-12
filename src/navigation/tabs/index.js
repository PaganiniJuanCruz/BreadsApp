import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../../screens/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import AuthNavigathor from '../stacks/auth';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="Shop" component={AuthNavigathor}
            options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarIcon: () => <Ionicons name="md-home" size={30} color="black" /> 
            }}
        />
        <Tab.Screen name="Cart" component={Cart} 
            options={{
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarIcon: () => <Ionicons name="md-cart" size={30} color="black" /> 
            }}
            />
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "pink",
        shadowOffset: { width: 0, heigth: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        rigth: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})