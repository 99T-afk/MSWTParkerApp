import React, { useContext, useState, useEffect } from "react";
import { Context } from "../components/Context.js";
import { Text, View, StyleSheet, ScrollView } from 'react-native';



export default function WeatherScreen(){
    const [context, setContext] = useContext(Context);
    let KEY = "08c163596ba8b99ec861254264859f20"; 
    const [temperature, setTemperature] = useState(""); 
    const [condition, setCondition] = useState(""); 
    
    function fetchWeather(lat, lon) { 
      fetch( 
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=${KEY}&exclude=hourly,minutely&units=metric` 
      ) 
        .then((res) => res.json()) 
        .then((data) => { 
          console.log(data); 
          setTemperature(data.main.temp); 
          setCondition(data.weather[0].main); 
        }); 
    } 
    useEffect(() => { 
      async function getData() { 
        try { 
          fetchWeather(50.714003, -1.8767287); 
          //fetchAdafruitData("ubicomp20"); 
        } catch (e) { 
          console.warn(e); 
        } 
      } 
      getData(); 
    }, []); 

    const WeatherRow = () => {
        return(
            <View>
            </View>
        )
    };
    


    return(
        <View>
            <Text>Weather!</Text>
            <Text>{fetchWeather(50.7113408, -1.8966187)}</Text>
        </View>
    )
}