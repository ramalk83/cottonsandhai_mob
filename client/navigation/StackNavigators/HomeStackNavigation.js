
import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VendorStackNavigation from '../../navigation/StackNavigators/vendorStackNavigation';
import MainTabScreen from '../../navigation/MainTabScreen';
import TradeStackNavigation from '../../navigation/StackNavigators/TradeStackNavigation';
import HomeScreen from '../../screens/AuthScreens/HomeScreen'
import CustomHeader from '../../navigation/CustomHeader';

const StackHome=createStackNavigator();

const HomeStackNavigation =() => {
    return (
    <StackHome.Navigator  headerMode="one" initialRouteName="Home"> 
    <StackHome.Screen name="Home" component={MainTabScreen}  
     options={({ navigation}) => ({
    headerTitle: () => <CustomHeader title="Home" navigation={navigation} />
    })}
    />          
            
    </StackHome.Navigator>
    );
  }

 
export default HomeStackNavigation;