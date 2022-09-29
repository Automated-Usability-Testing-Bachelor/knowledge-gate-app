import React from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import Colors from "../constants/Colors";
import SecondLogo from "./SecondLogo";

function BackgroundCardsTemplate(props: any) {
    return (
        <SafeAreaView style={styles.background}>
            <SecondLogo/>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    {props.header}
                </View>
                <View style={styles.container2}>
                    {props.body}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.blue.color,
        display: "flex",
        flex: 1,
        paddingTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.warmGrey.color,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "100%",
    },
    container2: {
        backgroundColor: Colors.offWhite.color,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "100%",
        paddingBottom: 120,
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

export default BackgroundCardsTemplate;