import React, { useContext, useState, useEffect } from "react";
import { Context } from "../components/Context.js";
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';



export default function WeatherScreen(){
    const [context, setContext] = useContext(Context);
    const [weatherData, weatherDataUpdate] = useState();
    let KEY = "08c163596ba8b99ec861254264859f20"; 

    useEffect(() => {
      fetchWeather(50.714003, -1.8767287);
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
      console.log("Hit weatherrow")
      return(
          <View style={styles.rowWeatherBox}>
            <Text>hi!</Text>
            <Text>{props.dt}</Text>
            <Text>{props.temp}</Text>
            <Text>{props.wind_speed}</Text>
          </View>
      )
    };

  const WeatherGrid = (weatherArr) => {
    let weatherList = [];
    for (let index = 0; index < 47; index++) {
      let element = <WeatherRow
      key={index}
      dt={Date(weatherArr["hourly"][index]["dt"]).h}
      temp={weatherArr["hourly"][index]["temp"]}
      wind_speed={weatherArr["hourly"][index]["wind_speed"]}
      weatherCondition={weatherArr["hourly"][index]["weather"][0]["main"]}
      />
      weatherList.push(element);
    }
    return weatherList;
  }


  return(
    <ScrollView>
      {weatherData}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rowWeatherBox: {
    height: 40,
    backgroundColor: "#ff33ff"
  },
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