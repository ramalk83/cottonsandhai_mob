import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';
import  CustomHeader  from '../navigation/CustomHeader';

const NotificationScreen = ({navigation}) => {
    return (
      <>
      <CustomHeader title="Notification" isHome={true} navigation={navigation}/>
      <View style={styles.containerr}>
        <Text style={styles.welcomeTextCont}>Notification Screen</Text>
      
        <Button
          mode="contained"
          style={styles.logoutButton}
            title="BACK"
            onPress={() => navigation.navigate("Home")}
        />
      </View>
      </>
    );
};

export default NotificationScreen;
