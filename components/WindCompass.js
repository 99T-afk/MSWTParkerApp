/**
 * @fileoverview A component that gets local API wind data, and renders it along with a rotating compass image.
 */
import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import MSWdata from "./MSWApi.json";

//defines the size of the compass image.
let compassSize = 65;

/**
 *
 * @param {*} props - carries daySet, which updates when the day is changed to re-render the component
 * @returns A view containing the wind compass, an image that rotates and wind information text.
 */
export default function WindCompass(props) {
  let directData = MSWdata[props.daySet]["wind"]["direction"];
  let directDataCompass = MSWdata[props.daySet]["wind"]["compassDirection"];
  let speedData = MSWdata[props.daySet]["wind"]["speed"];

  return (
    <View style={styles.back}>
      <Text style={styles.windTitle}>Wind</Text>
      <Image
        style={{
          transform: [
            { scale: 0.6 },
            { translateY: compassSize / 2 - 35 },
            { translateX: compassSize / 2 + 35 },
            { rotate: directData + "deg" },
          ],
        }}
        source={require("../assets/compass.png")}
      />
      <Text style={styles.windTextDirect}>
        {directData + "° | " + directDataCompass}
      </Text>
      <Text style={styles.windTextSpeed}>{speedData + " mph"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    width: "50%",
    backgroundColor: "#cffffe",
    borderRadius: 5,
  },
  windTitle: {
    fontSize: 23,
    alignSelf: "center",
  },
  windTextDirect: {
    fontSize: 21,
    alignSelf: "center",
  },
  windTextSpeed: {
    fontSize: 21,
    alignSelf: "center",
  },
});
