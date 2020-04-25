import React from 'react';
import { SafeAreaView, View, FlatList,TouchableOpacity, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import HomeItem from './HomeItem'
import styles from '../../../assets/css/style.js';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Account details',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


export default function  VendorhomeScreen() {
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
       <TouchableOpacity onPress={() => sendCred(props)}>
        <Text style={styles.loginButton}>Submit</Text>
        </TouchableOpacity>
    </View>
  );
}





