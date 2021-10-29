import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import MSWdata from "./MSWApi.json";

const SpotScroll = () => {
    //const [daySet, daySetChange] = useState(0);

    return(
        <View>
            <ScrollView style={styles.dayScroll} horizontal={true}>
              <Text style={styles.dayTextStyle}>Item 1........</Text>
              <Text style={styles.dayTextStyle}>Item 2........</Text>
              <Text style={styles.dayTextStyle}>Item 3........</Text>
              <Text style={styles.dayTextStyle}>Item 4........</Text>
              <Text style={styles.dayTextStyle}>Item 5........</Text>
              <Text style={styles.dayTextStyle}>Item 6........</Text>
              <Text style={styles.dayTextStyle}>Item 7........</Text>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    dayScroll: {
        backgroundColor: "#fff000",        
    },
    dayTextStyle: {
        marginVertical: 4,
        marginHorizontal: 14,
        fontSize: 20,
    }
});


export default SpotScroll;