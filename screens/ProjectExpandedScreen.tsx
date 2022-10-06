import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import Projects from "../components/projectsComponents/ProjectExpanded";
import {BlackSansHeader2} from "../components/Texts/Headers";
import GestureRecognizer from "react-native-swipe-gestures";
import {useNavigation} from "@react-navigation/native";

export default function ProjectsExpandedScreen(props) {
    const item = props.route.params.item;

    return (
        <SafeAreaView style={styles.container}>
            <BackgroundCards
                body={Projects({item})}
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
