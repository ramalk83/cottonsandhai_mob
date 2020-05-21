

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';
import  CustomHeader  from '../navigation/CustomHeader';

const TradeScreen = ({navigation}) => {
    return (
      <>
            <CustomHeader title="Trade" isHome={true} navigation={navigation}/>
      <View style={styles.containerr}>


        <Text style={styles.welcomeTextCont}>Trade Screen</Text>
    
      </View>
      </>
    );
};

export default TradeScreen;
