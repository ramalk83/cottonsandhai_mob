
import React,{useEffect,useState,Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TradeScreen from '../../TradeScreens/TradeScreen';

const StackTrade=createStackNavigator();

const TradeStackNavigation =() => {
    return (
    <StackTrade.Navigator >  
    <StackTrade.Screen name="Trade" component={TradeScreen} options={{title:'Trade Screen'}}/>          
    </StackTrade.Navigator>
    );
  }

  
export default TradeStackNavigation;