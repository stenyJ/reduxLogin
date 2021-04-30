import React from 'react'
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Settings from './Settings'
import { useSelector,useDispatch} from 'react-redux'
import {setLogoutState} from '../redux/actions'

function Navigation(){

    const Logged = useSelector(state => state.loginReducer.isLoggedIn)
    const dispatch = useDispatch()

    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator()

    const StackScreen = () => {
        return (
        <Stack.Navigator>
            {Logged ? 
                <Stack.Screen  name ='Home' component={DrawerNavigator}/> 
                :
                <Stack.Screen  name ='Login' component={Login}/>
          }
        </Stack.Navigator>
        )
    }

    const DrawerNavigator = () => {
        return(
            <Drawer.Navigator>
                <Drawer.Screen  name ='Home' component={TabNavigator}/> 
                <Drawer.Screen  name ='Settings' component={Settings}/>
            </Drawer.Navigator>
        )
    }

    const TabNavigator = () => {
        return (
            <Tab.Navigator tabBarOptions={{
                showLabel: false
            }}>
                <Tab.Screen  name ='Home' component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => <Icon name="home" color="#333" size={24} />,
                  }}/> 
                <Tab.Screen name="Logout" component={Logout}
                options={{
                    tabBarIcon: () => <Icon name="log-out" size={23} 
                    onPress = {() => dispatch(setLogoutState())}></Icon>
                    }}/>
            </Tab.Navigator>
        )
    }

    return (
       <NavigationContainer>
           <StackScreen />
      </NavigationContainer>
    )
}

export default Navigation
