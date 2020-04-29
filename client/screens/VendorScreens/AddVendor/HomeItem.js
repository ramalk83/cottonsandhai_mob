import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Button,Text ,TextInput, 
TouchableWithoutFeedback,TouchableOpacity,Image} from 'react-native';
import styles from '../../../assets/css/style.js';


const images={
  expand:require('../../../assets/images/downArrow.png')
};
  
const VendorhomeitemScreen = ({ title,id }) => {
  
  const [loading, setLoading] = useState(false);
  const [idval, setId] = useState();

  const [nickname,setnickname]=useState('');
  const [companyname,setcompanyname]=useState('');
  const [address,setadddress]=useState('');
  const [state,setstate]=useState('');
  const [pincode,setpincode]=useState('');

  const [primaryemail,setprimaryemail]=useState('');
  const [primarycontactname,setprimarycontactname]=useState('');
  const [primarycontactno,setprimarycontactno]=useState('');

  const [secondaryemail,setsecondaryemail]=useState('');
  const [secondarycontactname,setsecondarycontactname]=useState('');
  const [secondarycontactno,setsecondarycontactno]=useState('');

  const [gst,setgst]=useState('');
  const [uin,setuin]=useState('');

  const [insuranceno,setinsuranceno]=useState('');
  const [expdate,setexpdate]=useState('');
  const [insurancecompany,setinsurancecompany]=useState('');
  


  function idcase(){ 
    if(loading==true && idval=='1'){
      return renderDetails()          
    }else if( loading==true && idval=='2'){
       return renderDetails1()
     }else if( loading==true && idval=='3'){
       return renderDetails2()
     }else if( loading==true && idval=='4'){
       return renderDetails3()
     }else if( loading==true && idval=='5'){
       return renderDetails4()
     }
  
  }

   
  function renderDetails(){  
    return(
    <View>
        <TextInput style={styles.userinputText} placeholder="Enter company nick name"
         value={nickname} placeholderTextColor = "gray"
         onChangeText={(text)=>setnickname(text)}
        />
       <TextInput style={styles.userinputText} placeholder="Enter Company name"
         value={companyname} placeholderTextColor = "gray"
         onChangeText={(text)=>setcompanyname(text)}
        />
        <TextInput style={styles.userinputText} placeholder="Enter Company address"
         value={address} placeholderTextColor = "gray"
         onChangeText={(text)=>setaddress(text)}
        />
        <TextInput style={styles.userinputText} placeholder="Enter state"
         value={state} placeholderTextColor = "gray"
         onChangeText={(text)=>setstate(text)}
        />
        <TextInput style={styles.userinputText} placeholder="Enter pincode"
         value={pincode} placeholderTextColor = "gray"
         onChangeText={(text)=>setpincode(text)}
        />        
    </View>
        )        
    };


  function renderDetails1(){
      return(
      <View>
        <TextInput style={styles.userinputText} placeholder="Enter primary email"
         value={primaryemail} placeholderTextColor = "gray"
         onChangeText={(text)=>setprimaryemail(text)}
        /> 
          <TextInput style={styles.userinputText} placeholder="Enter primary contact name"
         value={primarycontactname} placeholderTextColor = "gray"
         onChangeText={(text)=>setprimarycontactname(text)}
        /> 
          <TextInput style={styles.userinputText} placeholder="Enter primary contact no"
         value={primarycontactno} placeholderTextColor = "gray"
         onChangeText={(text)=>setprimarycontactno(text)}
        /> 
      </View>
      )
  };
   
  function renderDetails2(){
    return(
    <View>
      <TextInput style={styles.userinputText} placeholder="Enter secondary email"
         value={secondaryemail} placeholderTextColor = "gray"
         onChangeText={(text)=>setsecondaryemail(text)}
      /> 
      <TextInput style={styles.userinputText} placeholder="Enter secondary contact name"
         value={secondarycontactname} placeholderTextColor = "gray"
         onChangeText={(text)=>setsecondarycontactname(text)}
      />
      <TextInput style={styles.userinputText} placeholder="Enter secondary contact no"
         value={secondarycontactno} placeholderTextColor = "gray"
         onChangeText={(text)=>setsecondarycontactno(text)}
      />
    </View>
    )
  };
   

function renderDetails3(){
  return(
  <View>
   <TextInput style={styles.userinputText} placeholder="Enter gst"
         value={gst} placeholderTextColor = "gray"
         onChangeText={(text)=>setgst(text)}
  />
  <TextInput style={styles.userinputText} placeholder="Enter uin"
         value={uin} placeholderTextColor = "gray"
         onChangeText={(text)=>setuin(text)}
  />      
  </View>
  )
};


function renderDetails4(){
  return(
  <View>
    <TextInput style={styles.userinputText} placeholder="Enter insurance no"
         value={insuranceno} placeholderTextColor = "gray"
         onChangeText={(text)=>setinsuranceno(text)}
  />
  <TextInput style={styles.userinputText} placeholder="Enter expdate"
         value={expdate} placeholderTextColor = "gray"
         onChangeText={(text)=>setexpdate(text)}
  />
  <TextInput style={styles.userinputText} placeholder="Enter insurance company"
         value={insurancecompany} placeholderTextColor = "gray"
         onChangeText={(text)=>setinsurancecompany(text)}
  />
  </View>
  )
};

return (
<>
<View style={styles.container}>
      <TouchableOpacity  key={id}
       onPress={event => {
       //alert(`${loading}: ${id}`);
        setLoading(!loading);
        setId(id)    
       }}>
    <View style={styles.item}>
      <Text style={styles.ititle}>{title}    
      <Image source={images.expand} style={styles.himage}></Image>
      </Text> 
    </View>
{idcase()}
    </TouchableOpacity>
</View>  
</>  
);
}

export default VendorhomeitemScreen;