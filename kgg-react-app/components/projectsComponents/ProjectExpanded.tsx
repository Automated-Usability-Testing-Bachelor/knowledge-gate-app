import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";

function ProjectExpanded(props: any) {
    return (
        <>
            <View style={styles.projectsExpandedContainer}>
                <View style={styles.projectsExpandedText}>
                    <Text style={styles.title}>{props.industry}</Text>
                    <Text>{props.industryDescription}</Text>
                </View>
                <View style={styles.projectsExpandedText}>
                    <Text style={styles.title}>{props.goals}</Text>
                    <Text>{props.goalsDescription}</Text>
                </View>
                <View style={styles.projectsExpandedText}>
                    <Text style={styles.title}>{props.description}</Text>
                    <Text>{props.descriptionDescription}</Text>
                </View>
                <View style={styles.projectsExpandedText}>
                    <Text style={styles.title}>{props.questions}</Text>
                    <Text>{props.questionsDescription}</Text>
                </View>
            </View>
        </>
    );
}

export default function Projects() {
    return (
        <>
            <ProjectExpanded
                industry="Industry"
                industryDescription="Blah blah blah"
                goals="Goals"
                goalsDescription="Blah blah blah"
                description="Description"
                descriptionDescription="Blah blah blah"
                questions="Questions"
                questionsDescription="Blah blah blah"
            >
            </ProjectExpanded>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
        dropShadow: 25,
        borderRadius: 5,
        backgroundColor: "white",
        pressable: true,
        height: 115,
    },
    projectsExpandedContainer: {
        flex: 1,
        padding: 10,
        margin: 10,
    },
    projectsExpandedText: {
        marginTop: 5,
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        color: Colors.blue.color,
        marginBottom: 5,
    }
});