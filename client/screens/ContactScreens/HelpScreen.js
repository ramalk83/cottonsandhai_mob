

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';
import  CustomHeader  from '../../navigation/CustomHeader';

const HelpScreen = ({navigation}) => {
    return (
      <>
     
      <View style={styles.containerr}>
      <CustomHeader title="Help" isHome={true} navigation={navigation}/>
        <Text style={styles.welcomeTextCont}>Help Screen</Text>
    
      </View>
      </>
    );
};

export default HelpScreen;

