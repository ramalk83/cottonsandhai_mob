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
      initialRouteName="Home"
      activeColor="#fff"
    >
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
          tabBarColor: 'rgba(126, 197, 176, 0.993)',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: 'rgba(126, 197, 176, 0.993)',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
     
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator    screenOptions={{
        headerStyle: {
        backgroundColor: 'rgba(126, 197, 176, 0.993)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
  <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Cotton Sandhai',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="rgba(126, 197, 176, 0.993)" onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
   }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: 'rgba(126, 197, 176, 0.993)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Cotton Sandhai" component={NotificationScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="rgba(126, 197, 176, 0.993)" onPress={() => navigation.openDrawer()}></Icon.Button>
            
        )
      
        }} />
</DetailsStack.Navigator>
);
  

const AccountStackScreen = ({navigation}) => (
    <AccountStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: 'rgba(126, 197, 176, 0.993)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <AccountStack.Screen name="Cotton Sandhai" component={AccountScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="rgba(126, 197, 176, 0.993)" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </AccountStack.Navigator>
    );
      

