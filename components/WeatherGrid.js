import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import MSWdata from "./MSWApi.json";



let compassSize = 40;



//renders a grid row
const Item = () => {
  return(
  <View style={styles.rowGrid}>
    
  </View>
  ); 
}

const MiniCompass = (props) => {
  return(
    <View>
    <AntDesign name="arrowup" size={compassSize} color="black" style={{transform: [{ rotate: MSWdata[props.daySet * 4]["wind"]["direction"] + "deg"}]}} />
    <Text></Text>
    </View>
  ); 
}


export default function WeatherGrid (props){
  //const renderItem = ({ item }) => {return(<Item/>)};
  let directData = MSWdata[props.daySet]["wind"]["direction"];
  let clicked = 1;
  console.log(props.daySet);

  return(
    <View style={styles.weatherBox}>
      <View style={styles.rowTitle}>
        <Text style={styles.textTitleGrid}>Time</Text>
        <Text style={styles.textTitleGrid}>Swell</Text>
        <Text style={styles.textTitleGrid}>Wind</Text>
      </View>
      <View style={styles.rowGrid}>
        <Text style={styles.rowText}>6am</Text>
        <Text style={styles.rowText}>{MSWdata[props.daySet * 4]["swell"]["components"]["combined"]["height"]} @ {MSWdata[props.daySet * 4]["swell"]["components"]["combined"]["period"]}s</Text>
        <AntDesign name="arrowup" size={compassSize} color="black" style={{transform: [{ rotate: MSWdata[props.daySet * 4]["wind"]["direction"] + "deg"}]}} />
      </View>
      <View style={styles.rowGrid}>
        <Text style={styles.rowText}>Noon</Text>
        <Text style={styles.rowText}>{MSWdata[props.daySet * 4 + 2]["swell"]["components"]["combined"]["height"]} @ {MSWdata[props.daySet * 4 + 2]["swell"]["components"]["combined"]["period"]}s</Text>
        <AntDesign name="arrowup" size={compassSize} color="black" style={{transform: [{ rotate: MSWdata[props.daySet * 4 + 2]["wind"]["direction"] + "deg"}]}} />
      </View>
      <View style={styles.rowGrid}>
        <Text style={styles.rowText}>6pm</Text>
        <Text style={styles.rowText}>{MSWdata[props.daySet * 4 + 3]["swell"]["components"]["combined"]["height"]} @ {MSWdata[props.daySet  * 4 + 3]["swell"]["components"]["combined"]["period"]}s</Text>
        <AntDesign name="arrowup" size={compassSize} color="black" style={{transform: [{ rotate: MSWdata[props.daySet * 4 + 3]["wind"]["direction"] + "deg"}]}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherBox: {
    backgroundColor: "#fff000",
    borderRadius: 10,
  },
  rowGrid: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#cbdaee",
    borderRadius: 10,
    alignItems: "center",
  },
  rowTitle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowText: {
    fontSize: 17,
  },
  textTitleGrid: {
    fontSize: 17,
    fontWeight: 'bold',
  }
});

/**
 * 
 * <FlatList
        data={daysIn}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

 */