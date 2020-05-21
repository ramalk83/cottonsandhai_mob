

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';
import  CustomHeader  from '../navigation/CustomHeader';
import Card from '../../shared/Card';

const AccountScreen = ({navigation}) => {
    return (
     
    <>
    <CustomHeader title="Account" isHome={true} navigation={navigation}/>
      <View >
      
        <Card>
            <Text style={styles.titleText}>Name</Text>
            <Text style={styles.titleText}>Address</Text>
            <Text style={styles.titleText}>Email</Text>
            <Text style={styles.titleText}>Phoneno</Text>
          </Card>
      </View>
      </>
    );
};


export default AccountScreen;
