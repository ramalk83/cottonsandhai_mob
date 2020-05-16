

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';
import  CustomHeader  from '../navigation/CustomHeader';

const ContactScreen = ({navigation}) => {
    return (
      <>
      <CustomHeader title="Contact" isHome={true} navigation={navigation}/>
      <View style={styles.containerr}>
        <Text style={styles.welcomeTextCont}>Contact Screen</Text>
        <Button
             mode="contained"
             style={styles.logoutButton}
               title="BACK"
            onPress={() => navigation.goBack()}
        />
      </View>
      </>
    );
};

export default ContactScreen;

