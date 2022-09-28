import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import SecondLogo from "../components/SecondLogo";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import Projects from "../components/projectsComponents/ProjectExpanded";

export default function ProjectsExpandedScreen() {
    const name = "Project Name";
    return (
        <SafeAreaView style={styles.container}>
            <SecondLogo/>
            <BackgroundCards
                headerTitle={name}
                body={Projects()}
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