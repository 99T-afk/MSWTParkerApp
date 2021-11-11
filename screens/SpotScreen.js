/**
 * @fileoverview This screen is responsible for calling and styling the multiple components that
 * make up the SpotScreen.
 */
import React, { useContext, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import WindCompass from "../components/WindCompass";
import SwellCompass from "../components/SwellCompass";
import SpotDayScroll from "../components/SpotDayScroll";
import WeatherGrid from "../components/WeatherGrid";
import TideBox from "../components/TideBox";
import { Context } from "../components/Context.js";
import MSWdata from "../components/MSWApi.json";

/**
 * SpotScreen - returns multiple components to be rendered.
 * @returns Returns multiple components to be rendered.
 */
export default function SpotScreen() {
  const [context, setContext] = useContext(Context);
  const [daySet, daySetChange] = useState(0);

  return (
    <View style={styles.pageStyle}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.titleStyle}>
          {context.name} - {MSWdata[daySet]["day"]}
        </Text>
      </View>
      <View style={{ marginRight: 5, marginLeft: 5 }}>
        <View style={styles.compass}>
          <WindCompass daySet={daySet} />
          <SwellCompass daySet={daySet} />
        </View>
        <SpotDayScroll style={styles.dayScroll} daySetChange={daySetChange} />
        <WeatherGrid style={styles.weatherGrid} daySet={daySet} />
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
    marginBottom: 7,
    height: "29%",
    flexDirection: "row",
  },
  dayScroll: {
    marginBottom: 5,
  },
  titleStyle: {
    fontSize: 24,
    alignSelf: "center",
    margin: 3,
  },
  weatherGrid: {
    backgroundColor: "#000",
    marginBottom: 5,
  },
  tideBox: {
    height: "30%",
    borderWidth: 2,
  },
});
