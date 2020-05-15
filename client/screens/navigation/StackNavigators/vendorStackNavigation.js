
import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VendorScreen from '../../VendorScreens/VendorScreen';
import VendorhomeScreen from '../../VendorScreens/VendorhomeScreen';
import editvendorScreen from '../../VendorScreens/editVendor';

const Stackvendor=createStackNavigator();
 
   const VendorStackNavigation =() => {
    return (
    <Stackvendor.Navigator   initialRouteName="Vendor">  
    <Stackvendor.Screen name="Vendor" 
    component={VendorScreen} 
    //options={{title:'Vendor Screen'}}
    />   
    <Stackvendor.Screen name="VendorhomeScreen" 
    component={VendorhomeScreen} 
    
    //options={({route})=>({title:route.params.name})}
    />   
    <Stackvendor.Screen name="editVendor" 
    component={editvendorScreen}  
    
    //options={({route})=>({title:route.params.name})}
    />        
     </Stackvendor.Navigator>
    ); 
  }

  
export default VendorStackNavigation;