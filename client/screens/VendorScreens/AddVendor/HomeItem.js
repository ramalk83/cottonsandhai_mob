import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text ,TextInput,
  
  TouchableWithoutFeedback,Image} from 'react-native';
import Constants from 'expo-constants';
import styles from '../../../assets/css/style.js';


const images={
  expand:require('../../../assets/images/downArrow.png')
};
function renderDetails(){
  return(
  <View>
  <TextInput
  style={styles.userinputText} />
                    <TextInput
  style={styles.userinputText} />
                    <TextInput
  style={styles.userinputText} />
      {/* <Text style={styles.description}>{this.props.item.description}</Text> */}
  </View>
  )
};


export default function VendorhomeitemScreen({ title,id }) {
  //const [countries, setCountries] = useState([]);

  const [loading, setLoading] = useState(false);
  const onPress=()=>{
    setLoading(!loading);
  }
  return (
    <>
    

<View style={styles.container}>
<TouchableWithoutFeedback onPress={onPress} key={id}>

<View style={styles.item}>
      <Text style={styles.ititle}>{title}    
      <Image source={images.expand} style={styles.himage}></Image>
      </Text>
</View>
   
</TouchableWithoutFeedback>
{loading && renderDetails()}
</View>    
</>  
  );
}

