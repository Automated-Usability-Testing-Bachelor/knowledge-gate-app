import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";

const ProjectExpanded = ({item}) => (
    <ScrollView style={styles.projectsExpandedContainer}>
        <View style={styles.projectsExpandedText}>
            <Text style={styles.title}>Industry</Text>
            <Text>{item.industry}</Text>
        </View>
        <View style={styles.projectsExpandedText}>
            <Text style={styles.title}>Goals</Text>
            <Text>{item.goals}</Text>
        </View>
        <View style={styles.projectsExpandedText}>
            <Text style={styles.title}>Description</Text>
            <Text>{item.description}</Text>
        </View>
        <View style={styles.projectsExpandedText}>
            <Text style={styles.title}>Questions</Text>
            <Text>{item.questions}</Text>
        </View>
    </ScrollView>
);

function Projects({item}) {
    return (
        <ProjectExpanded
            item={item}
            keyExtractor={(item) => item.id}
        />
    );
}

const styles = StyleSheet.create({
    projectsExpandedContainer: {
        flex: 1,
        padding: 10,
        // paddingBottom: 20,
        margin: 10,
        height: "100%",
    },
    projectsExpandedText: {
        marginTop: 5,
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        color: Colors.blue.color,
        marginBottom: 5,
    },
});

export default Projects;
