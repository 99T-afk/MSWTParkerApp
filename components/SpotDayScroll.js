import React, {useState, useRef} from 'react';
import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import MSWdata from "./MSWApi.json";


let dayData = MSWdata[0]["day"];

const SpotScroll = (props) => {
    const ScrollRef = useRef(null);
    
    let scrollInterval = 130;

    const scrollSnap = (clickedIndex) => {
        console.log(clickedIndex);
        console.log(scrollInterval);
        ScrollRef.current.scrollTo({ x: clickedIndex * scrollInterval});
    }

    const changeDay = (index) => {
        props.daySetChange(index)
    }


    const ScrollItem = (props) => {
        return(
            <View>
                <Pressable
                    onPress={() => {
                        changeDay(props.dayIndex);
                        scrollSnap(props.dayIndex);
                    }}
                ><Text style={styles.dayTextStyle}>{MSWdata[props.dayIndex]["day"]}</Text></Pressable>
            </View>
        )
    }

    return(
        <View style={styles.dayScroll} >
            <ScrollView 
            horizontal={true} 
            ref={ScrollRef} 
            snapToInterval={scrollInterval} 
            overScrollMode={"always"}
            persistentScrollbar={true}
            >                
                <ScrollItem daySetChange={props.daySetChange} dayIndex={0}></ScrollItem>
                <ScrollItem daySetChange={props.daySetChange} dayIndex={1}></ScrollItem>
                <ScrollItem daySetChange={props.daySetChange} dayIndex={2}></ScrollItem>
                <ScrollItem daySetChange={props.daySetChange} dayIndex={3}></ScrollItem>
                <ScrollItem daySetChange={props.daySetChange} dayIndex={4}></ScrollItem>
                <ScrollItem daySetChange={props.daySetChange} dayIndex={5}></ScrollItem>
            </ScrollView>
        </View>
    )
};

// For centering scroll (TODO) -->     <View style={styles.dayTextStyle}></View>


const styles = StyleSheet.create({
    dayScroll: {
        backgroundColor: "#d3f300", 
        borderRadius: 10,     
        margin: 5,
    },
    dayTextStyle: {
        alignItems: "center",  
        marginVertical: 4,
        marginHorizontal: 25,
        fontSize: 20,
        width: 70,
    },
    dayBuffer: {
        marginVertical: 4,
        marginHorizontal: 30,
        width: 88,
    }
});


export default SpotScroll;