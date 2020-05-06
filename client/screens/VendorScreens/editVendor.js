

import React from 'react';
import { View, TextInput,Text, Button, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';

const editvendorScreen = ({ route, navigation }) => {

    return (
     
        

<View>
<Text style={styles.itemtitle}> Edit Vendor</Text>
    <TextInput style={styles.userinputText} placeholder="Enter insurance no"
         value={route.params?.post.name} placeholderTextColor = "gray"
         
  />
  <TextInput style={styles.userinputText} placeholder="Enter expdate"
         value={route.params?.post.email} placeholderTextColor = "gray"
         
  />
  <TextInput style={styles.userinputText} placeholder="Enter insurance company"
         value={route.params?.post.address.street} placeholderTextColor = "gray"
      
  />
   <TextInput style={styles.userinputText} placeholder="Enter insurance company"
         value={route.params?.post.address.city} placeholderTextColor = "gray"
      
  />
   <TextInput style={styles.userinputText} placeholder="Enter insurance company"
         value={route.params?.post.address.zipcode} placeholderTextColor = "gray"
      
  />
 <Text></Text>
  <Button
               mode="contained"               
                 title="BACK"      
                 onPress={() =>navigation.navigate('Home')}      
        />
  </View>


    );
};

export default editvendorScreen;

