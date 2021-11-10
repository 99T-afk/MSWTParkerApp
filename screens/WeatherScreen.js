import React, { useContext, useState, useEffect } from "react";
import { Context } from "../components/Context.js";
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons';



export default function WeatherScreen(){
    const [context, setContext] = useContext(Context);
    const [weatherData, weatherDataUpdate] = useState();
    let KEY = "08c163596ba8b99ec861254264859f20"; 

    useEffect(() => {
      fetchWeather(context.lat,context.long);
    },[])
    function fetchWeather(lat, lon) { 
      fetch( 
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=${KEY}&exclude=daily,minutely&units=metric` 
      ) 
        .then((res) => res.json()) 
        .then((data) => { 
          weatherDataUpdate(WeatherGrid(data))
        })
      }



    const WeatherRow = (props) => {
      let outsideConditions = "cloudy"
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
      return(
          <View style={styles.rowWeatherBox}>
            <Text style={styles.rowWeatherText}>{props.dt}</Text>
            <Text style={styles.rowWeatherText}>{props.temp}°C</Text>
            <Text style={styles.rowWeatherText}>{props.wind_speed} kph</Text>
            <Fontisto name={outsideConditions} size={24} color="black" />
          </View>
      )
    };




  const WeatherGrid = (weatherArr) => {
    let weatherList = [];
    for (let index = 0; index < 47; index++) {
      let element = <WeatherRow
      key={index}
      dt={ new Date(weatherArr["hourly"][index]["dt"] * 1000).getHours()}
      temp={ Math.trunc(weatherArr["hourly"][index]["temp"])}
      wind_speed={ Math.trunc(weatherArr["hourly"][index]["wind_speed"])}

      weatherCondition={weatherArr["hourly"][index]["weather"][0]["main"]}
      />
      weatherList.push(element);
    }
    return weatherList;
  }


  return(
    <View style={styles.weatherScreenPage}>
      <Text style={styles.titleText}>{context.name}</Text>
      <View style={styles.headingStyle}>
        <Text style={styles.headingText}>Time (24hr)</Text>
        <Text style={styles.headingText}>Temp.</Text>
        <Text style={styles.headingText}>Wind Speed</Text>
        <Text style={styles.headingText}>Conditions</Text>
      </View>
      <ScrollView>
        <View style={styles.scrollContainer}>
        {weatherData}
        </View>      
    </ScrollView>
    </View>
  )
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
    alignSelf:"center",
    fontWeight: "bold",
  },
  headingStyle:{
    flexDirection: "row",
    justifyContent: "space-evenly",  
  },
  headingText:{
    fontSize: 18,
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
  }
})


/**
 * 
 * const WeatherRow = () => {
        return(
            <View>
            </View>
        )
    };
    
    const WeatherGrid = () => {
      const weatherArr = fetchWeather(50.714003, -1.8767287); 
      weatherArr = 
      for (let index = 0; index < 47; index++) {
        const element = array[index];
        <WeatherRow></WeatherRow>
      }
    }


    return(
      <ScrollView>
        <WeatherGrid></WeatherGrid>
      </ScrollView>
    )
 */









    /**
     * useEffect(() => { 
      async function getData() { 
        try { 
          fetchWeather(50.714003, -1.8767287); 
          //fetchAdafruitData("ubicomp20"); 
        } catch (e) { 
          console.log(e); 
        } 
      } 
      getData(); 
    }, []); 
     */