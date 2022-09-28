import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Colors from "../constants/Colors";

function BackgroundCardsTemplate(props: any) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header1}>
                    {props.headerTitle}
                </Text>
            </View>
            <View style={styles.container2}>
                {props.body}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        // paddingTop: 2,
        paddingBottom: 110,
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