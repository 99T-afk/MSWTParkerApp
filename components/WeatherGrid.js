import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const daysIn = [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3},
]


export default function WeatherGrid(props) {
  const renderItem = ({ item }) => <Item title={item.title}/>;

  return (
    <View style={styles.container}>
      <FlatList
        data={daysIn}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cbdaf2",
    borderRadius: 10,
  },
  testText: {
    fontSize: 40,
  },
});
