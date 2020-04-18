
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
import LogoImg from '../../assets/images/logo.jpg';
import googleImg from '../../assets/images/google.png';
import styles from '../../assets/css/style.js';


const LoginScreen = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')
  
  
  const sendCred = async (props)=>{
    fetch("http://10.0.2.2:3000/signin",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":email,
       "password":password
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
           try {
             await AsyncStorage.setItem('token',data.token)
             props.navigation.replace("Home")
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
        label='Email'
        value={email}
        style={styles.userinputText}
        onChangeText={(text)=>setEmail(text)}
      />
      <TextInput
        label='password'
        secureTextEntry={true}
        value={password}
        onChangeText={(text)=>{setPassword(text)}}
        style={styles.userinputText}
      />
       <TouchableOpacity onPress={() => sendCred(props)}>
        <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
      
    <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
    <Image source={googleImg}
     style={styles.ImageIconStyle}
    />
    
    <Text style={styles.TextStyle}> Google </Text>
   </TouchableOpacity>

     
      <TouchableOpacity>
        <Text style={styles.signupTextCont}
      onPress={()=>props.navigation.replace("Signup")}
      >Dont have a account yet? Sign up</Text>
      </TouchableOpacity>

       </KeyboardAvoidingView> 
      </View>
   </>
  );
};


export default LoginScreen;
