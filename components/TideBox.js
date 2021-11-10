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
    const XAxisData = [0,2,4,6,8,10,12,14,16,18,20,22, 24]

    const Line = ({ line }) => (
        <Path
            key={'line'}
            d={line}
            stroke={'rgb(0, 0, 0)'}
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
                svg={{ fill: 'rgba(84, 195, 255, 1)' }}
            >                  
                <Line/>       
            </AreaChart>
            <XAxis
                    style={{ marginHorizontal: -10, paddingLeft: 5 , paddingRight: 5}}
                    data={XAxisData}
                    formatLabel={(value, index) => index * 2}
                    contentInset={{ left: 10, right: 10, top:10, bottom: 10,}}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    tideContainer: {
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