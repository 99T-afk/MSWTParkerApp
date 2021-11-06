import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Path } from 'react-native-svg'
import { AreaChart, Grid, LineChart, YAxis, XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import TideData from "./TideData.json";

/**
 * JSON file contains 16 hours of data.
 * 
 * @returns 
 */
export default function TideBox(props){

    const contentInset = { top: 20, bottom: 20 };
    let data = TideData[props.daySet]["data"];
    let highTide = TideData[props.daySet]["high"];
    let lowTide = TideData[props.daySet]["low"];
    const XAxisData = ["5am","6am", "7am", "8am", "9am", "10am", "11am","12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"]

    const Line = ({ line }) => (
        <Path
            key={'line'}
            d={line}
            stroke={'rgb(134, 65, 244)'}
            fill={'none'}
        />
    )

    
//            <Text style={styles.tideTitle}>Hourly tides</Text>
    return(
        <View style={styles.tideContainer}>
            <Text style={styles.tideTitle}>Tides</Text>
            <Text style={styles.tideText}>High = {highTide}m | Low = {lowTide}m</Text>
            <AreaChart
                style={{ height: 130, paddingLeft: 5, paddingRight: 5,}}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
            >                  
                <Line/>             
            </AreaChart>
            <XAxis
                    style={{ marginHorizontal: -10, paddingLeft: 5 , paddingRight: 5}}
                    data={XAxisData}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10, top:10, bottom: 10,}}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    tideContainer: {
        backgroundColor: "#cdfeff",
        borderRadius: 5,
        padding: 5,
    },
    tideTitle: {
        fontSize: 23,
        alignSelf: "center",
    },
    tideText: {
        fontSize: 16,
        alignSelf: "center",
    },
});

/**
 * <AreaChart
                style={{ height: 170, marginLeft: 16 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
            >
                <Grid/>
                <Line/>
            </AreaChart>
 */