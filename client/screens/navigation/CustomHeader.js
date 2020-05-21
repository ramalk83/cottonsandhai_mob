import React,{useEffect,useState,Component} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {View, Text, StyleSheet, Image, Modal,TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import { withNavigation } from 'react-navigation';

export default function CustomHeader({ title, navigation,isHome }){

    const openMenu = () => {
      navigation.dispatch(DrawerActions.toggleDrawer());
    }
    return(
   <View style={{flexDirection:'row',height:50,borderBottomColor:'gray',backgroundColor:'white',borderBottomWidth:0.5}}>
     <View style={{flex:1,justifyContent:'center'}}>
      {
       isHome ?  

       <TouchableOpacity  onPress={openMenu}>
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
         <Text style={{textAlign:'center',fontSize:18,fontWeight: 'bold'}}>{title}</Text>
         </View>
       <View style={{flex:1}}></View>
     </View>
   )
 }


