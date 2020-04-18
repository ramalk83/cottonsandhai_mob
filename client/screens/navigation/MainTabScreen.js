import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../AuthScreens/HomeScreen';
import NotificationScreen from '../ContactScreens/NotificationScreen';
import AccountScreen from '../ContactScreens/AccountScreen';
import HelpScreen from '../ContactScreens/HelpScreen';
import LogoutScreen from '../AuthScreens/LogoutScreen';
import VendorScreen from '../VendorScreens/VendorScreen';
import SignupScreen from '../AuthScreens/SignupScreen';
import styles from '../../assets/css/style.js';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const AccountStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  
  <Tab.Navigator headerMode="none" initialRouteName="Home"
    activeColor="blue" style={styles. topDrawerSection}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: 'black',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color='black' size={26} />
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
          <Icon name="ios-notifications" color='black' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={AccountStackScreen}
      options={{
        tabBarLabel: 'Account',
        tabBarColor: 'black',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color='black' size={26} />
        ),
      }}
    />
    
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = () => (
<HomeStack.Navigator    headerMode="none" >
<HomeStack.Screen name="Home" component={HomeScreen} />
<HomeStack.Screen name="Logout" component={LogoutScreen} />
<HomeStack.Screen name="Vendor" component={VendorScreen} />
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
    
