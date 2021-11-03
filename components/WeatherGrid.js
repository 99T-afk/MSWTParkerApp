import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { DataTable } from 'react-native-paper';
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
    <AntDesign name="arrowup" size={compassSize} color="black" style={{transform: [{ rotate: props.directData + "deg"}]}} />
  ); 
}


export default function WeatherGrid (props){
  //const renderItem = ({ item }) => {return(<Item/>)};
  let directData = MSWdata[props.daySet]["wind"]["direction"];

  return (
    <View style={styles.weatherBox}>
      <View style={styles.rowTitle}>
        <Text>Time</Text>
        <Text>Swell</Text>
        <Text>Wind</Text>
      </View>
      <View style={styles.rowGrid}>
        <Text>6am</Text>
        <Text>10ft. @ 4s</Text>
        <MiniCompass directData={directData}/>
      </View>
      <View style={styles.rowGrid}>
        <Text>Noon</Text>
        <Text>12ft. @ 6s</Text>
        <MiniCompass directData={12}/>
      </View>
      <View style={styles.rowGrid}>
        <Text>6pm</Text>
        <Text>7ft. @ 3s</Text>
        <MiniCompass directData={80}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  weatherBox: {
    backgroundColor: "#000",
    borderRadius: 10,
    flex: 1,
  },
  rowGrid: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#cbdaee",
  },
  rowTitle: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#cbdaee",
    fontSize: 40,
    fontWeight: 'bold',
  },
  rowBox: {
    height: "5%",
    backgroundColor: "#ffffff",
  },
  testText: {
    fontSize: 40,
  },
});

/**
 * 
 * <FlatList
        data={daysIn}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

 */