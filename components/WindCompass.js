import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import MSWdata from "./MSWApi.json";

//let data = getLocations();
//console.log(MSWdata[0]["wind"]["direction"]);

let compassSize = 80;

export default function WindCompass(props) {
    let directData = MSWdata[props.daySet]["wind"]["direction"];
    let speedData = MSWdata[props.daySet]["wind"]["speed"];

    return (
      <View style={styles.back}>
          <Text style={styles.windTitle}>Wind:</Text>
          <AntDesign name="arrowup" size={compassSize} color="black" style={{transform: [{translateY:100 -(compassSize / 2)},{ rotate: directData + "deg"},{translateX: 100-(compassSize / 2)}]}} />
          <Text style={styles.windTextDirect}>{directData + "°"}</Text>      
          <Text style={styles.windTextSpeed}>{speedData + " mph"}</Text> 
      </View>
    );
}

const styles = StyleSheet.create({
    back: {
        width: "50%",
        backgroundColor: "#cffffe",
        borderRadius: 10,
    },
    windTitle:{
        fontSize: 25,
        marginTop: "5%",
        alignSelf: "center",
    },
    windTextDirect: {
        fontSize: 25,
        marginTop: "45%",
        alignSelf: "center",
    },
    windTextSpeed: {
        fontSize: 25,
        marginTop: "5%",
        alignSelf: "center",
    }
  })