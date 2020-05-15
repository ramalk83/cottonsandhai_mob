import React,{useEffect,useState,Component} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {View, Text, StyleSheet, Image, Modal,TouchableOpacity} from 'react-native';

function CustomHeader({title,isHome}){
    return(
      <View style={{flexDirection:'row',height:50}}>
      {
       isHome 
       ?
        <View style={{flex:1,justifyContent:'center'}}>
          <Image style={{width:30,height:30,marginLeft:5}}
          source={require('../../assets/images/menu.png')}
          resizeMethod="auto"/>
        </View>
       :
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
          onPress={()=>props.navigation.goBack()}>
          <Image style={{width:30,height:30,marginLeft:5}}
          source={require('../../assets/images/arrow.png')}
          resizeMethod="auto"/>
          <Text>Back</Text>
          </TouchableOpacity>
        }
        <View style={{flex:1.5,justifyContent:'center'}}>
          <text style={{textAlign:'center'}}>{title}</text>
  
        </View>
        
      </View>
    )
  }

  export default CustomHeader