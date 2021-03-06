/**
 * @fileoverview WeatherGrid renders the surf weather from 3 points in a given day.
 */
import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MSWdata from "./MSWApi.json";

//sets size of the icon used as a compass.
let compassSize = 40;

/**
 * WeatherGrid component that returns surf information from 3 points in the day.
 * @param {*} props
 * @returns A header and view containing surf information.
 */
export default function WeatherGrid(props) {
  return (
    <View style={styles.weatherBox}>
      <View style={styles.rowTitle}>
        <Text style={styles.textTitleGrid}>Time</Text>
        <Text style={styles.textTitleGrid}>Swell</Text>
        <Text style={styles.textTitleGrid}>Wind</Text>
      </View>
      <View style={styles.rowGrid}>
        <Text style={styles.rowText}>6am</Text>
        <Text style={styles.rowText}>
          {
            MSWdata[props.daySet * 4]["swell"]["components"]["combined"][
              "height"
            ]
          }{" "}
          @{" "}
          {
            MSWdata[props.daySet * 4]["swell"]["components"]["combined"][
              "period"
            ]
          }
          s
        </Text>
        <View>
          <AntDesign
            name="arrowup"
            size={compassSize}
            color="black"
            style={{
              transform: [
                {
                  rotate:
                    MSWdata[props.daySet * 4]["wind"]["direction"] + "deg",
                },
              ],
            }}
          />
          <Text style={styles.textWindDirection}>
            {MSWdata[props.daySet * 4]["wind"]["compassDirection"]}
          </Text>
        </View>
      </View>
      <View style={styles.rowGrid}>
        <Text style={styles.rowText}>Noon</Text>
        <Text style={styles.rowText}>
          {
            MSWdata[props.daySet * 4 + 2]["swell"]["components"]["combined"][
              "height"
            ]
          }{" "}
          @{" "}
          {
            MSWdata[props.daySet * 4 + 2]["swell"]["components"]["combined"][
              "period"
            ]
          }
          s
        </Text>
        <View>
          <AntDesign
            name="arrowup"
            size={compassSize}
            color="black"
            style={{
              transform: [
                {
                  rotate:
                    MSWdata[props.daySet * 4 + 2]["wind"]["direction"] + "deg",
                },
              ],
            }}
          />
          <Text style={styles.textWindDirection}>
            {MSWdata[props.daySet * 4 + 2]["wind"]["compassDirection"]}
          </Text>
        </View>
      </View>
      <View style={styles.rowGrid}>
        <Text style={styles.rowText}>6pm</Text>
        <Text style={styles.rowText}>
          {
            MSWdata[props.daySet * 4 + 3]["swell"]["components"]["combined"][
              "height"
            ]
          }{" "}
          @{" "}
          {
            MSWdata[props.daySet * 4 + 3]["swell"]["components"]["combined"][
              "period"
            ]
          }
          s
        </Text>
        <View>
          <AntDesign
            name="arrowup"
            size={compassSize}
            color="black"
            style={{
              transform: [
                {
                  rotate:
                    MSWdata[props.daySet * 4 + 3]["wind"]["direction"] + "deg",
                },
              ],
            }}
          />
          <Text style={styles.textWindDirection}>
            {MSWdata[props.daySet * 4 + 3]["wind"]["compassDirection"]}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherBox: {
    borderRadius: 5,
    marginBottom: 5,
  },
  rowGrid: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#e3f5ff",
    borderRadius: 5,
    alignItems: "center",
  },
  rowTitle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowText: {
    fontSize: 18,
  },
  textTitleGrid: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  textWindDirection: {
    alignSelf: "center",
    fontSize: 16,
  },
});