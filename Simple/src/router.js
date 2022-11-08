import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import screens
import Home from './home';
import Settings from './settings';
import { LogBox } from 'react-native';
import LoginScreen from './login';
const Tab = createBottomTabNavigator();
const tabBarOptions = {
  activeTintColor: '#9381ff',

};
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Home"
          component={LoginScreen}

          
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
         
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;