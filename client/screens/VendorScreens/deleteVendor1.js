import React, { useEffect, useState } from 'react';
import { View, TextInput,Text, Button,Modal,TouchableHighlight, StyleSheet } from 'react-native';
import styles from '../../assets/css/style.js';


const deleteVendorScreen= ({ route, navigation }) => {
const [modalVisible, setModalVisible] = useState(true);

return (        
      
<View>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{route.params?.post.name}</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>


  </View>
    );
};

export default deleteVendorScreen;

