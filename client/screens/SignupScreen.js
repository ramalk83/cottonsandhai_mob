
import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import styles from '../assets/css/style.js';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Image
} from 'react-native';
import { AsyncStorage } from 'react-native';
import LogoImg from '../images/logo.jpg'

const SignupScreen = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')

  const sendCred= async (props)=>{
     fetch("http://10.0.2.2:3000/signup",{
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
              props.navigation.replace("home")
            } catch (e) {
              console.log("error hai",e)
            }
     })
  }
  return (
   <> 
      <View style={styles.containers}>
   <KeyboardAvoidingView behavior="padding">
     <StatusBar backgroundColor="grey" barStyle="light-content" />
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
        <Text style={styles.signupButton}>Sign up</Text>
        </TouchableOpacity>
      <TouchableOpacity>
        <Text
      style={styles.signinTextCont}
      onPress={()=>props.navigation.replace("login")}
      >Already have an account? Sign In</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
   </>
  );
};



export default SignupScreen;
