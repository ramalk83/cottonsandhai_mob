
import React,{useEffect,useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {View, Text, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawerContent } from './CustomDrawerContent';
import MainTabScreen from './MainTabScreen';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

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
const Stack=createStackNavigator();

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


const App= () => {
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
  <Stack.Navigator >
   <Stack.Screen
          options={{headerLeft: ({}) => <HeaderLeft />}}
          component={DrawerComponent}
          name="Cotton Sandhai"
        />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={MainTabScreen} />
    <Stack.Screen name="loading" component={LoadingScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="VendorScreen" component={VendorScreen} />
 
    </Stack.Navigator>
  </NavigationContainer>

  );
};


export default App;
