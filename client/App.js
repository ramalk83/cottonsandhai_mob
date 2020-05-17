  import React,{useEffect,useState,Component} from 'react';

import { Button ,TextInput} from 'react-native-paper';
import {View, Text, StyleSheet, Image, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';

import MainTabScreen from './screens/navigation/MainTabScreen';
import RootStackNavigation  from './screens/navigation/StackNavigators/RootStackNavigation';
import VendorStackNavigation  from './screens/navigation/StackNavigators/vendorStackNavigation';
import TradeStackNavigation  from './screens/navigation/StackNavigators/TradeStackNavigation';
import LogoutStackNavigation  from './screens/navigation/StackNavigators/LogoutStackNavigation';
import HomeStackNavigation  from './screens/navigation/StackNavigators/HomeStackNavigation';
import DrawerComponent  from './screens/navigation/DrawerComponent';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


import { AsyncStorage } from 'react-native';
import styles from './assets/css/style.js';


const Stack=createStackNavigator();
const StackHome=createStackNavigator();


const App= ({ navigation }) => {
   const [isloggedin,setLogged] = useState(null)

   const detectLogin= async ()=>{
      const token = await AsyncStorage.getItem('token')
      if(token){
          setLogged(true)
      }else{
          setLogged(false)
      }
   }
  useEffect(()=>{
     detectLogin()
  },[])


return (
<NavigationContainer>
{isloggedin                   
?    
<StackHome.Navigator  headerMode="none">   
<StackHome.Screen  name="HomeDraw" component={DrawerComponent}  initialRouteName="Home" />                    
</StackHome.Navigator> 
:   
<Stack.Navigator  headerMode="none" initialRouteName="Login"> 
<Stack.Screen name="Root" component={RootStackNavigation}  />                  
</Stack.Navigator>    
}
  </NavigationContainer>
  );
};
export default App;