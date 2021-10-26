import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlatList from '../components/HomepageFlatlist';
import HomepageFlatList from '../components/HomepageFlatlist';


export default function HomeScreen() {
    return (
      <View style={{ flex: 1}}>
            <HomepageFlatList></HomepageFlatList>
      </View>
    );
  }