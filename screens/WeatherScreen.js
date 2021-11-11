/**
 * @fileoverview Retrieves 48 hour weather data from external OpenWeatherAPI API and displays it.
 */
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../components/Context.js";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { Fontisto } from "@expo/vector-icons";

/**
 * Function that retrieves JSON from external API, then renders selected contents of the JSON.
 * @returns View containing external weather data on selected location.
 */
export default function WeatherScreen() {
  const [context, setContext] = useContext(Context);
  const [weatherData, weatherDataUpdate] = useState();
  let KEY = "08c163596ba8b99ec861254264859f20";

  /**
   * useEffect controls the asynchronous access of the API
   */
  useEffect(() => {
    fetchWeather(context.lat, context.long);
  }, []);

  /**
   * Function responsible for getting external weather data, returned as a JSON
   * @param {*} lat the latitude taken from the item (location object) passed in.
   * @param {*} lon the longtitude taken from the item (location object) passed in.
   */
  function fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=${KEY}&exclude=daily,minutely&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        weatherDataUpdate(WeatherGrid(data));
      });
  }

  /**
   * This component displays the object taken from the external JSON.
   * @param {*} props takes in a specific hour from the 48 hour JSON object
   * @returns A single row view containing an hour of information from the JSON.
   */
  const WeatherRow = (props) => {
    let outsideConditions = "cloudy";
    switch (props.weatherCondition) {
      case "Rain":
        outsideConditions = "rains";
        break;
      case "Clouds":
        outsideConditions = "cloudy";
        break;
      case "Clear":
        outsideConditions = "day-sunny";
        break;
      case "Snow":
        outsideConditions = "snow";
        break;
      case "Drizzle":
        outsideConditions = "rain";
        break;
      default:
        outsideConditions = "cloudy";
        break;
    }
    return (
      <View style={styles.rowWeatherBox}>
        <Text style={styles.rowWeatherText}>{props.dt}:00</Text>
        <Text style={styles.rowWeatherText}>{props.temp}°C</Text>
        <Text style={styles.rowWeatherText}>{props.wind_speed} kph</Text>
        <Fontisto name={outsideConditions} size={24} color="black" />
      </View>
    );
  };

  /**
   * Responsible for looping through the external API and creating a seperate weatherRow component.
   * @param {*} weatherArr The external JSON data
   * @returns 48 instances of the WeatherRow component
   */
  const WeatherGrid = (weatherArr) => {
    let weatherList = [];
    for (let index = 0; index < 47; index++) {
      let element = (
        <WeatherRow
          key={index}
          dt={new Date(weatherArr["hourly"][index]["dt"] * 1000).getHours()}
          temp={Math.trunc(weatherArr["hourly"][index]["temp"])}
          wind_speed={Math.trunc(weatherArr["hourly"][index]["wind_speed"])}
          weatherCondition={weatherArr["hourly"][index]["weather"][0]["main"]}
        />
      );
      weatherList.push(element);
    }
    return weatherList;
  };

  return (
    <View style={styles.weatherScreenPage}>
      <Text style={styles.titleText}>{context.name}</Text>
      <View style={styles.headingStyle}>
        <Text style={styles.headingText}>Time (24hr)</Text>
        <Text style={styles.headingText}>Temp.</Text>
        <Text style={styles.headingText}>Wind Speed</Text>
        <Text style={styles.headingText}>Conditions</Text>
      </View>
      <ScrollView>
        <View style={styles.scrollContainer}>{weatherData}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherScreenPage: {
    backgroundColor: "#f8f8f8",
  },
  scrollContainer: {
    marginBottom: 70,
  },
  titleText: {
    fontSize: 25,
    alignSelf: "center",
  },
  headingStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 6,
  },
  headingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rowWeatherBox: {
    height: 50,
    padding: 5,
    marginHorizontal: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#d7f3ff",
    alignItems: "center",
  },
  rowWeatherText: {
    fontSize: 18,
  },
});
