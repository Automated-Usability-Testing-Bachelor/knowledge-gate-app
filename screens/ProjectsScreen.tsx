import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import SecondLogo from "../components/SecondLogo";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import Projects from "../components/projectsComponents/ProjectCard";
import {useRoute} from '@react-navigation/native';
import {BlackSansHeader2} from "../components/Texts/Headers";

export default function ProjectsScreen() {
    const route = useRoute();
    return (
        <SafeAreaView style={styles.container}>
            <SecondLogo/>
            <BackgroundCards
                header={<BlackSansHeader2 text={route.name}/>}
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