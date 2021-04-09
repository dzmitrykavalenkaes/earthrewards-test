import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'screens/Home';
import Profile from 'screens/Profile';

const tabBarOptions = {
  style: {
    paddingBottom: 15,
  },
  labelStyle: {
    fontSize: 18,
  },
  activeTintColor: '#1ca289',
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
