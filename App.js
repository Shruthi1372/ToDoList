import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {CreateBottomTabNavigator} from 'react-navigation/bottom-tabs';
import Home from './screens/Home';
import History from './screens/History';
import IonIcons from 'react-native-vector-icons/IonIcons';

const Tab = CreateBottomTabNavigator();

export default function App () {
  return(
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions = {({route})=> ({
      tabBarIcon : ({focused, color, size}) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused
          ? 'home'
          : 'home-outline'
        } else if (route.name === "History") {
          iconName = focused
          ? 'create'
          : 'create-outline'
        }
        return <IonIcons name = {iconName} size = {size} color = {color}/>
      }, 
    })}
    tabBarOptions = {{
      activeTintColor : 'tomato',
      inactiveTintColor : 'grey',
    }} >
    <Tab.Screen name = 'Home' component = {Home} options = {{headerShown : false}}/>
    <Tab.Screen name = 'History' component = {History} options = {{headerShown : false}}/>
    </Tab.Navigator>
    </NavigationContainer>
  )
}