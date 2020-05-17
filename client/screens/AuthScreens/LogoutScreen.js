
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';
import { AsyncStorage } from 'react-native';
import  CustomHeader  from '../navigation/CustomHeader';


const LogoutScreen = (props) => {
  const [email, setEmail] = useState("loading")
  const Boiler = async () => {
    const token = await AsyncStorage.getItem("token")
    fetch('http://10.0.2.2:3000/', {
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

 const logout = (props) => {
    AsyncStorage.removeItem("token").then(() => {
      props.navigation.navigate( "Login" )
    })
  }
    return (
      <>
      <CustomHeader title="Logout" isHome={true} navigation={props}/>
      <View style={styles.containerr}>
      <Text style={styles.welcomeTextCont}>Are you sure ?</Text>
      <Button
          mode="contained"
          title="OK"
          style={styles.logoutButton}
          onPress={() => logout(props)}>
          
      </Button>
          <Button
            mode="contained"
            style={styles.logoutButton}
              title="CANCEL"
              onPress={() => {{props.navigation.navigate('Home')}}}
      />
    </View>
    </>
    );
};

export default LogoutScreen;

