import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../AuthScreens/HomeScreen';
import NotificationScreen from '../ContactScreens/NotificationScreen';
import AccountScreen from '../ContactScreens/AccountScreen';
import HelpScreen from '../ContactScreens/HelpScreen';
import LogoutScreen from '../AuthScreens/LogoutScreen';
import VendorStackNavigation  from './StackNavigators/vendorStackNavigation';

import SignupScreen from '../AuthScreens/SignupScreen';
import TradeScreen from '../TradeScreens/TradeScreen';
import styles from '../../assets/css/style.js';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const AccountStack = createStackNavigator();
const TradeStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  
  <Tab.Navigator headerMode="none" /*initialRouteName="Home"*/
  activeColor="black" inactiveColor="#434445"  barStyle={{ backgroundColor: 'lightgray' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: 'lightgray',
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
        tabBarColor: 'lightgray',
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
        tabBarColor: 'lightgray',
        tabBarIcon: ({color}) => (
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
<HomeStack.Screen name="Help" component={HelpScreen} />
<HomeStack.Screen name="Logout" component={LogoutScreen} />
<HomeStack.Screen name="Trade" component={TradeStackScreen} />
<HomeStack.Screen name="Vendor" component={VendorStackNavigation} />
</HomeStack.Navigator>
);

const DetailsStackScreen = () => (
<DetailsStack.Navigator  headerMode="none">
<DetailsStack.Screen name="Notification" component={NotificationScreen}  />
<DetailsStack.Screen name="Help" component={HelpScreen} />
<DetailsStack.Screen name="Logout" component={LogoutScreen} />
<DetailsStack.Screen name="Vendor" component={VendorScreen} />
</DetailsStack.Navigator>
);


const AccountStackScreen = () => (
  <AccountStack.Navigator  headerMode="none">
  <AccountStack.Screen name="Account" component={AccountScreen} />
  <AccountStack.Screen name="Help" component={HelpScreen} />
  <AccountStack.Screen name="Logout" component={LogoutScreen} />
  <AccountStack.Screen name="Vendor" component={VendorScreen} />
  </AccountStack.Navigator>
  );
    
  const TradeStackScreen = () => (
    <TradeStack.Navigator  headerMode="none">
    <TradeStack.Screen name="Account" component={TradeScreen} />
    </TradeStack.Navigator>
  );
      