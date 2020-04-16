
import React,{useEffect,useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {StyleSheet,
  View,
  Text,
 
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawerContent } from './CustomDrawerContent';
import MainTabScreen from './MainTabScreen';

import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen'
import AddVendor from './screens/Add_vendor';
import NotificationScreen from './screens/NotificationScreen';
import AccountScreen from './screens/AccountScreen';
import VendorScreen from './screens/VendorScreen';
import TradeScreen from './screens/TradeScreen';
import HelpScreen from './screens/HelpScreen';
import ContactScreen from './screens/ContactScreen';
import LogoutScreen from './screens/LogoutScreen';
import { AsyncStorage } from 'react-native';


const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const stackNavigator=()=>{
<Stack.Navigator headerMode="none">
<Stack.Screen name="loading" component={LoadingScreen} />
<Stack.Screen name="home" component={HomeScreen} />
<Stack.Screen name="login" component={LoginScreen} />
<Stack.Screen name="signup" component={SignupScreen} />
<Stack.Screen name="add_vendor" component={AddVendor} />
</Stack.Navigator>
}


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
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="Vendor" component={VendorScreen} />
      <Drawer.Screen name="Trade" component={TradeScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Signup" component={SignupScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
    </NavigationContainer>

  );
};


export default App;
