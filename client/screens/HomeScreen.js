
import React,{useEffect,useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import styles from '../assets/css/style.js';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View
} from 'react-native';
import { AsyncStorage } from 'react-native';  
//import AppContainer from './BottomNav'
//import Notifications from './Notification'
import AddVendor from './Add_vendor';

const HomeScreen = (props) => {
   const [email,setEmail] = useState("loading")
   const Boiler = async ()=>{
      const token = await AsyncStorage.getItem("token")
    fetch('http://10.0.2.2:3000/',{
    headers:new Headers({
      Authorization:"Bearer "+token
    })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      setEmail(data.email)
    }
    )
   }
useEffect(()=>{
   Boiler()
},[])

   const logout =(props)=>{
      AsyncStorage.removeItem("token").then(()=>{
        props.navigation.replace("LogoutScreen")
      })
   }

   const editUser = (props) => {
    props.navigation.replace("VendorScreen");
    };

  return (
   <> 
   <View style={styles.containerr}>
    <Text style={styles.welcomeTextCont}>Welcome!, Your email is {email}</Text>
    <Button 
        mode="contained"
        style={styles.logoutButton}
         onPress={() => logout(props)}>
        logout
      </Button>
      <Button 
        mode="contained"
        style={styles.logoutButton}
         onPress={() => editUser(props)}>
        Add Vendor
      </Button>
      {/* <AppContainer /> 
      <Notifications />*/}
      </View>
   </>
  );
};


export default HomeScreen;
