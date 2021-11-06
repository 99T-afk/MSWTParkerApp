import React, { useState, useContext } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import getLocations from "./Places";
import { useNavigation } from '@react-navigation/native';
import { Context } from "../components/Context.js";
import { Fontisto } from '@expo/vector-icons';

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
    <Fontisto name={data[item.id]["weatherIcon"]} size={27} color="black" />
    <Text>{data[item.id]["temp"]} °C</Text>
  </View>
  </TouchableOpacity>
);

const FlatListOut = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();
  const [context, setContext] = useContext(Context);

  function OnPressHandle(item){
    console.log("item oject: " + item )
    setContext(item);
    navigation.navigate('SpotScreen')
  }

  const renderItem = ({ item }) => {
    const backgroundColor = "#ebecef";
    const color = 'black';

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
    marginTop: StatusBar.currentHeight || 0,
    marginTop: 3,
    backgroundColor: "#f7fbff",
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

export default FlatListOut;