import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';


const LargeMediaBox = (props) => {
    return (
    <TouchableHighlight
    style={styles.headlineBox}
    underlayColor="#DDDDDD"
    onPress={() => alert("Sorry, this feature is not available in the prototype version.")}>  
    <View>
    <Image
        source={{uri: "https://picsum.photos/320/?random" + props.id,
        width: "100%", 
        height: "75%",}}
    />
        <View style={{flexDirection: "column", padding: 10, justifyContent:"space-between"}}>
            <Text style={styles.mediaTitleText}>{props.titleText}</Text>
            <Text>{props.bodyText}</Text>
        </View>
    </View>
    </TouchableHighlight>

    );
}

const styles = StyleSheet.create({
    headlineBox: {
      flexDirection: "column",
      alignContent: "flex-end",
      height: 300,
      width: '100%',
      backgroundColor: 'white',
      marginTop: 5,
      marginBottom: 5,
      elevation: 4,
      borderRadius: 5
    },
    mediaTitleText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 25,
      },
  });

export default LargeMediaBox;