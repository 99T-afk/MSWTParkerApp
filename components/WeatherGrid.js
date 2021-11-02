import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const daysIn = [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3},
]

//renders a grid row
const Item = () => {
  return(
  <View style={styles.rowGrid}>
    <Text>Hi!</Text>
  </View>
  );
  
}



const WeatherGrid = ({props}) => {
  const renderItem = ({ item }) => {return(<Item/>)};

  return (
    <View style={styles.weatherBox}>
      <FlatList
        data={daysIn}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  weatherBox: {
    backgroundColor: "#cbdaf2",
    borderRadius: 10,
    padding: 5,
  },
  rowGrid: {
    height: "5%",
    backgroundColor: "#cbdaee",
    borderRadius: 10,
  },
  testText: {
    fontSize: 40,
  },
});

export default WeatherGrid;