import React,{useEffect,useState,Component} from 'react';

import { Button ,TextInput} from 'react-native-paper';
import {View, Text, StyleSheet, Image, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawerContent } from './screens/navigation/CustomDrawerContent';
import MainTabScreen from './screens/navigation/MainTabScreen';
import VendorStackNavigation  from './screens/navigation/StackNavigators/vendorStackNavigation';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import SignupScreen from './screens/AuthScreens/SignupScreen'
import LoginScreen from './screens/AuthScreens/LoginScreen'
import LoadingScreen from './screens/AuthScreens/LoadingScreen';
import HomeScreen from './screens/AuthScreens/HomeScreen'
import LogoutScreen from './screens/AuthScreens/LogoutScreen';
import VerificationScreen from './screens/AuthScreens/VerificationScreen';

import NotificationScreen from './screens/ContactScreens/NotificationScreen';
import AccountScreen from './screens/ContactScreens/AccountScreen';

import HelpScreen from './screens/ContactScreens/HelpScreen';
import ContactScreen from './screens/ContactScreens/ContactScreen';

import TradeScreen from './screens/TradeScreens/TradeScreen';
import { AsyncStorage } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack=createStackNavigator();
const Stacklogin=createStackNavigator();
const Stacksignup=createStackNavigator();
const Stackverification=createStackNavigator();
const StackHome=createStackNavigator();
const StackTrade=createStackNavigator();
const Stacklogout=createStackNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();  
  return (
    <View style={{flexDirection: 'row'}}>         
      <TouchableOpacity 
          onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
       }}>
       <Icon.Button name="ios-menu" size={25} backgroundColor="rgba(126, 197, 176, 0.993)"/>
      </TouchableOpacity>
    </View>
  );
};
  /*  {(setLogged == true)                   
        ? <Stack.Screen name="Login" component={LoginScreen}  />                    
        : <Stack.Screen name="home" component={MainTabScreen} />
  }*/

const DrawerComponent = () => {
  return (
   <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
   <Drawer.Screen component={MainTabScreen} name="Main" />
   <Drawer.Screen name="Vendor" component={VendorStackNavigation} />
   <Drawer.Screen name="Trade" component={TradeScreen} />
   <Drawer.Screen name="Contact" component={ContactScreen} />
   <Drawer.Screen name="Help" component={HelpScreen} />
   <Drawer.Screen name="Logout" component={LogoutstackComponent} />
   </Drawer.Navigator>
  );
};

const HomestackComponent =() => {
  return (
  <StackHome.Navigator >   
   <Stack.Screen
          options={{headerLeft: ({}) => <HeaderLeft />}}
          component={DrawerComponent}
          name="Cotton Sandhai"
    />
  <StackHome.Screen name="Home" component={MainTabScreen}  />   
  </StackHome.Navigator>
  );
}

const LoginstackComponent =() => {
  return (
  <Stacklogin.Navigator  headerMode="none">   
  <Stacklogin.Screen name="Login" component={LoginScreen}  />                
  <Stacklogin.Screen name="Home" component={HomestackComponent} />
  <Stacklogin.Screen name="Loading" component={LoadingScreen} />
  <Stacklogin.Screen name="verification" component={verificationstackComponent} />
  <Stacklogin.Screen name="Signup" component={SignupScreen} />
  </Stacklogin.Navigator>
  );
}


const SignupstackComponent =() => {
  return (
  <Stacksignup.Navigator  headerMode="none">  
  <Stacksignup.Screen name="Signup" component={SignupScreen} />  
  <Stacksignup.Screen name="Login" component={LoginScreen}  />                         
  <Stacksignup.Screen name="Home" component={HomestackComponent} />
  <Stacksignup.Screen name="verification" component={verificationstackComponent} />
  <Stacksignup.Screen name="Loading" component={LoadingScreen} />
  </Stacksignup.Navigator>
  );
}

const verificationstackComponent =() => {
  return (
  <Stackverification.Navigator  headerMode="none">  
  <Stackverification.Screen name="Signup" component={SignupScreen} />  
  <Stackverification.Screen name="Login" component={LoginScreen}  />                         
  <Stackverification.Screen name="Home" component={HomestackComponent} />
  <Stackverification.Screen name="verification" component={VerificationScreen} />
  <Stackverification.Screen name="Loading" component={LoadingScreen} />
  </Stackverification.Navigator>
  );
}
const LogoutstackComponent =() => {
  return (
  <Stacklogout.Navigator  headerMode="none">  
  <Stacklogout.Screen name="Login" component={LoginScreen} />           
  <Stacklogout.Screen name="Home" component={HomestackComponent} />
  </Stacklogout.Navigator>
  );
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
  <Stack.Navigator  headerMode="none" initialRouteName="Login"> 
    <Stack.Screen name="Login" component={LoginstackComponent}  />                    
    <Stack.Screen name="Home" component={HomestackComponent} />  
    <Stack.Screen name="loading" component={LoadingScreen} />
    <Stack.Screen name="signup" component={SignupstackComponent} />
    <Stack.Screen name="Vendor" component={VendorStackNavigation } />   
    <Stack.Screen name="verification" component={VerificationScreen} />
  </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;