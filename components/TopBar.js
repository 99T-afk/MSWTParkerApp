import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function TopBar(){
    return(
        <View>
            <Image style={styles.imageStyle} source={require("../assets/logo.png")} />
            <AntDesign name="setting" size={15} style={styles.settingIcon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 150,
        height: 52,
        marginLeft: 10,
        padding: 2,
        flexDirection: "row",
        alignSelf: "flex-start",
    },
    settingIcon: {
        alignSelf: "flex-end",
    }
})