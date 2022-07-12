import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ShopNavigator from './tabs';
import AuthNavigator from './stacks/auth';

const Nav = () => {
    const [user, setUser] = useState();

    return (
        <NavigationContainer>
            {
                user?
                <ShopNavigator />
                : <AuthNavigator />
            }    
        </NavigationContainer>
    )
}


export default Nav;
