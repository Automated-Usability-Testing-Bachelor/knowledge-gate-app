import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import Projects from "../components/projectsComponents/ProjectExpanded";

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
