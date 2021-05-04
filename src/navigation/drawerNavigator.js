import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {TabNavigation} from './tabNavigator'
import {LoginStackScreen} from './loginStack'
import {useSelector} from 'react-redux'

export const DrawerNavigation = () => {

    const Logged = useSelector(state => state.loginReducer.isLoggedIn)
    const Drawer = createDrawerNavigator();

    return(
      <Drawer.Navigator>
        {Logged ? 
          <Drawer.Screen  name ='Home' component={TabNavigation}/>
          :
          <Drawer.Screen  name ='Login' component={LoginStackScreen}/>
        }
      </Drawer.Navigator>
    )
}