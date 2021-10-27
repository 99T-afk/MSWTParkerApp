import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function WindCompass() {
    return (
      <View style={styles.back}>
          <AntDesign name="arrowup" size={66} color="black" style={{transform: [{translateY:100-33},{ rotate: '270deg'},{translateX: 100-33}]}} />
          <Text>Hello!</Text>      
      </View>
    );
}

const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%",
        backgroundColor: "#cffffe",
        borderRadius: 10,
    }
  })