import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import AccountScreen from './screens/AccountScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const AccountStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  
  <Tab.Navigator 
  headerMode="none"
    initialRouteName="Home"
    activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: 'rgba(126, 197, 176, 0.993)',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Notification',
        tabBarColor: 'black',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={AccountStackScreen}
      options={{
        tabBarLabel: 'Account',
        tabBarColor: 'rgba(126, 197, 176, 0.993)',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
   
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = () => (
<HomeStack.Navigator    headerMode="none" >
<HomeStack.Screen name="Home" component={HomeScreen} />
</HomeStack.Navigator>
);

const DetailsStackScreen = () => (
<DetailsStack.Navigator  headerMode="none">
<DetailsStack.Screen name="Notification" component={NotificationScreen}  />
</DetailsStack.Navigator>
);


const AccountStackScreen = () => (
  <AccountStack.Navigator  headerMode="none">
  <AccountStack.Screen name="Account" component={AccountScreen} />
  </AccountStack.Navigator>
  );
    