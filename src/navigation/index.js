import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './stacks/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../app/firebase';
import ShopNavigator from './tabs';

const Nav = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
           if(user){
            setIsLogged(true);
           }else {
            setIsLogged(false);
           } 
        })
    }, [])
    return (
        <NavigationContainer>
            {
                isLogged
                    ? <ShopNavigator />
                    : <AuthNavigator />
            }    
        </NavigationContainer>
    )
}


export default Nav;
