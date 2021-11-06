import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default function SettingsScreen() {
 
    return (
      <View style={styles.container}>
          <Text>Settings Screen!</Text>
      </View>  
      );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f5f5fa",
  }
});