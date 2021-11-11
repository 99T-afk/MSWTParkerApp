/**
 * @fileoverview Renders a flatlist on the homepage, from which a user can select a spot to view data on.
 */
import React, { useState, useContext } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import getLocations from "./Places";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../components/Context.js";
import { Fontisto } from "@expo/vector-icons";

// Calls data, returns object of locations and their ID
let data = getLocations();

/**
 * Item - a component that renders each location on the flatlist
 * @param {*} item - an object that contains information on the location
 * @param {*} OnPress - information on what was pressed
 * @param {*} backgroundColor - styling for the view
 * @param {*} textColor - styling for the text
 * @returns A touchable view containing information on the item
 */
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
      <Text style={[styles.smalltext, textColor]}>{item.distance}</Text>
    </View>
    <View style={styles.weatherIcon}>
      <Fontisto name={data[item.id]["weatherIcon"]} size={27} color="black" />
      <Text>{data[item.id]["temp"]} °C</Text>
    </View>
  </TouchableOpacity>
);

/**
 * HomepageFlatlist - Contains the code for defining and rendering a flatlist
 * @returns A flatlist component.
 */
const HomepageFlatlist = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();
  const [context, setContext] = useContext(Context);

  //Function that handles the onpress for the item, navigating the user.
  function OnPressHandle(item) {
    setContext(item);
    navigation.navigate("SpotScreen");
  }

  //Function that renders a single row on the flatlist.
  const renderItem = ({ item }) => {
    const backgroundColor = "#ebecef";
    const color = "black";

    return (
      <View>
        <Item
          item={item}
          onPress={() => OnPressHandle(item)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        persistentScrollbar={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7fbff",
    paddingTop: 5,
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

export default HomepageFlatlist;
