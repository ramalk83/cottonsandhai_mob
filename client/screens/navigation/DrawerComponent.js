import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../assets/css/style.js';
import { createDrawerNavigator } from '@react-navigation/drawer';

import VendorStackNavigation  from './StackNavigators/vendorStackNavigation';
import TradeStackNavigation  from './StackNavigators/TradeStackNavigation';
import HomeStackNavigation  from './StackNavigators/HomeStackNavigation';
import LogoutStackNavigation  from './StackNavigators/LogoutStackNavigation';
import HelpScreen from '../../screens/ContactScreens/HelpScreen';
import AccountScreen from '../../screens/ContactScreens/AccountScreen';
import HomeScreen from '../../screens/AuthScreens/HomeScreen';
import ContactScreen from '../../screens/ContactScreens/ContactScreen';
import MainTabScreen from '../../screens/navigation/MainTabScreen';
import CustomHeader from '../../screens/navigation/CustomHeader';

function DrawerComponent () {
    const Drawer = createDrawerNavigator();
    return (
     <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>   
       
       
     <Drawer.Screen name="Home" component={HomeScreen}/>  
       
     <Drawer.Screen name="Vendor" component={VendorStackNavigation} />
     <Drawer.Screen name="Trade" component={TradeStackNavigation}/>
     <Drawer.Screen name="Account" component={AccountScreen} />
     <Drawer.Screen name="Contact" component={ContactScreen} />
     <Drawer.Screen name="Help" component={HelpScreen} />     
     <Drawer.Screen name="Logout" component={LogoutStackNavigation} />
     </Drawer.Navigator>
    );
  };


 function  CustomDrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView >
                      <Drawer.Section style={styles.drawerSection}>
                      <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"                     
                            onPress={() => props.navigation.navigate('Home')}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Vendor"                     
                            onPress={() => props.navigation.navigate('Vendor')}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                                
                            )}
                            label="Trade"
                            onPress={() => props.navigation.navigate('Trade')}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                                
                            )}
                            label="Account"
                            onPress={() => props.navigation.navigate('Account')}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Help"
                            onPress={() => props.navigation.navigate('Help')}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Contact"
                            onPress={() => props.navigation.navigate('Contact')}
                        />                   
       </Drawer.Section>                  
</DrawerContentScrollView>

<Drawer.Section style={styles.bottomDrawerSection}>
           <DrawerItem 
                icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Log Out"
                    onPress={() => props.navigation.navigate('Logout')}
                />
            </Drawer.Section>
        </View>
    );
}

export default DrawerComponent;