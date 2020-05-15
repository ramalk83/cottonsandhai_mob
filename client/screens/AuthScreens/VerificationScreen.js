import React, { useEffect, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { AsyncStorage } from 'react-native';
import styles from '../../assets/css/style';
//import AddVendor from '../VendorScreens/AddVendor';

const VerificationScreen = (props) => {
  const [email, setEmail] = useState("loading")
  const Boiler = async () => {
    const token = await AsyncStorage.getItem("token")
    fetch('http://10.0.2.2:3000/verification', {
      headers: new Headers({
        Authorization: "Bearer " + token
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setEmail(data.email)
      })
  }
  useEffect(() => {
    Boiler()
  }, []) 

  const resend = (props) => {
    AsyncStorage.removeItem("token").then(() => {
      props.navigation.replace("Login")
     })
  }


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcomeTextCont}>Please verify your email to continue. If you have not yet received
    the email, please click below to resend email.</Text>
        <Button
          mode="contained"
          style={styles.logoutButton}
          onPress={() => resend(props)}>
          Resend Email
      </Button>
        <TouchableOpacity>
          <Text
            style={styles.signinTextCont}
            onPress={() => props.navigation.replace("Login")}
          >Click here to Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};



export default VerificationScreen;