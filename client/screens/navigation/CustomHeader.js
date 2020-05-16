import React,{useEffect,useState,Component} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {View, Text, StyleSheet, Image, Modal,TouchableOpacity} from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';

function CustomHeader({title,isHome,navigation}){
    return(
   <View style={{flexDirection:'row',height:50}}>
     <View style={{flex:1,justifyContent:'center'}}>
      {
       isHome ?  

       <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <Image style={{width:30,height:30,marginLeft:5}}
          source={require('../../assets/images/menu.png')}
          resizeMethod="auto"/>
       </TouchableOpacity>    
         
        :
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
          onPress={()=>navigation.goBack()}>
          <Image style={{width:30,height:30,marginLeft:5}}
          source={require('../../assets/images/arrow.png')}
          resizeMethod="auto"/>
          </TouchableOpacity>
        }
        </View>
        <View style={{flex:1.5,justifyContent:'center'}}>
          <Text style={{textAlign:'center'}}>{title}</Text>
          </View>
        <View style={{flex:1}}></View>
      </View>
    )
  }

  export default CustomHeader