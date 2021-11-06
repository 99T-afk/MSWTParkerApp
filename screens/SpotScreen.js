import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import WindCompass from '../components/WindCompass';
import SwellCompass from '../components/SwellCompass';
import SpotDayScroll from '../components/SpotDayScroll';
import WeatherGrid from '../components/WeatherGrid';
import TideBox from "../components/TideBox";
import { Context } from "../components/Context.js";
import MSWdata from "../components/MSWApi.json";


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
            <TideBox daySet={daySet}></TideBox>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  pageStyle: {
    padding: 0,
  },
  compass: {
    marginBottom: 5,
    height: "30%",
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
  },
  tideBox: {
    height: "30%",
  }
})