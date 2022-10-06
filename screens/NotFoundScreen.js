import {SafeAreaView, StyleSheet} from "react-native";
import BackgroundCardsTemplate from "../components/BackgroundCardsTemplate";
import React from "react";


function NotFoundScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <BackgroundCardsTemplate
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
    },
});

export default NotFoundScreen;