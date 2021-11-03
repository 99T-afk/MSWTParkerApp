import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import MSWdata from "./MSWApi.json";

//let data = getLocations();
let directData = MSWdata[0]["swell"]["components"]["combined"]["direction"];
let compassSize = 67;

export default function SwellCompass() {
    return (
      <View style={styles.backC}>
          <Image style={{transform: [{ scale: 0.30 },{translateY:40 -(compassSize / 2)},{ rotate: directData + "deg"},{translateX: 40-(compassSize / 2)}]}} source={require("../assets/compass.png")} />
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