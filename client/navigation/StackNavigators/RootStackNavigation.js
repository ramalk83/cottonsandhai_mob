import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../../screens/AuthScreens/SignupScreen'
import LoginScreen from '../../screens/AuthScreens/LoginScreen'
import LoadingScreen from '../../screens/AuthScreens/LoadingScreen';
import LogoutScreen from '../../screens/AuthScreens/LogoutScreen';
import VerificationScreen from '../../screens/AuthScreens/VerificationScreen';
import HomeStackNavigation  from './HomeStackNavigation';
import HomeScreen from '../../screens/AuthScreens/HomeScreen';
import CustomHeader from '../../navigation/CustomHeader';
import DrawerComponent  from '../../navigation/DrawerComponent';

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
    component={DrawerComponent} 
    />
    </Stackroot.Navigator>
    );
  }
  
  export default RootStackNavigation


  function LoginStackNavigation() {
    return (      
    <Stacklogin.Navigator  headerMode="none" initialRouteName="Login">   
    <Stacklogin.Screen name="Login" component={LoginScreen} />                
    <Stacklogin.Screen name="verification" component={VerificationStackNavigation} />
    <Stacklogin.Screen name="Loading" component={LoadingScreen} />
    <Stacklogin.Screen name="Signup"  component={SignupScreen} />
    </Stacklogin.Navigator>
    );
  }

  function SignupStackNavigation() {
    return (      
    <Stacksignup.Navigator  headerMode="none">  
    <Stacksignup.Screen name="Signup"  component={SignupScreen} /> 
    <Stacksignup.Screen name="Login" component={LoginScreen} />                
    <Stacksignup.Screen name="verification" component={VerificationStackNavigation} />
    </Stacksignup.Navigator>
    );
  }

  function VerificationStackNavigation() {
    return (      
    <Stackverification.Navigator  headerMode="none"> 
    <Stackverification.Screen name="verification" component={VerificationScreen} />  
    <Stackverification.Screen name="Login" component={LoginScreen} />                
    <Stackverification.Screen name="Signup"  component={SignupScreen} />
    </Stackverification.Navigator>
    );
  }