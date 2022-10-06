import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import Projects from "../components/projectsComponents/ProjectCard";

export default function ProjectsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <BackgroundCards
                body={Projects()}
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