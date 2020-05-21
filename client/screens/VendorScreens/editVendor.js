

import React from 'react';
import { View, TextInput,Text, Button, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';
import  CustomHeader  from '../../navigation/CustomHeader';

const editvendorScreen = ({ route, navigation }) => {

return (        
<>
<CustomHeader title="Edit Vendor" navigation={navigation}/>   
<View>
{/*<Text style={styles.itemtitle}> Edit Vendor</Text>*/}
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
         onPress={() => navigation.goBack()}
  />
  </View>
  </>
    );
};

export default editvendorScreen;

