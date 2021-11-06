import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import MSWdata from "./MSWApi.json";

//let data = getLocations();
//console.log(MSWdata[0]["wind"]["direction"]);

let compassSize = 65;

export default function WindCompass(props) {
    let directData = MSWdata[props.daySet]["wind"]["direction"];
    let directDataCompass = MSWdata[props.daySet]["wind"]["compassDirection"];
    let speedData = MSWdata[props.daySet]["wind"]["speed"];

    return (
      <View style={styles.back}>
          <Text style={styles.windTitle}>Wind:</Text>
          <Image style={{transform: [{ scale: 0.60 },{translateY:(compassSize / 2)- 35},{translateX:(compassSize / 2) + 35},{ rotate: directData + "deg"}]}} source={require("../assets/compass.png")} />        
          <Text style={styles.windTextDirect}>{directData + "° | " + directDataCompass}</Text>      
          <Text style={styles.windTextSpeed}>{speedData + " mph"}</Text> 
      </View>
    );
}

const styles = StyleSheet.create({
    back: {
        width: "50%",
        backgroundColor: "#cffffe",
        borderRadius: 5,
    },
    windTitle:{
        fontSize: 23,
        alignSelf: "center",
    },
    windTextDirect: {
        fontSize: 21,
        alignSelf: "center",
    },
    windTextSpeed: {
        fontSize: 21,
        alignSelf: "center",
    }
  })

  //old icon <AntDesign name="arrowup" size={compassSize} color="black" style={{transform: [{translateY:70 -(compassSize / 2)},{ rotate: directData + "deg"},{translateX: 70-(compassSize / 2)}]}} />