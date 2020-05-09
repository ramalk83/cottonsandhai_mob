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
          marginBottom:8,
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
    marginLeft:20,
    marginRight:40,
    marginTop:18,
    borderColor:"gray",
    borderWidth:1,
    borderRadius:5
  },

  signinTextCont:{
    fontSize:18,
    marginTop:130,
    color:'#222222',
    textAlign: 'center',
  },
  tabback:{
    backgroundColor: 'white',
  },

  titleContainer:{
    flexDirection:'row',
    justifyContent:'flex-end'
},
description:{
  flex:1,
  fontSize:22,
  color:'grey',
  paddingTop:10         
},
himage:{
  width:20,
  marginLeft:40,
  height:20
},
item: {
  
 backgroundColor:'lightgray',
  marginVertical: 2,
  height:40,
  marginHorizontal: 6,
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
  },
  //Drawerscreen
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  itemtitle: {
    fontSize: 30,
    marginTop: 5,
    marginBottom:20,
    fontWeight: 'bold',
     textAlign:'center',
    
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 2,
  },
  topDrawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    
},
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  titleContainer:{
    fontSize:20,
  },
  dataContainer:{
    fontSize:16,
  },
  iconContainer:{
    flexDirection:'row',
    color: 'blue',
  },
  deleteContainer:{
    flexDirection:'row',
    color: 'blue',
    marginBottom:20
  },
  detailButton:{
    marginLeft:2,
    marginRight:10,
    marginTop:10,
    backgroundColor: '#a7c4aa',
    color:'#fff',
    fontSize:20,
    textAlign: 'center',
    borderRadius: 4,
    padding:5
  },

  flatlisttext:{
    fontSize:32,
    marginLeft:50,
    backgroundColor:'grey'
},

  ititle:{
    color:'black',
    fontSize:25,
    textAlign: 'left',
    borderRadius: 20,
    marginBottom:20,
    marginTop:5,
    paddingBottom:10
  }, 
//vendor delete modal
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 10,
  padding: 8,
  elevation: 2,
  marginRight:10,
  marginTop:10
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
}
  });