import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button,StyleSheet,SafeAreaView,TouchableOpacity,TextInput } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../assets/css/style.js';
import VendorhomeScreen from './AddVendor/VendorhomeScreen';


function Item({ id,name, email, address,selected, onSelect }) {
  return (
  <>
  <View>
    <Text style={styles.titleContainer}>{name}</Text>
    <Text style={styles.dataContainer}>{email}</Text>  
    <View style={{ flexDirection: 'row'}}>
    <TouchableOpacity
      onPress={() => onSelect(id)}
    >
    <Text style={styles.detailButton}>See More</Text>
    </TouchableOpacity>
    <TouchableOpacity >
        <Text style={styles.detailButton}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.detailButton}>Delete</Text>
      </TouchableOpacity>              
     </View>                 
  </View>  
   {
    selected
    ?
    <>
    <Text style={styles.dataContainer}>{address.street}</Text>  
    <Text style={styles.dataContainer}>{`${address.city}-${address.zipcode}`}</Text>
    </>
    :
    <Text></Text>
    }
    </>
  );
}


const VendorScreen = ({navigation})=> {
  const [selected, setSelected] = useState(new Map());
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState([]);

  const [query, setQuery] = useState('');
  const [filteredDataList, setFilteredDataList] = useState(dataList);
  const [loading, setLoading] = useState(false);
  
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected],
  );

//Fetch data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => 
      {
        setData(data);   
        setTemp(data);      
     })
  },[]);



  
const dataList = Object.values(temp)
.map(detailsData => ({
  ...detailsData,
  lowerCaseName: detailsData.name.toLowerCase(),
}))
.sort((a, b) => a.name > b.name);

// Get the values of the countries and sort is alphabetically
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
  mode="contained"
  style={styles.logoutButton}
    title="Add Vendor"
    onPress={() => navigation.navigate("VendorhomeScreen")}
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


return (
  <SafeAreaView style={styles.container}>
  <FlatList
    data={filteredDataList}
    ListHeaderComponent={renderHeader}
    ItemSeparatorComponent = { FlatListItemSeparator }
    renderItem={({ item }) => (
      <Item
      id={item.id}
        name={item.name}
        email={item.email}
        address={item.address}
        selected={!!selected.get(item.id)}
        onSelect={onSelect}
      />
    )}
    keyExtractor={item => item.id}
    extraData={selected}
  />
</SafeAreaView>
  );
}
export default VendorScreen;
