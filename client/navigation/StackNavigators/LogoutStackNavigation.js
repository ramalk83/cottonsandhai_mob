

import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogoutScreen from '../../screens/AuthScreens/LogoutScreen';
import LoginScreen from '../../screens/AuthScreens/LoginScreen';
import SignupScreen from '../../screens/AuthScreens/SignupScreen';
import CustomHeader from '../../navigation/CustomHeader';

const Stacklogout=createStackNavigator();

const LogoutstackComponent =() => {
    return (
    
    <Stacklogout.Navigator  headerMode="none" initialRouteName="Logout">   
     <Stacklogout.Screen name="Logout"
     component={LogoutScreen}  options={{ headerTitle: () => <CustomHeader title="Logout" navigation={navigation} /> }}
    />
    <Stacklogout.Screen name="Login" 
    component={LoginScreen} 
     />                
    <Stacklogout.Screen name="Signup" 
    component={SignupScreen} 
     /> 
    </Stacklogout.Navigator>
    );
  }
  
  export default LogoutstackComponent