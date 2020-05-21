
import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VendorStackNavigation from '../../navigation/StackNavigators/vendorStackNavigation';
import TradeStackNavigation from '../../navigation/StackNavigators/TradeStackNavigation';
import HomeScreen from '../../AuthScreens/HomeScreen'
import CustomHeader from '../../navigation/CustomHeader';

const StackHome=createStackNavigator();

const HomeStackNavigation =() => {
    return (
    <StackHome.Navigator  headerMode="none" > 
    <StackHome.Screen name="Home" component={HomeScreen}  
     options={({ navigation}) => ({
    headerTitle: () => <CustomHeader title="Home" navigation={navigation} />
    })}
    />          
    <StackHome.Screen name="Vendor" component={VendorStackNavigation} 
    options={{ title:'Vendor'}}/>          
    <StackHome.Screen name="Trade" component={TradeStackNavigation} 
    options={{ title:'Trade'}}/>          
    </StackHome.Navigator>
    );
  }

 
export default HomeStackNavigation;