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
    marginTop:80
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