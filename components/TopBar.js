import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function TopBar(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageStyle} onPress={() => {
                navigation.navigate('Tab');
            }}>
                <Image style={styles.imageStyle} source={require("../assets/logo.png")} />
            </TouchableOpacity>
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
        height: 48,
        marginLeft: 10,
        padding: 2,
    },
    settingIcon: {
        justifyContent: "space-between",
        marginRight: "4%",
        marginTop: "1%",
    }
})