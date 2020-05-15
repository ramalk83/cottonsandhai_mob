

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';

const TradeScreen = (props) => {
    return (
      <View style={styles.containerr}>
        <Text style={styles.welcomeTextCont}>Trade Screen</Text>
        <Button
          mode="contained"
          style={styles.logoutButton}
            title="BACK"
            onPress={() => props.navigation.goBack()}
        />
      </View>
    );
};

export default TradeScreen;
