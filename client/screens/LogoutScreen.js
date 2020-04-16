

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../assets/css/style.js';

const LogoutScreen = ({navigation}) => {
    return (
      <View style={styles.containerr}>
        <Text style={styles.welcomeTextCont}> Logout Screen</Text>
        <Button
               mode="contained"
               style={styles.logoutButton}
                 title="BACK"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default LogoutScreen;

