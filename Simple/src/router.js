import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
// import screens
import Home from './home';
import Settings from './settings';
import { LogBox } from 'react-native';
import LoginScreen from './login';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const tabBarOptions = {
  activeTintColor: '#9381ff',

};
const TabNav = () => {
  return (
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Home"
          component={Home}

          
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
         
        />
      </Tab.Navigator>
  );
};


const RootNavigator = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator   
       screenOptions={{
       headerShown: false
  }}>
        <Stack.Screen name="LoginScreen"  component={LoginScreen} />
        <Stack.Screen name="Tab"  children={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;