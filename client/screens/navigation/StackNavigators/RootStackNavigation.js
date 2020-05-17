import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../../AuthScreens/SignupScreen'
import LoginScreen from '../../AuthScreens/LoginScreen'
import LoadingScreen from '../../AuthScreens/LoadingScreen';
import LogoutScreen from '../../AuthScreens/LogoutScreen';
import VerificationScreen from '../../AuthScreens/VerificationScreen';
import HomeStackNavigation  from './HomeStackNavigation';

const Stackroot=createStackNavigator();
const Stacklogin=createStackNavigator();
const Stacksignup=createStackNavigator();
const Stackverification=createStackNavigator();

function RootStackNavigation() {
    return (
      
    <Stackroot.Navigator  headerMode="none">   
    <Stackroot.Screen name="Login" 
    component={LoginStackNavigation} 
     />                
    
    <Stackroot.Screen name="Loading" 
    component={LoadingScreen} 
    />
  <Stackroot.Screen name="verification"
     component={VerificationStackNavigation} 
    />
    <Stackroot.Screen name="Logout"
     component={LogoutScreen} 
    />
    <Stackroot.Screen name="Signup" 
    component={SignupStackNavigation} 
    />
     <Stackroot.Screen name="Home" 
    component={HomeStackNavigation} 
    />
    </Stackroot.Navigator>
    );
  }
  
  export default RootStackNavigation


  function LoginStackNavigation() {
    return (      
    <Stacklogin.Navigator  headerMode="none">   
    <Stacklogin.Screen name="Login" component={LoginScreen} />                
    <Stacklogin.Screen name="verification" component={VerificationStackNavigation} />
    <Stacklogin.Screen name="Loading" component={LoadingScreen} />
    <Stacklogin.Screen name="Signup"  component={SignupStackNavigation} />
    </Stacklogin.Navigator>
    );
  }

  function SignupStackNavigation() {
    return (      
    <Stacksignup.Navigator  headerMode="none">  
    <Stacksignup.Screen name="Signup"  component={SignupScreen} /> 
    <Stacksignup.Screen name="Login" component={LoginStackNavigation} />                
    <Stacksignup.Screen name="verification" component={VerificationStackNavigation} />
    </Stacksignup.Navigator>
    );
  }

  function VerificationStackNavigation() {
    return (      
    <Stackverification.Navigator  headerMode="none"> 
    <Stackverification.Screen name="verification" component={VerificationScreen} />  
    <Stackverification.Screen name="Login" component={LoginStackNavigation} />                
    <Stackverification.Screen name="Signup"  component={SignupScreen} />
    </Stackverification.Navigator>
    );
  }