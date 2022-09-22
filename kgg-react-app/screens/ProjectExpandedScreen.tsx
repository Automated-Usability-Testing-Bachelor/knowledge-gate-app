import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Colors from "../constants/Colors";
import SecondLogo from "../components/SecondLogo";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import ProjectCard from "../components/projectsComponents/ProjectCard";
import { useRoute } from '@react-navigation/native';
import Projects from "../components/projectsComponents/ProjectExpanded";

export default function ProjectsExpandedScreen() {
    const name = "Project Name";
    return (
        <SafeAreaView style={styles.container}>
            <SecondLogo />
            <BackgroundCards
                header={name}
                props={Projects()}
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