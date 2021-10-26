/**
 * IMPORTANT COMMANDS:
 * npm install    <-- gets all node_modules
 * git pull       <-- gets latest on github
 * git push       <-- pushs changes (REMEMBER TO COMMIT FIRST)
 * 
 */


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
          headerShown: false,
            }}
        name="Home" 
        component={HomeScreen} />     
      <Tab.Screen
        options={{
        tabBarLabel: 'Favourites',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="staro" size={24} color="black" />
          ),
          }}
        name="Favourites"
        component={FavouriteScreen} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (  
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

/*
      <Image
        style={styles.imageLogo}
        source={{
          uri: 'http://images.magicseaweed.com/news/311.jpg',
        }}
      />

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    width: 150,
    height: 40,
    alignItems: 'flex-start',
  }
});
