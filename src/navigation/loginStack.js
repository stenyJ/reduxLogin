import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/Login'

export const LoginStackScreen = () => {

    const LoginStack = createStackNavigator()

    return(
      <LoginStack.Navigator>
      <LoginStack.Screen  name ='Login' component={Login}/>
      </LoginStack.Navigator>
    )
  }