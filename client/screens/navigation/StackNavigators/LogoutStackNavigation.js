

import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogoutScreen from '../../AuthScreens/LogoutScreen';
import LoginScreen from '../../AuthScreens/LoginScreen';
import SignupScreen from '../../AuthScreens/SignupScreen';

const Stacklogout=createStackNavigator();

const LogoutstackComponent =() => {
    return (
    
    <Stacklogout.Navigator  headerMode="none" initialRouteName="Logout">   
     <Stacklogout.Screen name="Logout"
     component={LogoutScreen} 
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