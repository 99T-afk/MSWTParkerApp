import React, { useContext, useState, useEffect } from "react";
import { Context } from "../components/Context.js";
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';



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
      return(
          <View style={styles.rowWeatherBox}>
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

  },
  titleStyle: {
    fontSize: 25,
    alignSelf:"center",
  },
  rowWeatherBox: {
    flex: 1,
    padding: 15,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 4,
    height: "10%",
    marginBottom: 5,
    borderWidth: 5,
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