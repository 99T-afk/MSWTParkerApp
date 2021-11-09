import React, { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SettingsScreen() {
  const [settingConditionTemp, settingUpdateTemp] = useState("Imperial");
  const [settingTheme, settingThemeUpdate] = useState("Light");

    return (
      <View style={styles.containerSettings}>
            <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>
      <View style={styles.opacityStyle, { flex: 1, height: 60 }, settingConditionTemp == "Metric" ? {backgroundColor: '#fff', flex: 1, height:60} : {backgroundColor: '#54c3ff', flex: 1, height: 60}}>
      <TouchableOpacity style={{height:"100%"}} onPress={() => settingUpdateTemp("Imperial")}>
      <Text style={styles.textStyle}>Imperial</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.opacityStyle, { flex: 1, height: 60, }, settingConditionTemp == "Imperial" ? {backgroundColor: '#fff', flex: 1, height:60} : {backgroundColor: '#54c3ff', flex: 1, height: 60}} >
      <TouchableOpacity style={{height:"100%"}} onPress={() => settingUpdateTemp("Metric")}>
      <Text style={styles.textStyle}>Metric</Text>
      </TouchableOpacity>
      </View>
    </View>



        <Text style={styles.titleStyle}>Display units in:</Text>
        <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>
          <View style={styles.opacityStyle, { flex: 1, height: 60 },  settingConditionTemp == "Metric" ? {backgroundColor: '#fff'} : {backgroundColor: '#54c3ff'}}>
              <TouchableOpacity style={{backgroundColor: "pink"}} onPress={() => settingUpdateTemp("Imperial")}>
                <Text style={styles.textStyle}>Imperial</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.opacityStyle, { flex: 1, height: 60 }, settingConditionTemp == "Metric" ? {backgroundColor: '#54c3ff'} : {backgroundColor: '#fff'}}>
              <TouchableOpacity  onPress={() => settingUpdateTemp("Metric")}>
                <Text style={styles.textStyle}>Metric</Text>
              </TouchableOpacity>
            </View>
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
  container: {
    flex: 1,
    padding: 20,
  },
  containerSettings: {
    marginLeft: 5,
    marginRight: 5,
    flex: 1
  },
  outerBoxStyle: {
    backgroundColor: "#fffefc", 
    flexDirection: "row",
    borderWidth: 3, 
    borderRadius: 5,
    height: 60,
    width: "100%"
  },
  opacityStyle: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignSelf: "center",
    justifyContent: "center",
    height: 60
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