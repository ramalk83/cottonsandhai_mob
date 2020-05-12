
import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VendorScreen from '../../VendorScreens/VendorScreen';
import VendorhomeScreen from '../../VendorScreens/VendorhomeScreen';
import editvendorScreen from '../../VendorScreens/editVendor';

const Stackvendor=createStackNavigator();
 
   const VendorStackNavigation =() => {
    return (
    <Stackvendor.Navigator  headerMode="none"  initialRouteName="Vendor">  
    <Stackvendor.Screen name="Vendor" component={VendorScreen}  />   
    <Stackvendor.Screen name="VendorhomeScreen" children={VendorhomeScreen} />   
    <Stackvendor.Screen name="editVendor" component={editvendorScreen}  />        
     </Stackvendor.Navigator>
    ); 
  }

  
export default VendorStackNavigation;