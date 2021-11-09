import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WeatherFlatList from '../components/WeatherFlatlist';


export default function HomeScreen() {
    return (
      <View style={{ flex: 1}}>
            <WeatherFlatList></WeatherFlatList>
      </View>
    );
  }