import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import TechnologyPage from "../screens/Technology"
import HomePage from "../screens/Home"
import WelcomeScreen from "../screens/Welcomepage"
import Location from "../screens/Location";
import Message from "../screens/Message";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homepage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="Welcomepage" component={WelcomeScreen} options={{ headerShadown: false }} />
      <Stack.Screen name="Technologypage" component={TechnologyPage} options={{ headerShown: false }} />
      <Stack.Screen name="bottom" component={MyBottomTab} options={{ headerShown: false }} />
    </Stack.Navigator>

  )
}

function MyBottomTab() {
  return (

    <Tab.Navigator>

      <Tab.Screen name="home" component={WelcomeScreen} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: '#808080',
        tabBarIcon: ({ focused }) =>
          focused ? <Icon name='home' size={24} color={'blue'} /> : <Icon name='home' size={24} color={'#808080'} />
      }} />


      <Tab.Screen name="Tec" component={TechnologyPage} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: '#808080',
        tabBarIcon: ({ focused }) =>
          focused ? <Icon name='call' size={24} color={'blue'} /> : <Icon name='call' size={24} color={'#808080'} />
      }} />


      <Tab.Screen name="Welcome" component={Message} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: '#808080',
        tabBarIcon: ({ focused }) =>
          focused ? <Icon name='mail' size={24} color={'blue'} /> : <Icon name='mail' size={24} color={'#808080'} />
      }} />


      <Tab.Screen name="Location" component={Location} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: '#808080',
        tabBarIcon: ({ focused }) =>
          focused ? <Icon name='location-on' size={24} color={'blue'} /> : <Icon name='location-on' size={24} color={'#808080'} />
      }} />

      
    </Tab.Navigator>

  )
}

export default function Navigations() {
  return (
    <NavigationContainer>
      <Mystack />
    </NavigationContainer>
  )
}