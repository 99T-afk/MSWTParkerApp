import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import getLocations from "./Places";
import { useNavigation } from '@react-navigation/native';

console.log(getLocations());

/** Calls data, returns object of locations and their ID */
let data = getLocations();

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

const FlatListOut = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const backgroundColor = "#dedede";
    const color = 'black';

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('SpotScreen')}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
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
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 7,
    borderRadius: 4,
  },
  title: {
    fontSize: 15,
  },
});

export default FlatListOut;