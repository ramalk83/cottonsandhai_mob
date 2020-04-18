import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../assets/css/style.js';

export function  CustomDrawerContent(props) {


    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
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

                            onPress={() => {props.navigation.navigate('Home')}}
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
                            onPress={() => {props.navigation.navigate('Vendor')}}
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
                            onPress={() => {props.navigation.navigate('Trade')}}
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
                            onPress={() => {props.navigation.navigate('Help')}}
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
                            onPress={() => {props.navigation.navigate('Contact')}}
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
                    onPress={() => {{props.navigation.navigate('Logout')}}}
                />
            </Drawer.Section>
        </View>
    );
}





