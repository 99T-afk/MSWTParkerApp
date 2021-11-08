import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SettingsScreen() {
  const [settingCondition, settingUpdate] = useState("F");

    return (
      <View style={styles.containerSettings}>
        <Text style={{marginTop: 3, fontSize: 20, fontWeight: "bold"}}>Display units in:</Text>
        <View style={{ backgroundColor: "#fffefc", flexDirection: "row", height: 50,borderWidth: 3, borderRadius: 5}}>
          <View style={styles.opacityStyleLeft}>
          <TouchableOpacity onPress={() => prompt("hi")}>
            <Text>Imperical</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.opacityStyleRight}>
          <TouchableOpacity onPress={() => prompt("hi")}>
            <Text>Metric</Text>
          </TouchableOpacity>
          </View>
        </View>


        <Text style={{marginTop: 3, fontSize: 20, fontWeight: "bold"}}>App color scheme:</Text>
        <View style={{ backgroundColor: "#ffff00", flexDirection: "row", height: 50,borderWidth: 3, borderRadius: 5}}>
          <View style={{width: "50%"}}>
          <TouchableOpacity style={styles.opacityStyleLeft} onPress={() => prompt("hi")}>
            <Text>Light</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.opacityStyleRight}>
          <TouchableOpacity onPress={() => prompt("hi")}>
            <Text>Dark</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>  
      );
  
}

const styles = StyleSheet.create({
  containerSettings: {
    marginLeft: 5,
    marginRight: 5,
  },
  opacityStyleLeft: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,   
    alignSelf: "center",
    borderBottomWidth: "50%",
    width: "50%"
  },
  opacityStyleRight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#feee00",
  },
});