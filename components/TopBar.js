import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function TopBar(){
    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={require("../assets/logo.png")} />
            <AntDesign name="setting" size={35} style={styles.settingIcon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imageStyle: {
        width: 140,
        height: 47,
        marginLeft: 10,
        padding: 2,
    },
    settingIcon: {
        justifyContent: "space-between",
        marginRight: "5%",
        marginTop: "1%",
    }
})