/**
 * @fileoverview Gets location data and renders a flatlist.
 */
import React, { useState, useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import getLocations from "./Places";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../components/Context.js";
import { AntDesign } from "@expo/vector-icons";

// Calls data, returns object of locations and their ID
let data = getLocations();

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
      <Text style={[styles.smalltext, textColor]}>{item.distance}</Text>
    </View>
    <View style={styles.weatherIcon}>
      <AntDesign name="right" size={29} color="black" />
    </View>
  </TouchableOpacity>
);

/**
 * WeatherFlatList - returns a flatlist containing location name and an OnPress method to display
 * the live weather data screen.
 * @returns A view containing a flatlist
 */
const WeatherFlatList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();
  const [context, setContext] = useContext(Context);

  //Handles the OnPress event passed to it, taking in item object (location) and passing to navigation
  function OnItemPressHandle(item) {
    setContext(item);
    navigation.navigate("WeatherScreen");
  }

  //Handles rendering the item in the flatlist.
  const renderItem = ({ item }) => {
    const backgroundColor = "#ebecef";
    const color = "black";

    return (
      <View>
        <Item
          item={item}
          onPress={() => OnItemPressHandle(item)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        persistentScrollbar={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7fbff",
    paddingTop: 5,
    borderRadius: 5,
    marginBottom: 160,
  },
  item: {
    flex: 1,
    padding: 15,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10%",
    elevation: 4,
    marginBottom: 5,
  },
  smalltext: {
    fontSize: 12,
  },
  title: {
    fontSize: 23,
  },
  weatherIcon: {
    marginRight: "2%",
    marginTop: "2%",
  },
});

export default WeatherFlatList;
