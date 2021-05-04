import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home'
import Details from '../screens/Details'

export const HomeStackScreen = ({navigation}) => {

    const HomeStack = createStackNavigator()

    return(
      <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#455A64',
        },
        headerTintColor: '#fff',
    }}>
      <HomeStack.Screen  name ='Home' component={Home}
      options={{
        title:'Home',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
          backgroundColor='#455A64' onPress = {() => navigation.openDrawer()}></Icon.Button>
        )
      }}/>
      <HomeStack.Screen  name ='Details' component={Details}/>
      </HomeStack.Navigator>
    )
  }