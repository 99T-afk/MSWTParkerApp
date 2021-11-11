/**
 * @fileoverview This file renders a settings page.
 */
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

/**
 * This page contains the customisable settings for the app - units and theme.
 * @returns A settings screen that contains 2 switch buttons.
 */
export default function SettingsScreen() {
  const [settingConditionTemp, settingUpdateTemp] = useState("Imperial");
  const [settingTheme, settingThemeUpdate] = useState("Light");

  return (
    <View>
      <View>
        <Text style={styles.titleStyle}>Display units in:</Text>

        <View style={styles.containerSettings}>
          <View
            style={[
              styles.container,
              {
                flexDirection: "row",
              },
            ]}
          >
            <View style={styles.outerBoxStyle}>
              <View
                style={
                  (styles.opacityStyle,
                  { flex: 1, height: 50 },
                  settingConditionTemp == "Metric"
                    ? { backgroundColor: "#fff", flex: 1, height: 60 }
                    : { backgroundColor: "#54c3ff", flex: 1, height: 60 })
                }
              >
                <TouchableOpacity
                  item="Imperial"
                  style={{ height: "100%" }}
                  onPress={() => {
                    settingUpdateTemp("Imperial");
                  }}
                >
                  <Text style={styles.textStyle}>Imperial</Text>
                </TouchableOpacity>
              </View>
              <View
                style={
                  (styles.opacityStyle,
                  { flex: 1, height: 50 },
                  settingConditionTemp == "Imperial"
                    ? { backgroundColor: "#fff", flex: 1, height: 60 }
                    : { backgroundColor: "#54c3ff", flex: 1, height: 60 })
                }
              >
                <TouchableOpacity
                  item="Metric"
                  style={{ height: "100%" }}
                  onPress={() => {
                    alert(
                      "Unfortunately this feature has not yet been implemented."
                    );
                    settingUpdateTemp("Metric");
                  }}
                >
                  <Text style={styles.textStyle}>Metric</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ padding: 50 }}></View>
      <View>
        <Text style={styles.titleStyle}>Select the theme:</Text>

        <View style={styles.containerSettings}>
          <View
            style={[
              styles.container,
              {
                flexDirection: "row",
              },
            ]}
          >
            <View style={styles.outerBoxStyle}>
              <View
                style={
                  (styles.opacityStyle,
                  { flex: 1, height: 50 },
                  settingTheme == "Dark"
                    ? { backgroundColor: "#fff", flex: 1, height: 60 }
                    : { backgroundColor: "#54c3ff", flex: 1, height: 60 })
                }
              >
                <TouchableOpacity
                  theme="Light"
                  style={{ height: "100%" }}
                  onPress={() => {
                    settingThemeUpdate("Light");
                  }}
                >
                  <Text style={styles.textStyle}>Light</Text>
                </TouchableOpacity>
              </View>
              <View
                style={
                  (styles.opacityStyle,
                  { flex: 1, height: 50 },
                  settingTheme == "Light"
                    ? { backgroundColor: "#fff", flex: 1, height: 60 }
                    : { backgroundColor: "#54c3ff", flex: 1, height: 60 })
                }
              >
                <TouchableOpacity
                  theme="Dark"
                  style={{ height: "100%" }}
                  onPress={(theme) => {
                    alert(
                      "Unfortunately this feature has not yet been implemented."
                    );
                    settingThemeUpdate("Dark");
                  }}
                >
                  <Text style={styles.textStyle}>Dark</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  containerSettings: {
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
  },
  outerBoxStyle: {
    backgroundColor: "#fffefc",
    flexDirection: "row",
    borderWidth: 3,
    borderRadius: 5,
    height: 66,
    width: "100%",
  },
  opacityStyle: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignSelf: "center",
    justifyContent: "center",
    height: 53,
  },
  titleStyle: {
    marginTop: 3,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
  },
});
