/**
 * IMPORTANT COMMANDS:
 * npm install    <-- gets all node_modules
 * git pull       <-- gets latest on github
 * git push       <-- pushs changes (REMEMBER TO COMMIT FIRST)
 * 
 * TODO:
 * 
 * Add weather icons to location places
 * 
 * 
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SpotScreen from './screens/SpotScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Context } from "./components/Context.js";
import TopBar from './components/TopBar';


const Tab = createBottomTabNavigator();
const SpotStack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
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

const StackNav = () => {
  return(
  <SpotStack.Navigator initialRouteName={{MyTabs}}>        
        <SpotStack.Screen
          name="Tab"
          component={MyTabs}
          options={{headerShown: false,marginTop: StatusBar.currentHeight || 0,}}
        />
        <SpotStack.Screen
          name="SpotScreen"
          component={SpotScreen}
          options={{headerShown: false,marginTop: StatusBar.currentHeight || 0,}}
        />
  </SpotStack.Navigator>
  )
}


export default function App() {
  const [context, setContext] = useState("default context value");
  return (  
    <Context.Provider value={[context, setContext]}>   
      <NavigationContainer>
      <View style={styles.topbar}>
        <TopBar/>
      </View>
        <StackNav/>
      </NavigationContainer>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  topbar: {
    marginTop: StatusBar.currentHeight || 0,
  },
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


/*
      <Image
        style={styles.imageLogo}
        source={{
          uri: 'http://images.magicseaweed.com/news/311.jpg',
        }}
      />

*/