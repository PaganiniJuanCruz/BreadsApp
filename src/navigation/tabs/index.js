import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../../screens/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import ShopNavigator from '../stacks/index'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logout } from '../../../app/api';

const BottomTabs = createBottomTabNavigator();

const BTabs = () => (
    <BottomTabs.Navigator>
        <BottomTabs.Screen name="Shop" component={ShopNavigator}
            options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                headerRight: (props) => (
                    <TouchableOpacity onPress={logout}>
                        <Text>
                            Log out
                        </Text>
                    </TouchableOpacity>
                ),
                tabBarIcon: () => <Ionicons name="md-home" size={30} color="black" /> 
            }}
        />
        <BottomTabs.Screen name="Cart" component={Cart} 
            options={{
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarIcon: () => <Ionicons name="md-cart" size={30} color="black" /> 
            }}
            />
    </BottomTabs.Navigator>
);

export default BTabs;

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