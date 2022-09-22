import React from "react";
import { ScrollView, StyleSheet, View, Text} from "react-native";
import Colors from "../constants/Colors";


export default function BackgroundCardsTemplate(props: any) {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header1}>{props.header}</Text>
            </View>
            <ScrollView style={styles.container2}>
                {props.props}
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.warmGrey.color,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    container2: {
        backgroundColor: Colors.offWhite.color,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 0,
    },
    headerContainer: {
        paddingHorizontal: 25,
        paddingVertical: 20,
    },
    header1: {
        fontSize: 20,
        color: Colors.black.color,
    },
    header2: {
        fontSize: 18,
        color: Colors.blue.color,
    },
});