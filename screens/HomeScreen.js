/**
 * @fileoverview - Returns the homescreen, which calls a flatlist component to render.
 */
import * as React from 'react';
import { View } from 'react-native';
import HomepageFlatList from '../components/HomepageFlatlist';

/**
 * HomeScreen - returns a flatlist component to render.
 * @returns A HomepageFlatList component.
 */
export default function HomeScreen() {
    return (
      <View style={{ flex: 1}}>
            <HomepageFlatList></HomepageFlatList>
      </View>
    );
  }