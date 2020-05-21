
import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VendorScreen from '../../VendorScreens/VendorScreen';
import VendorhomeScreen from '../../VendorScreens/VendorhomeScreen';
import editvendorScreen from '../../VendorScreens/editVendor';
import CustomHeader from '../../navigation/CustomHeader';

const Stackvendor=createStackNavigator();
 
   const VendorStackNavigation =() => {
    return (
    <Stackvendor.Navigator   headerMode="none"  initialRouteName="Vendor">  
    <Stackvendor.Screen name="Vendor" 
    component={VendorScreen} 
    options={({ navigation}) => ({
      headerTitle: () => <CustomHeader title="Vendor" navigation={navigation} />
    })}
       
    />   
    <Stackvendor.Screen name="VendorhomeScreen" 
    component={VendorhomeScreen}     options={{ title: 'Add vendor1' }}/>   
    <Stackvendor.Screen name="editVendor" component={editvendorScreen}  options={{ title: 'Edit vendor1' }}    />        
     </Stackvendor.Navigator>
    ); 
  }

  
export default VendorStackNavigation;