import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import MSWdata from "./MSWApi.json";

//let data = getLocations();

let compassSize = 67;

export default function SwellCompass(props) {
  let directData = MSWdata[props.daySet]["swell"]["components"]["combined"]["direction"];
  let swellDataHeight = MSWdata[props.daySet]["swell"]["components"]["combined"]["height"];
  let swellDataPeriod = MSWdata[props.daySet]["swell"]["components"]["combined"]["period"];

    return (
      <View style={styles.backC}>
        <Text style={styles.swellTitle}>Swell:</Text>
        <Image style={{transform: [{ scale: 0.65 },{translateY:(compassSize / 2)- 35},{translateX:(compassSize / 2) + 35},{ rotate: directData + "deg"}]}} source={require("../assets/compass.png")} />        
        <Text style={styles.swellText}>{directData + "°"}</Text>      
        <Text style={styles.swellText}>{swellDataHeight + " @ " + swellDataPeriod + "s"}</Text> 
      </View>
    );
}

const styles = StyleSheet.create({
    backC: {       
        width: "50%",
        backgroundColor: "#03fc84",
        borderRadius: 5,
    },
    swellTitle:{
      fontSize: 23,
      alignSelf: "center",
    },
    swellText: {
        fontSize: 21,
        alignSelf: "center",
    }
  })