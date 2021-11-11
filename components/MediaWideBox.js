/**
 * @fileoverview This file is responsbile for rendering a smaller view on the media page.
 */
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

/**
 * 
 * @param {*} props passes in a unique ID that is used for rendering a unique image.
 * @returns a View containing a smaller image, title and text
 */
const MediaWideBox = (props) => {
  return (
    <TouchableHighlight
      style={styles.smallBox}
      onPress={() =>
        alert("Sorry, this feature is not available in the prototype version.")
      }
    >
      <View>
        <Image
          source={{
            uri: "https://picsum.photos/300/?random" + props.id,
            width: "100%",
            height: 100,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            padding: 5,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.newsTitle}>{props.titleText}</Text>
          <Text>{props.bodyText}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  smallBox: {
    flexDirection: "column",
    alignContent: "flex-end",
    height: 150,
    flex: 1,
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5,
    elevation: 4,
    borderRadius: 5,
  },
  newsTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default MediaWideBox;
