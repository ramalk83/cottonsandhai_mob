
import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  Image
} from 'react-native';
import { AsyncStorage } from 'react-native';
import LogoImg from '../images/logo.jpg'
import styles from '../../assets/css/style.js';

  const AddVendor = (props) => {
  console.log('add vendor invoked')
  const [companyName,setcompanyName] = useState('');
  const [nickName,setnickName]=useState('');

  
  
  const sendCred = async (props)=>{
    fetch("http://10.0.2.2:3000/addvendor",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "companyName":companyName,
       "nickName":nickName
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
           try {
             await AsyncStorage.setItem('token',data.token)
             props.navigation.replace("home")
           } catch (e) {
             console.log("error is",e)
              Alert(e)
           }
    })
 }

  return (
   <> 
   <View style={styles.container}>
   <KeyboardAvoidingView behavior="padding"> 
     <StatusBar color="grey" barStyle="dark-content" />
     <Image style={styles.logoImage} source={LogoImg}/>
      <Text style={styles.logoText}>Cotton Sandhai</Text>
      <TextInput
        label='Company Name'
        value={companyName}
        style={styles.userinputText}
        onChangeText={(text)=>setcompanyName(text)}
      />
      <TextInput
        label='Nick Name'
        value={nickName}
        onChangeText={(text)=>{setnickName(text)}}
        style={styles.userinputText}
      />
      <TouchableOpacity onPress={() => sendCred(props)}>
        <Text style={styles.loginButton}>Add Vendor</Text>
        </TouchableOpacity>
       </KeyboardAvoidingView> 
      </View>
   </>
  );
};



export default AddVendor;
