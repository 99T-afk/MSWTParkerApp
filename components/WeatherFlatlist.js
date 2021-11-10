import React, { useState, useContext } from "react";
import { FlatList, SafeAreaView, SearchBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import getLocations from "./Places";
import { useNavigation } from '@react-navigation/native';
import { Context } from "../components/Context.js";
import { AntDesign, Fontisto } from '@expo/vector-icons';
import WeatherScreen from '../screens/WeatherScreen';

//console.log(getLocations());

/** Calls data, returns object of locations and their ID */
let data = getLocations();

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]} >
  <View>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
    <Text style={[styles.smalltext, textColor]}>{item.distance}</Text>
  </View>
  <View style={styles.weatherIcon}>  
    <AntDesign name="right" size={29} color="black" />
  </View>
  </TouchableOpacity>
);

const WeatherFlatList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();
  const [context, setContext] = useContext(Context);

  function OnItemPressHandle(item){
    //console.log("item object: " + item.name )
    setContext(item);
    navigation.navigate('WeatherScreen');
  }

  const renderItem = ({ item }) => {
    const backgroundColor = "#ebecef";
    const color = 'black';

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
    <SafeAreaView style={styles.container}>
        <Text>Live Weather - Live weather data provided from OpenWeatherAPI.</Text>
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
    height: "50%"
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
  smalltext:{
    fontSize: 12,
  },
  title: {
    fontSize: 23,
  },
  weatherIcon: {
    marginRight: "2%",
    marginTop: "2%",
  }
});

export default WeatherFlatList;