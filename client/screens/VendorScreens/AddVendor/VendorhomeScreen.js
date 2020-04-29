import React from 'react';
import { SafeAreaView, View, FlatList,TouchableOpacity, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import HomeItem from './HomeItem'
import VendorScreen from '../VendorScreen'
import styles from '../../../assets/css/style.js';

const DATA = [
  {
    id: '1',
    title: 'Company Details',
  },
  {
    id: '2',
    title: 'Primary Contact Details',
  },
  {
    id: '3',
    title: 'Secondary Contact Details',
  },
  {
    id: '4',
    title: 'Goverence',
  },
  {
    id: '5',
    title: 'Insurance',
  },
];


const VendorhomeScreen = () =>{
  return (
    <View style={styles.container}>
      <Text style={styles.itemtitle}>Add Vendor</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <HomeItem 
        title={item.title} 
        id={item.id}  />}
        keyExtractor={item => item.id}
      />
       <TouchableOpacity >
        <Text style={styles.loginButton}>Submit</Text>
        </TouchableOpacity>
       
    </View>
  );
}

export default VendorhomeScreen


