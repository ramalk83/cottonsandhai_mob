
import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VendorStackNavigation from '../../navigation/StackNavigators/vendorStackNavigation';
import TradeStackNavigation from '../../navigation/StackNavigators/TradeStackNavigation';
import HomeScreen from '../../AuthScreens/HomeScreen'

const StackHome=createStackNavigator();

const navOptionHandler=()=>{
    headerShown:false;
  }
const HomeStackNavigation =() => {
    return (
    <StackHome.Navigator >  
    <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>          
    <StackHome.Screen name="Vendor" component={VendorStackNavigation} options={navOptionHandler}/>          
    <StackHome.Screen name="Trade" component={TradeStackNavigation} options={navOptionHandler}/>          
    </StackHome.Navigator>
    );
  }

  
export default HomeStackNavigation;