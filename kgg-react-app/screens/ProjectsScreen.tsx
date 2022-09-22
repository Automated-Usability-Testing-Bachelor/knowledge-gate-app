import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Colors from "../constants/Colors";
import SecondLogo from "../components/SecondLogo";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import ProjectCard from "../components/projectsComponents/ProjectCard";

export default function ProjectsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <SecondLogo />
            <BackgroundCards props={ProjectCard()} />
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