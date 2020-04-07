
import React,{useEffect} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native';
import { AsyncStorage } from 'react-native';

const LoadingScreen = (props) => {


  const detectLogin= async ()=>{
    const token = await AsyncStorage.getItem('token')
        if(token){
              props.navigation.replace("home")
        }else{
            props.navigation.replace("login")
        }
  }
  useEffect(()=>{
   detectLogin()
  },[])

  return (
   <View style={styles.container}> 
    <ActivityIndicator size="large" color="grey" />
   </View>
  );
};


const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center" 
  } 
  })


export default LoadingScreen;
