import React, { useState, useContext } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import getLocations from "./Places";
import { useNavigation } from '@react-navigation/native';
import { Context } from "../components/Context.js";

//console.log(getLocations());

/** Calls data, returns object of locations and their ID */
let data = getLocations();

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
    <Text style={[styles.smalltext, textColor]}>{item.distance}</Text>
  </TouchableOpacity>
);

const FlatListOut = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();
  const [context, setContext] = useContext(Context);

  function OnPressHandle(item){
    setContext(item);
    navigation.navigate('SpotScreen')
  }

  const renderItem = ({ item }) => {
    const backgroundColor = "#dedede";
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
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    marginTop: 3,
  },
  item: {
    flex: 1,
    padding: 15,
    marginVertical: 3,
    marginHorizontal: 7,
    borderRadius: 4,
  },
  smalltext:{
    fontSize: 12,
  },
  title: {
    fontSize: 18,
  },
});

export default FlatListOut;