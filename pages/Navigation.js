import React from 'react'
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import Home from './Home'
import Login from './Login'
import Settings from './Settings'
import { useSelector } from 'react-redux'

function Navigation(){

    const Logged = useSelector(state => state.loginReducer.isLoggedIn)

    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();

    const StackScreen = () => {
        return (
        <Stack.Navigator>
            {Logged ? 
                <Stack.Screen  name ='Home' component={DrawerNavigator}/> :
                <Stack.Screen  name ='Login' component={Login}/>
          }
        </Stack.Navigator>
        )
    }

    const DrawerNavigator = () => {
        return(
            <Drawer.Navigator>
                <Drawer.Screen  name ='Home' component={Home}/> 
                <Drawer.Screen  name ='Settings' component={Settings}/>
            </Drawer.Navigator>
        )
    }

    return (
       <NavigationContainer>
           <StackScreen />
      </NavigationContainer>
    )
}

export default Navigation
