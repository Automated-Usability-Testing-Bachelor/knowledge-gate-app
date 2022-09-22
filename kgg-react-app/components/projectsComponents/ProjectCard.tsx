import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Colors from "../../constants/Colors";


function ProjectCard(props:any) {
    return (
        <Pressable style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text>{props.description}</Text>
        </Pressable>
    );
}


export default function Projects() {
    const projects = ["Project 1", "Project 2"];
    for (let i = 0; i <= projects.length; i++) {
        console.log(projects[i])
        ProjectCard({title: projects[i], description: "Blah blah blah"});

        // return (
        //     <ProjectCard
        //         title={projects[i]}
        //         description="Blah blah blah"
        //    />
        // );
    }

    // return (
    //         <ProjectCard title="Project 1" description="Blah blah blah">
    //         </ProjectCard>
    // );
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