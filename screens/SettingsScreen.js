import React, { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SettingsScreen() {
  const [settingConditionTemp, settingUpdateTemp] = useState("Imperial");
  const [settingTheme, settingThemeUpdate] = useState("Light");

    return (
      <View style={styles.containerSettings}>
        <Text style={styles.titleStyle}>Display units in:</Text>
        <View style={styles.outerBoxStyle}>
          <TouchableOpacity style={{width:50}, settingConditionTemp == "Metric" ? {backgroundColor: '#fff'} : {backgroundColor: '#54c3ff'}} onPress={() => settingUpdateTemp("Imperial")}>
            <Text style={styles.textStyle}>Imperial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacityStyleRight, settingConditionTemp == "Metric" ? {backgroundColor: '#54c3ff'} : {backgroundColor: '#fff'}} onPress={() => settingUpdateTemp("Metric")}>
            <Text style={styles.textStyle}>Metric</Text>
          </TouchableOpacity>
        </View>


        <Text style={styles.titleStyle}>App color scheme:</Text>
        <View style={{ backgroundColor: "#ff3333", flexDirection: "row", height: 50,borderWidth: 3, borderRadius: 5}}>
          <View style={{width: "50%"}}>
          <TouchableOpacity style={styles.opacityStyleLeft} onPress={() => settingThemeUpdate("Light")}>
            <Text style={styles.textStyle}>Light</Text>
          </TouchableOpacity>
          </View>
          <View style={ {backgroundColor: "#ff3333"}, styles.opacityStyleRight}>
          <TouchableOpacity onPress={() => settingThemeUpdate("Dark")}>
            <Text style={styles.textStyle}>Dark</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.outerBoxStyle}>
        </View>
      </View>  
      );
  
}

const styles = StyleSheet.create({
  containerSettings: {
    marginLeft: 5,
    marginRight: 5,
  },
  outerBoxStyle: {
    backgroundColor: "#fffefc", 
    flexDirection: "row",
    borderWidth: 3, 
    borderRadius: 5,
    height: 60,
  },
  opacityStyleLeft: {
    alignSelf: "center",
    justifyContent: "center",
    width: 100,
  },
  opacityStyleRight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignSelf: "center",
    width: "50%",
  },
  titleStyle: {
    marginTop: 3, 
    fontSize: 20, 
    fontWeight: "bold"
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
  }
});