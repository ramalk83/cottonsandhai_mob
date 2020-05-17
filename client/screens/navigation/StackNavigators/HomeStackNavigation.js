
import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VendorStackNavigation from '../../navigation/StackNavigators/vendorStackNavigation';
import TradeStackNavigation from '../../navigation/StackNavigators/TradeStackNavigation';
import HomeScreen from '../../AuthScreens/HomeScreen'
import DrawerComponent  from '../../navigation/DrawerComponent';
import  CustomHeader  from '../../navigation/CustomHeader';


const StackHome=createStackNavigator();


const HomeStackNavigation =() => {
    return (
    <StackHome.Navigator  headerMode="none" >  
     <StackHome.Screen
          options={{headerLeft: () => <CustomHeader />}}
          component={DrawerComponent}
          
    />
    <StackHome.Screen name="Home" component={HomeScreen} />          
    <StackHome.Screen name="Vendor" component={VendorStackNavigation} />          
    <StackHome.Screen name="Trade" component={TradeStackNavigation} />          
    </StackHome.Navigator>
    );
  }

  
export default HomeStackNavigation;