
import React,{useEffect,useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {View, Text, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawerContent } from './screens/navigation/CustomDrawerContent';
import MainTabScreen from './screens/navigation/MainTabScreen';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import SignupScreen from './screens/AuthScreens/SignupScreen'
import LoginScreen from './screens/AuthScreens/LoginScreen'
import LoadingScreen from './screens/AuthScreens/LoadingScreen';
import HomeScreen from './screens/AuthScreens/HomeScreen'
import AddVendor from './screens/VendorScreens/Add_vendor';
import NotificationScreen from './screens/ContactScreens/NotificationScreen';
import AccountScreen from './screens/ContactScreens/AccountScreen';
import VendorScreen from './screens/VendorScreens/VendorScreen';
import TradeScreen from './screens/TradeScreens/TradeScreen';
import HelpScreen from './screens/ContactScreens/HelpScreen';
import ContactScreen from './screens/ContactScreens/ContactScreen';
import LogoutScreen from './screens/AuthScreens/LogoutScreen';
import { AsyncStorage } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack=createStackNavigator();
const Stacklogin=createStackNavigator();
const Stacksignup=createStackNavigator();
const StackHome=createStackNavigator();
const StackTrade=createStackNavigator();

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
   <Drawer.Screen name="Vendor" component={VendorScreen} />
   <Drawer.Screen name="Trade" component={TradeScreen} />
   <Drawer.Screen name="Contact" component={ContactScreen} />
   <Drawer.Screen name="Help" component={HelpScreen} />
   <Drawer.Screen name="Logout" component={LogoutScreen} />
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
  <Stacklogin.Screen name="Signup" component={SignupScreen} />
  </Stacklogin.Navigator>
  );
}



const SignupstackComponent =() => {
  return (
  <Stacksignup.Navigator  headerMode="none">  
  <Stacksignup.Screen name="Signup" component={SignupScreen} />           
  <Stacksignup.Screen name="Home" component={HomestackComponent} />
  <Stacksignup.Screen name="Loading" component={LoadingScreen} />
  </Stacksignup.Navigator>
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
    <Stack.Screen name="VendorScreen" component={VendorScreen} /> 
  </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;
