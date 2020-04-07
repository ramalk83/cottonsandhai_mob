import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Notifications from './Notification';

const bottomTabNavigator = createBottomTabNavigator(
    {
      Notification: Notifications,
      Explore: ExploreScreen,
    },
    {
      initialRouteName: 'Notifications'
    }
  );

  const AppContainer = createAppContainer(bottomTabNavigator);

export default AppContainer;