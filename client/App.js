import React,{useEffect,useState,Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackNavigation  from './screens/navigation/StackNavigators/RootStackNavigation';
import DrawerComponent from './screens/navigation/DrawerComponent';
import { AsyncStorage } from 'react-native';



const Stack=createStackNavigator();
const StackHome=createStackNavigator();


const App= ({ navigation }) => {
   const [isloggedin,setLogged] = useState(null)

   const detectLogin= async ()=>{
      const token = await AsyncStorage.getItem('token')
      if(token){
          setLogged(true)
      }else{
          setLogged(false)
      }
   }
  useEffect(()=>{
     detectLogin()
  },[])


return (
<NavigationContainer>
{isloggedin                   
?    
<StackHome.Navigator  headerMode="none" initialRouteName="Home" >   
<StackHome.Screen  name="HomeDraw" component={DrawerComponent}  
/>       
         
</StackHome.Navigator> 
:   
<Stack.Navigator  headerMode="none" initialRouteName="Login"> 
<Stack.Screen name="Root" component={RootStackNavigation}  />                  
</Stack.Navigator>    
}
  </NavigationContainer>
  );
};
export default App;