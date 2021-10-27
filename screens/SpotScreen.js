import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WindCompass from '../components/WindCompass';


export default function SpotScreen() {
    return (
      <View style={styles.windComp}>
            <WindCompass/>
      </View>
    );
}

const styles = StyleSheet.create({
  windComp: {
    width: "50%",
    height: "50%",
  }
})