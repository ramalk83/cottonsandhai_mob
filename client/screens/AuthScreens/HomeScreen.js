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


const HomeScreen = ({navigation}) => {
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

 
  return (
    <>
    <CustomHeader title="Home" isHome={true} navigation={navigation}/>
      <View style={styles.container}>
        <Text style={styles.welcomeTextCont}>Welcome!, Your email is {email}</Text>
      
        <Button
          mode="contained"
          style={styles.logoutButton}
          onPress={() =>navigation.navigate("Vendor")}>
          Vendor
      </Button>
     <Button
          mode="contained"
          style={styles.logoutButton}          
          onPress={() => navigation.navigate("Trade")}>
          Trade
     </Button>
      </View>
    </>
  );
};



export default HomeScreen;