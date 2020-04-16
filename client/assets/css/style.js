import React from 'react';
import {StyleSheet} from 'react-native';


export default StyleSheet.create({

    /*Login Screen */

      container: {
          flex: 1,
          backgroundColor: '#fff',
        },
   
        
        logoImage:{
        width:70, 
        height:70,
        marginTop:70,
        marginHorizontal: 175
        },
        logoText:{
        fontSize:30,
          color:'#222222',
          textAlign: 'center',
          marginBottom:50
        },
        userinputText:{
          marginLeft:40,
          marginRight:40,
          marginTop:18,
          backgroundColor:'#fadadd'
        },
        signupTextCont:{
          fontSize:18,
          marginTop:130,
          color:'#222222',
          textAlign: 'center',
        },
        loginButton:{
          marginLeft:40,
          marginRight:40,
          marginTop:30,
          backgroundColor: '#1c313a',
          color:'#fff',
          fontSize:20,
          fontWeight:'500',
          textAlign: 'center',
          borderRadius: 20,
          paddingVertical:10
        },
        allButton:{
          marginLeft:40,
          marginRight:40,
          marginTop:30,
          backgroundColor: '#1c313a',
          color:'#fff',
          fontSize:20,
          fontWeight:'500',
          textAlign: 'center',
          borderRadius: 20,
          paddingVertical:10
        },
       googleButton:{
          marginLeft:40,
          marginRight:40,
          marginTop:30,
          backgroundColor: '#1c303a',
          color:'#fff',
          fontSize:20,
          fontWeight:'500',
          textAlign: 'center',
          borderRadius: 20,
          paddingVertical:10
        },
        FacebookStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'lightgray',
          borderWidth: 0.5,
          borderColor: '#fff',
          borderRadius: 20,
          paddingVertical:4,
          marginLeft:40,
          marginRight:40,
          marginTop:20,
        },
        ImageIconStyle: {
          padding: 8,
          margin: 7,
          marginLeft:80,
          alignItems: 'center',
          height: 30,
          width: 30,
          resizeMode: 'stretch',
        },
        TextStyle: {
          textAlign: 'center',
          alignItems: 'center',
          color:'black',
          fontSize:20,
          fontWeight:'500',
          textAlign: 'center',
          marginLeft:5,
          marginRight:40,
        },
        SeparatorLine: {
          backgroundColor: '#fff',
          width: 1,
          height: 40,
        },
/*Home style */
containerr: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeTextCont:{
    fontSize:18,
    textAlign:'center',
    marginTop:80,
    marginBottom:20
},
logoutButton:{marginLeft:40,
  marginRight:40,
  marginTop:40
},
      
/*Signup Style */
containers: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:70,
  },
  logoImage:{
  width:70, 
  height:70,
  marginHorizontal: 175
  },
  logoText:{
  fontSize:30,
    color:'#222222',
    textAlign: 'center',
    marginBottom:50
  },
  userinputText:{
    marginLeft:40,
    marginRight:40,
    marginTop:18,
    backgroundColor:'pink'
  },
  signinTextCont:{
    fontSize:18,
    marginTop:130,
    color:'#222222',
    textAlign: 'center',
  },
  signupButton:{
    marginLeft:40,
    marginRight:40,
    marginTop:30,
    backgroundColor: '#1c313a',
    color:'#fff',
    fontSize:20,
    textAlign: 'center',
    borderRadius: 20,
    paddingVertical:10
  }
  
  });