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
import TradeStackNavigation  from './screens/navigation/StackNavigators/TradeStackNavigation';

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


import { AsyncStorage } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack=createStackNavigator();
const Stacklogin=createStackNavigator();
const StackHome=createStackNavigator();

const Stacksignup=createStackNavigator();
const Stackverification=createStackNavigator();

const Stacklogout=createStackNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();  
  return (
    <View style={{flexDirection: 'row'}}>         
      <TouchableOpacity 
          onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
       }}>
       <Icon.Button name="ios-menu" size={25} //backgroundColor="rgba(126, 197, 176, 0.993)"
       />
      </TouchableOpacity>
    </View>
  );
};

const DrawerComponent = () => {
  return (
   <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
   <Drawer.Screen component={MainTabScreen} name="Main" />
  
   <Drawer.Screen name="Vendor" 
   component={VendorStackNavigation} 
   />
   <Drawer.Screen name="Trade"
   component={TradeStackNavigation}
   />
   <Drawer.Screen name="Contact" 
   component={ContactScreen} 
   />
   <Drawer.Screen name="Help" 
   component={HelpScreen} 
   />
   <Drawer.Screen name="Logout" 
   component={LogoutScreen} 
   />
   </Drawer.Navigator>
  );
};

const HomestackComponent =() => {
  return (
  <StackHome.Navigator >   
   <StackHome.Screen
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
  <Stacklogin.Screen name="Login" 
  component={LoginScreen} options={{title:'Login'}}
   />                
  <Stacklogin.Screen name="Home" 
  component={HomestackComponent} options={{title:'Home'}}
  />
  <Stacklogin.Screen name="Loading" 
  component={LoadingScreen} options={{title:'Loading'}}
  />
<Stacklogin.Screen name="verification"
   component={VerificationScreen} options={{title:'Verification'}}
  />
  <Stacklogin.Screen name="Logout"
   component={LogoutScreen} options={{title:'Logout'}}
  />
  <Stacklogin.Screen name="Signup" 
  component={SignupScreen} options={{title:'Signup'}}
  />
  </Stacklogin.Navigator>
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
    {isloggedin                   
    ?  
         

<StackHome.Navigator
    headerMode="screen"
    options={{headerLeft: ({}) => <HeaderLeft />}}>
      <StackHome.Screen name="Home" component={MainTabScreen}  />   
     </StackHome.Navigator> 
        : 
       
        <Stack.Navigator  headerMode="none" initialRouteName="Login"> 
        <Stack.Screen name="Login" component={LoginstackComponent}  />                    
      
     
      </Stack.Navigator>
      
  }
  </NavigationContainer>
  );
};
export default App;