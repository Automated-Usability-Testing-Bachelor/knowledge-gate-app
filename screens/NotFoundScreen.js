import {SafeAreaView, StyleSheet} from "react-native";
import BackgroundCardsTemplate from "../components/BackgroundCardsTemplate";
import SecondLogo from "../components/SecondLogo";
import React from "react";
import Colors from "../constants/Colors";
import {useRoute} from "@react-navigation/native";


function NotFoundScreen() {
    const route = useRoute();
    return (
        <SafeAreaView style={styles.container}>
            <SecondLogo/>
            <BackgroundCardsTemplate
                headerTitle={route.name}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue.color,
        display: "flex",
        flex: 1,
    },
});

export default NotFoundScreen;