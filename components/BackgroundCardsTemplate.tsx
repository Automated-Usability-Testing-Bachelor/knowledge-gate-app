import React from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import Colors from "../constants/Colors";

function BackgroundCardsTemplate(props: any) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={{height: "100%"}}>
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

});

export default BackgroundCardsTemplate;
