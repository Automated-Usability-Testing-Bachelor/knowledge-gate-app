import React from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import Colors from "../constants/Colors";
import SecondLogo from "./SecondLogo";

const logo = require("./whiteLogo.png");

function BackgroundCardsTemplate(props: any) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                {props.header}
                {props.body}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.warmGrey.color,
        height: "100%",
    },
    container: {
        height: "100%",
        // marginBottom: 120,
    },
});

export default BackgroundCardsTemplate;