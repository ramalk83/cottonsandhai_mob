import React, { useEffect, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View
} from 'react-native';
import { AsyncStorage } from 'react-native';
import styles from '../../assets/css/style';
import  CustomHeader  from '../navigation/CustomHeader';


const HomeScreen = (props) => {
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

 /* const logout = (props) => {
    AsyncStorage.removeItem("token").then(() => {
      props.navigation.navigate("Logout"
      //,{ name: 'Logout' }
      )
    })
  }*/

  const addVendor = (props) => {
    props.navigation.navigate("Vendor"
    ,{ name: 'Vendor' }
    );
  };

  const addTrade = (props) => {
    props.navigation.navigate("Trade"
    ,{ name: 'Trade' }
    );
  };
  return (
    <>
    <CustomHeader title="Home" isHome={true}/>
      <View style={styles.container}>
        <Text style={styles.welcomeTextCont}>Welcome!, Your email is {email}</Text>
      
        <Button
          mode="contained"
          style={styles.logoutButton}
          onPress={() => addVendor(props)}>
          Vendor
      </Button>
     <Button
          mode="contained"
          style={styles.logoutButton}          
          onPress={() => addTrade(props)}>
          Trade
     </Button>
      </View>
    </>
  );
};



export default HomeScreen;