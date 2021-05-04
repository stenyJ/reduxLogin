import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import {HomeStackScreen} from './homeStack'
import Logout from '../screens/Logout'
import {useDispatch} from 'react-redux'
import {setLogoutState} from '../redux/actions'

export const TabNavigation = () => {
    
    const Tab = createBottomTabNavigator()
    const dispatch = useDispatch()
    
            return (
                <Tab.Navigator tabBarOptions={{
                    showLabel: false
                }}>
                    <Tab.Screen  name ='Home' component={HomeStackScreen}
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