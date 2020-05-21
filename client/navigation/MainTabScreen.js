import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/AuthScreens/HomeScreen';
import NotificationScreen from '../screens/ContactScreens/NotificationScreen';
import AccountScreen from '../screens/ContactScreens/AccountScreen';
import HelpScreen from '../screens/ContactScreens/HelpScreen';
import LogoutScreen from '../screens/AuthScreens/LogoutScreen';
import VendorStackNavigation  from './StackNavigators/vendorStackNavigation';

import SignupScreen from '../screens/AuthScreens/SignupScreen';
import TradeScreen from '../screens/TradeScreens/TradeScreen';
import styles from '../assets/css/style.js';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const AccountStack = createStackNavigator();
const TradeStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (  
  <Tab.Navigator headerMode="none" initialRouteName="Home"
  activeColor="black" inactiveColor="#434445"  barStyle={{ borderTopColor:'gray',backgroundColor:'white',borderTopWidth:0.5 }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: 'white',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color='black' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Notification',
        tabBarColor: 'white',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color='black' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={AccountStackScreen}
      options={{
        tabBarLabel: 'Account',
        tabBarColor: 'white',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color='black' size={26} />
        ),
      }}    
    />

  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = () => (
<HomeStack.Navigator    headerMode="none" initialRouteName="Home">
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
    
