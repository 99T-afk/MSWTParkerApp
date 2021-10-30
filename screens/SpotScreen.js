/**
 * Possible build order ->
 * components get created, set use state for scrollview onTouch
 * when onTouch is hit, refresh both compasses and reset scrollview for hours
 * 
 */


import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import WindCompass from '../components/WindCompass';
import SwellCompass from '../components/SwellCompass';
import SpotScroll from '../components/SpotDayScroll';
import { Context } from "../components/Context.js";
import MSWdata from "../components/MSWApi.json";


export default function SpotScreen() {
  const [context, setContext] = useContext(Context);
  const [daySet, daySetChange] = useState(4);
  //console.log(context);
    return (
      <View>
        <Text style={styles.titleStyle}>{context.name}</Text>
          <View style={styles.compass}>
            <WindCompass daySet={daySet}/>
            <SwellCompass/>
          </View>
          <SpotScroll daySetChange={daySetChange}/>  
          <Text></Text>
      </View>
    );
}

const styles = StyleSheet.create({
  compass: {
    padding: 5,
    height: "65%",
    flexDirection:"row",  
  },
  dayScroll: {
    padding: 5,
    alignSelf:"center",
    alignContent:"flex-start",
  },
  titleStyle: {
    fontSize: 25,
    alignSelf:"center",
  },

})