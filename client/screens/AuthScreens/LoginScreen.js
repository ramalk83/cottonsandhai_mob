import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
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
import styles from '../../assets/css/style';


const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  const sendCred = async (props) => {
    fetch("http://10.0.2.2:3000/signin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
      .then(res => res.json())
      .then(async (data) => {
        console.log("client data"+data)
        if (typeof data.token!=='undefined'&& data.token !== null) {
          console.log(data.token)
          await AsyncStorage.setItem('token', data.token)
          props.navigation.replace("Home")
        } else {
          console.log("data token is null")
          // Alert(e)
          props.navigation.replace("verification")
        }
      })
  }

  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <StatusBar color="grey" barStyle="dark-content" />
          <Image style={styles.logoImage} source={LogoImg} />
          <Text style={styles.logoText}>Cotton Sandhai</Text>
          <TextInput
            label='Email'
            value={email}
            style={styles.userinputText}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label='password'
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => {setPassword(text)}}
            style={styles.userinputText}
          />
          <TouchableOpacity onPress={() => sendCred(props)}>
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signupTextCont}
              onPress={() => props.navigation.replace("Signup")}
            >Dont have a account yet? Sign up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};


export default LoginScreen;