
import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VendorScreen from '../../VendorScreens/VendorScreen';
import VendorhomeScreen from '../../VendorScreens/AddVendor/VendorhomeScreen';
import VendorhomeitemScreen from '../../VendorScreens/AddVendor/HomeItem';
import editvendorScreen from '../../VendorScreens/editVendor';


const Stackvendorhome=createStackNavigator();

const Vendorhomestack =() => {
    return (
    <Stackvendorhome.Navigator  headerMode="none"  >   
    <Stackvendorhome.Screen name="VendorhomeScreen" component={VendorhomeScreen}  />                
    <Stackvendorhome.Screen name="VendorhomeitemScreen" component={VendorhomeitemScreen } />
   
    </Stackvendorhome.Navigator>
    );
  }
  
export default Vendorhomestack;