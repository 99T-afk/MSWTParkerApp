import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import MSWdata from "./MSWApi.json";

//let data = getLocations();
let directData = MSWdata[0]["swell"]["components"]["combined"]["direction"];
let compassSize = 80;

export default function SwellCompass() {
    return (
      <View style={styles.backC}>
          <AntDesign name="arrowup" size={compassSize} color="black" style={{transform: [{translateY:100-(compassSize / 2)},{ rotate: directData + "deg"},{translateX: 100-(compassSize / 2)}]}} />
          <Text style={styles.swellText}>{directData + "°"}</Text>   
      </View>
    );
}

const styles = StyleSheet.create({
    backC: {       
        width: "50%",
        backgroundColor: "#03fc84",
        borderRadius: 10,
    },
    swellText: {
        fontSize: 25,
        marginTop: "50%",
        alignSelf: "center",
    }
  })