/**
 * @fileoverview App.js - default entry point for the application.
 */
import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SpotScreen from "./screens/SpotScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MediaScreen from "./screens/MediaScreen";
import LiveWeatherSelectScreen from "./screens/LiveWeatherSelectScreen";
import { AntDesign, Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Context } from "./components/Context.js";
import TopBar from "./components/TopBar";
import WeatherScreen from "./screens/WeatherScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
const SpotStack = createNativeStackNavigator();

/**
 * MyTabs - A function that initialises the bottom tag navigator.
 * @returns 
 */
function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="#fff"
      inactiveColor="#000000"
      tabBarPosition="bottom"
      barStyle={{ backgroundColor: "#54c3ff" }}
      screenOptions={{
        tabBarItemStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Live Weather",
          tabBarIcon: ({ color, size }) => (
            <Feather name="sun" size={24} color="black" />
          ),
        }}
        name="LiveWeather"
        component={LiveWeatherSelectScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Media",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="picture" size={24} color="black" />
          ),
        }}
        name="Media"
        component={MediaScreen}
      />
    </Tab.Navigator>
  );
}

/**
 * StackNav - a function that defines the stack navigator that encapsulates the entire project.
 * @returns 
 */
const StackNav = () => {
  return (
    <SpotStack.Navigator initialRouteName={{ MyTabs }}>
      <SpotStack.Screen
        name="Tab"
        component={MyTabs}
        options={{
          headerShown: false,
          marginTop: StatusBar.currentHeight || 0,
        }}
      />
      <SpotStack.Screen
        name="SpotScreen"
        component={SpotScreen}
        options={{
          headerShown: false,
          marginTop: StatusBar.currentHeight || 0,
        }}
      />
      <SpotStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: false,
          marginTop: StatusBar.currentHeight || 0,
        }}
      />
      <SpotStack.Screen
        name="WeatherScreen"
        component={WeatherScreen}
        options={{
          headerShown: false,
          marginTop: StatusBar.currentHeight || 0,
        }}
      />
    </SpotStack.Navigator>
  );
};

/**
 * App - the default entrypoint for the project.  Initialises all navigation.
 * @returns 
 */
export default function App() {
  const [context, setContext] = useState("default context value");
  return (
    <Context.Provider value={[context, setContext]}>
      <NavigationContainer>
        <View style={styles.topbar}>
          <TopBar />
        </View>
        <StackNav />
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
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
  },
  imageLogo: {
    width: 150,
    height: 40,
    alignItems: "flex-start",
  },
});
