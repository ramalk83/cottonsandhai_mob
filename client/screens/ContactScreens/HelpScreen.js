

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';
import  CustomHeader  from '../navigation/CustomHeader';

const HelpScreen = ({navigation}) => {
    return (
      <>
      <CustomHeader title="Help" isHome={true} navigation={navigation}/>
      <View style={styles.containerr}>
        <Text style={styles.welcomeTextCont}>Help Screen</Text>
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

export default HelpScreen;

