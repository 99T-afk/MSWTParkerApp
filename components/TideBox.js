import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Path } from 'react-native-svg'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'


export default function TideBox(){

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const Line = ({ line }) => (
            <Path
                key={'line'}
                d={line}
                stroke={'rgb(134, 65, 244)'}
                fill={'none'}
            />
        )

    

    return(
        <View style={styles.tideContainer}>
             <AreaChart
                style={{ height: 200 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
            >
                <Grid/>
                <Line/>
            </AreaChart>
        </View>
    )
}

const styles = StyleSheet.create({
    tideContainer: {
        backgroundColor: "#8efe90",
        borderRadius: 5,
    }
});
