import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WeatherFlatList from '../components/WeatherFlatlist';


export default function WeatherSelectScreen() {
    return (
      <View style={styles.weatherPageStyle}>
        <View style={styles.weatherInfoStyle}>
            <Text style={styles.weatherInfoHeading}>Live Weather</Text>
            <Text style={styles.weatherInfoText}>48 hour Live weather data provided from OpenWeatherAPI.</Text>
        </View>
        <View style={styles.weatherFlatListStyle}>
            <WeatherFlatList></WeatherFlatList>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  weatherPageStyle: {
    backgroundColor: "#f7fbff",   
    marginHorizontal: 5,
  },
  weatherInfoStyle: {
    height: 75,
  },
  weatherFlatListStyle: {
    marginHorizontal: 5
  },
  weatherInfoHeading: {
    fontSize: 20,
    alignSelf: "center"
  },
  weatherInfoText: {
    fontSize: 15,
    alignSelf: "center"
  }
})