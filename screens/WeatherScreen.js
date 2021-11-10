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
      console.log(props.weatherCondition);
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
            <Text>{props.dt}</Text>
            <Text>{props.temp}°C</Text>
            <Text>{props.wind_speed} kph</Text>
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
      temp={weatherArr["hourly"][index]["temp"]}
      wind_speed={weatherArr["hourly"][index]["wind_speed"]}

      weatherCondition={weatherArr["hourly"][index]["weather"][0]["main"]}
      />
      weatherList.push(element);
    }
    return weatherList;
  }


  return(
    <View>
      <Text style={styles.titleStyle}>{context.name}</Text>
      <View style={styles.headingStyle}>
        <Text>Time (24hr)</Text>
        <Text>Temp.</Text>
        <Text>Wind Speed</Text>
        <Text>Conditions</Text>
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
  scrollContainer: {
    marginBottom: 50,
  },
  titleStyle: {
    fontSize: 25,
    alignSelf:"center",
  },
  headingStyle:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontWeight: "bold"
  },
  rowWeatherBox: {
    flex: 1,
    padding: 5,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 4,
    height: "10%",
    marginBottom: 5,
    borderWidth: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
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