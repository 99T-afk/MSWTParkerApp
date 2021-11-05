import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function TideBox(){

    return(
        <View style={styles.tideContainer}>
            <Text>Hi!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tideContainer: {
        backgroundColor: "#8efe90",
        borderRadius: 5,
    }
});
