import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import WindCompass from '../components/WindCompass';
import SwellCompass from '../components/SwellCompass';
import SpotDayScroll from '../components/SpotDayScroll';
import WeatherGrid from '../components/WeatherGrid';
import TideBox from "../components/TideBox";
import { Context } from "../components/Context.js";

export default function SpotScreen() {
  const [context, setContext] = useContext(Context);
  const [daySet, daySetChange] = useState(1);
  //console.log(context);
    return (
      <View style={styles.pageStyle}>     
        <Text style={styles.titleStyle}>{context.name}</Text>
        <View style={{marginRight: 5, marginLeft: 5}}>
            <View style={styles.compass}>
              <WindCompass daySet={daySet}/>
              <SwellCompass daySet={daySet}/>
            </View>          
            <SpotDayScroll style={styles.dayScroll} daySetChange={daySetChange}/>  
            <WeatherGrid style={styles.weatherGrid} daySet={daySet}/>
            <TideBox style={styles.tideBox} daySet={daySet}></TideBox>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: "#f5f5fa",
  },
  compass: {
    marginBottom: 5,
    height: "29%",
    flexDirection: "row", 
  },
  dayScroll: {
    marginBottom: 5,
  },
  titleStyle: {
    fontSize: 25,
    alignSelf:"center",
  },
  weatherGrid: {
    backgroundColor: "#000",
    marginBottom: 5,
  },
  tideBox: {
    height: "30%",
    borderWidth: 2,
  }
})