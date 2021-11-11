/**
 * @fileoverview Renders a "large" media component
 */
import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';

/**
 * A component that renders a large view.
 * @param {*} props takes in the ID of the component rendered, which allows a different image to be shown.
 * @returns A view containing a large image, title and text
 */
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