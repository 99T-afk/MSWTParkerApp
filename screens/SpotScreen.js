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
import SpotDayScroll from '../components/SpotDayScroll';
import WeatherGrid from '../components/WeatherGrid';
import { Context } from "../components/Context.js";
import MSWdata from "../components/MSWApi.json";


export default function SpotScreen() {
  const [context, setContext] = useContext(Context);
  const [daySet, daySetChange] = useState(4);
  //console.log(context);
    return (
      <View style={styles.pageStyle}>     
        <Text style={styles.titleStyle}>{context.name}</Text>
          <View style={styles.compass}>
            <WindCompass daySet={daySet}/>
            <SwellCompass/>
          </View>
          <SpotDayScroll daySetChange={daySetChange}/>  
          <WeatherGrid style={styles.weatherGrid} daySet={daySet}/>
      </View>
    );
}

const styles = StyleSheet.create({
  pageStyle: {
    padding: 0,
  },
  compass: {
    margin: 5,
    height: "50%",
    flexDirection:"row", 
  },
  dayScroll: {
    margin: 5,
    marginBottom: 500,
  },
  titleStyle: {
    fontSize: 25,
    alignSelf:"center",
  },
  weatherGrid: {
    backgroundColor: "#000",
  },

})