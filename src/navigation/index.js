import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import {DrawerNavigation} from './drawerNavigator'

function Navigation(){

    return (
       <NavigationContainer>
           <DrawerNavigation />
      </NavigationContainer>
    )
}

export default Navigation
