import React, { useEffect, useState } from 'react';
import { View, Text, FlatList,Modal, Button,StyleSheet,SafeAreaView,TouchableOpacity,TouchableHighlight,TextInput ,Image} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../assets/css/style.js';
import VendorhomeScreen from './VendorhomeScreen';
import {useNavigation} from '@react-navigation/native';
import  CustomHeader  from '../navigation/CustomHeader';

const VendorScreen = ()=> {
  const [selected, setSelected] = useState(new Map());  
  const [selected1, setSelected1] = useState(new Map()); 
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredDataList, setFilteredDataList] = useState(dataList); 
  const [loading, setLoading] = useState(false);
  const navigation =useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  //See more Function
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);     
      newSelected.set(id, !selected.get(id));     
      setSelected(newSelected);      
    },
    [selected],
  );

  //Delete function
  const onSelect1 = React.useCallback(
    id1 => {
      const newSelected1 = new Map(selected);     
      newSelected1.set(id1, !selected.get(id1));     
      setSelected1(newSelected1); 
      setModalVisible(true);     
    },
    [selected1],
  );

  
 //Fetch data
  async function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => 
        {
          setData(data);         
       })
  }
  useEffect(() => {
     fetchData();
  },[]);


// Get the values of the countries and sort is alphabetically
const dataList = Object.values(data)
  .map(detailsData => ({
    ...detailsData,
    lowerCaseName: detailsData.name.toLowerCase(),
  }))
  .sort((a, b) => a.name > b.name);

  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();
    const newDatas = dataList
      .filter((detailsData) => detailsData.lowerCaseName.includes(lowerCaseQuery))
      .map((detailsData) => ({
        ...detailsData,
        rank: detailsData.lowerCaseName.indexOf(lowerCaseQuery),
      }))
      .sort((a, b) => a.rank - b.rank);

    setFilteredDataList(newDatas);
    //setData(newDatas)
  }, [query]);



const renderHeader = () => {
    return <>
    <SearchBar placeholder="Type Here..." lightTheme round
      value={query}
      onChangeText={setQuery}
  /> 
  <Button
        title="ADD VENDOR"
        onPress={() => 
          /* 1. Navigate to the Details route with params */
         navigation.navigate('VendorhomeScreen'
         ,{ name: 'Add Vendor' }
         )}
  />
</>
}
    
const FlatListItemSeparator = () => {
      return <View
          style={{
            height: 1,
            width: "100%",
            marginTop:10,
            backgroundColor: "#d8d8d8",
          }}
      />      
}


const renderData= ({item })=> {  
  return (    
  <>
    <View>       
    <Text style={styles.titleContainer}>{item.name}</Text>
    <Text style={styles.dataContainer}>{item.email}</Text>  
    {/* See more */}
  <RowItem
        item={item}
        id={item.id}
        selected={!!selected.get(item.id)}
        onSelect={onSelect}       
    /> 
    <View style={{ flexDirection: 'row'}}>

    <TouchableOpacity
     onPress={() => onSelect(item.id)}
    >
    <Text style={styles.detailButton}>See More</Text>
    </TouchableOpacity>

    <TouchableOpacity 
       onPress={() => {
       
       navigation.navigate('editVendor',{ 
         name:'Edit Vendor',
         post:item});
      }}>
    <Text style={styles.detailButton}>Edit</Text>
    </TouchableOpacity>

    <TouchableOpacity 
     onPress={() => onSelect1(item.id)} >      
      <Text style={styles.detailButton}>Delete</Text>
    </TouchableOpacity> 
   </View>                 
  </View> 
 
 

 {/* Delete */}
  <RowItem1
        item={item}
        id={item.id}
        selected1={!!selected1.get(item.id)}
        onSelect1={onSelect1}       
  /> 

    </>
  );
}

//See more Item
function RowItem({ id,item,selected, onSelect }) {
  return (
  <>
   {  
    selected
    ?
    <>
    <Text style={styles.dataContainer}>{item.address.street}</Text>  
    <Text style={styles.dataContainer}>{`${item.address.city}-${item.address.zipcode}`}</Text>
    </>
    :
   <></>
    }
 
    </>
  );
}


 //Delete Item
function RowItem1({ id,item,selected1, onSelect1 }) {
  return (
  <>
   {  
    selected1
    ?
    <Modal
    animationType="none"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Are you sure you want to delete?</Text>
        <Text style={styles.dataContainer}>{`Id : ${id}`}</Text> 
        <View style={{ flexDirection: 'row'}}>
        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: "#2196F3" }}>
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableHighlight>
         <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={styles.textStyle}>Cancel</Text>
        </TouchableHighlight>
        </View>
      </View>
    </View>
  </Modal>
    :
    <></>
    }
 
    </>
  );
}


return (
<SafeAreaView style={styles.container}>
<>
<CustomHeader title="Vendor" isHome={true} navigation={navigation}/>
<FlatList
    data={data}
    ListHeaderComponent={renderHeader}
    ItemSeparatorComponent = { FlatListItemSeparator }
    renderItem={renderData}    
    //keyExtractor={item => item.id}
    keyExtractor={item => item.id.toString()}
    extraData={selected,selected1}
/>
</>
</SafeAreaView>
  );
}

export default VendorScreen;
