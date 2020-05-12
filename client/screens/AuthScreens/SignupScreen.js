
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
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
import LogoImg from '../../assets/images/logo.jpg';
import styles from '../../assets/css/style';

const SignupScreen = (props) => {

  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('')
  const [password, setPassword] = useState('')

  const sendCred = async (props) => {
    fetch("http://10.0.2.2:3000/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
      .then(props.navigation.replace("verification"))
  }
  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <StatusBar backgroundColor="grey" barStyle="light-content" />
          <Image style={styles.logoImage} source={LogoImg} />
          <Text style={styles.logoText}>Cotton Sandhai</Text>
          <TextInput
            label='Email'
            value={email}
            style={styles.userinputText}
            onChangeText={(text) => setEmail(text)}

          />
          <TextInput
            label='Password'
            secureTextEntry={true}
            value={password1}
            onChangeText={(text) => { setPassword1(text) }}
            style={styles.userinputText}
          />
          <TextInput
            label='re-enter Password'
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => { setPassword(text) }}
            style={styles.userinputText}
          />
          <TouchableOpacity onPress={() => sendCred(props)}>
            <Text style={styles.signupButton}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.signinTextCont}
              onPress={() => props.navigation.replace("login")}
            >Already have an account? Sign In</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};



export default SignupScreen;
