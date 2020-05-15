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
const StackHome=createStackNavigator();
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
 
const DrawerComponent = () => {
  return (
   <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
   <Drawer.Screen  name="Home" 
   component={HomestackComponent} options={{title:'Home'}}
   />
   <Drawer.Screen name="Vendor" 
   component={VendorStackNavigation} options={{title:'Vendor'}}
   />
   <Drawer.Screen name="Trade" 
   component={TradeScreen} options={{title:'Trade'}}
   />
   <Drawer.Screen name="Contact" 
   component={ContactScreen} options={{title:'Contact'}}
   />
   <Drawer.Screen name="Help" 
   component={HelpScreen} options={{title:'Help'}}
   />
   <Drawer.Screen name="Logout" 
   component={LogoutstackComponent} options={{title:'Logout'}}
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
<StackHome.Screen name="Home" 
component={HomeScreen}  />   
<StackHome.Screen name="Help" component={HelpScreen} />
<StackHome.Screen name="Logout" component={LogoutScreen} 
options={({route})=>({title:route.params.name})}
/>
<StackHome.Screen name="Trade" component={TradeScreen}
 options={({route})=>({title:route.params.name})}
/>
<StackHome.Screen name="Vendor" 
component={VendorStackNavigation} 
options={({route})=>({title:route.params.name})}
/>
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
  <Stacklogin.Screen name="Signup" 
  component={SignupScreen} options={{title:'Signup'}}
  />
  </Stacklogin.Navigator>
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
const [isLoading,setLoading] = useState(true)
   const [isloggedin,setLogged] = useState(null)

/* useEffect(() => {
     setTimeout(()=>{
       setLoading(false);
     },1000);
   }, [])

    if(isLoading){
      return <LoadingScreen />
    }*/
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
        <StackHome.Navigator >   
    <Stack.Screen
          options={{headerLeft: ({}) => <HeaderLeft />}}
          component={DrawerComponent}
          name="Cotton Sandhai"
    />
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