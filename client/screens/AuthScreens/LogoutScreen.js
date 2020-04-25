

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';

const LogoutScreen = (props) => {
    return (
      <View style={styles.containerr}>
      <Text style={styles.welcomeTextCont}>Are you sure ?</Text>
      <Button
            mode="contained"
            style={styles.logoutButton}
              title="OK"
              onPress={() => {{props.navigation.navigate('Login')}}}
      />
          <Button
            mode="contained"
            style={styles.logoutButton}
              title="CANCEL"
              onPress={() => {{props.navigation.navigate('Home')}}}
      />
    </View>
    );
};

export default LogoutScreen;

