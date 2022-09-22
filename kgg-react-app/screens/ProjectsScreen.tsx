import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Colors from "../constants/Colors";
import SecondLogo from "../components/SecondLogo";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import ProjectCard from "../components/projectsComponents/ProjectCard";
import ProjectFlow from "../components/projectsComponents/ProjectFlowHandling";
import { useRoute } from '@react-navigation/native';

export default function ProjectsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            {/*<StatusBar style="light" />*/}
            <SecondLogo />
            {ProjectFlow()}
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