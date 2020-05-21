
import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TradeScreen from '../../screens/TradeScreens/TradeScreen';
import CustomHeader from '../../navigation/CustomHeader';


const StackTrade=createStackNavigator();

const TradeStackNavigation =() => {
    return (
    <StackTrade.Navigator  headerMode="none" >  
    <StackTrade.Screen name="Trade" component={TradeScreen} 
    options={{ headerTitle: ({navigation}) => <CustomHeader title="Trade" navigation={navigation} /> }}/>          
    </StackTrade.Navigator>
    );
  }

  
export default TradeStackNavigation;