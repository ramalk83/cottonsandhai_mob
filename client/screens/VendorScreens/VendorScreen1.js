import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button,StyleSheet,TouchableOpacity,TextInput } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../assets/css/style.js';

const VendorScreen = ({navigation})=> {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [temp, setTemp] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const onPress=()=>{

    setLoading(!loading);
  }
  
  async function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => 
        {
          setData(data) 
       })
  }

  useEffect(() => {
     fetchData();
  },[]);

  const renderHeader = () => {
  return <>
  <SearchBar placeholder="Type Here..." lightTheme round
    editable={true}
   // value={search}
   // onChangeText={updateSearch}
  // value={search}        
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

/*const updateSearch = (search) => {
  setSearch( (search) , () => {
    if ('' == search) {
      setData({
        data: [temp]
      });
      return;
  }

  data = temp.filter(function (item) {
      return item.name.toLowerCase().match(search.toLowerCase());
      //return item.name.toLowerCase().indexOf(search.toLowerCase()!== -1);
    }).map(function ({ id, name, email }) {
      return { id, name, email };
    });
  });
};*/


const renderDetails = ({ name, email,address,id}) =>{
  return (
    <>
  <View>
      <Text style={styles.titleContainer}>{name}</Text>
      <Text style={styles.dataContainer}>{email}</Text>  
      <View style={{ flexDirection: 'row'}}>
      <TouchableOpacity onPress={onPress()}>
        <Text style={styles.detailButton}>See More</Text>
        {loading && renderDetails1({address})} 
        
      </TouchableOpacity>      
      <TouchableOpacity >
        <Text style={styles.detailButton}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.detailButton}>Delete</Text>
      </TouchableOpacity>              
     </View>                 
  </View>  
  </> 
  )
}

function renderDetails1({address}){
  return(
  <View>
   <Text style={styles.titleContainer}>{address.street}</Text>
   <Text style={styles.dataContainer}>{address.zipcode}</Text>  
  </View>
  )
};

return (
    <View>
     <FlatList
          ListHeaderComponent={renderHeader}
          data={data}
          keyExtractor={item => item.id}
          ItemSeparatorComponent = { FlatListItemSeparator }
          renderItem={({ item }) => (            
           renderDetails(item)           
          )}      
        />   
    </View>
  );
}
export default VendorScreen;

