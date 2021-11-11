/**
 * @fileoverview - Renders a scrollable bar that allows the user to select a date in the next 7 days.
 */
import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import MSWdata from "./MSWApi.json";

/**
 *
 * @param {*} props carries daySet, which updates when the day is changed to re-render the component
 * @returns A scrollview of touchable dates that update a daySet state.
 */
const SpotDayScroll = (props) => {
  const ScrollRef = useRef(null);

  let scrollInterval = 130;

  const scrollSnap = (clickedIndex) => {
    console.log(clickedIndex);
    console.log(scrollInterval);
    ScrollRef.current.scrollTo({ x: clickedIndex * scrollInterval });
  };

  const changeDay = (index) => {
    props.daySetChange(index);
  };

  const ScrollItem = (props) => {
    return (
      <View>
        <Pressable
          onPress={() => {
            changeDay(props.dayIndex);
            scrollSnap(props.dayIndex);
          }}
        >
          <Text style={styles.dayTextStyle}>
            {MSWdata[props.dayIndex]["day"]}
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.dayScroll}>
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
  );
};

const styles = StyleSheet.create({
  dayScroll: {
    backgroundColor: "#82d3ff",
    borderRadius: 5,
    marginBottom: 7,
    elevation: 5,
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
  },
});

export default SpotDayScroll;
