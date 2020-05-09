
import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VendorScreen from '../../VendorScreens/VendorScreen';
import VendorhomeScreen from '../../VendorScreens/AddVendor/VendorhomeScreen';
import VendorhomeitemScreen from '../../VendorScreens/AddVendor/HomeItem';
import editvendorScreen from '../../VendorScreens/editVendor';
import deletevendorScreen from '../../VendorScreens/deleteVendor1';
import Vendorhomestack from './Vendorhomestack';

const Stackvendor=createStackNavigator();

 
   const VendorStackNavigation =() => {
    return (
    <Stackvendor.Navigator  headerMode="none"  initialRouteName="Vendor">  
    <Stackvendor.Screen name="Vendor" component={VendorScreen}  />   
    <Stackvendor.Screen name="VendorhomeScreen" children={VendorhomeScreen} /> 
    <Stackvendor.Screen name="VendorhomeitemScreen" component={VendorhomeitemScreen } />
    <Stackvendor.Screen name="editVendor" component={editvendorScreen}  />          
    <Stackvendor.Screen name="deleteVendor" component={deletevendorScreen}  /> 
    </Stackvendor.Navigator>
    ); 
  }

  
export default VendorStackNavigation;