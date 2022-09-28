import React from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity} from "react-native";
import Colors from "../../constants/Colors";

const projectData = require("../../data/projectsData.json");

const ProjectCard = ({item, onPress}) => (
    <TouchableOpacity
        style={styles.container}
        onPress={onPress}
    >
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={3} style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
);

export default function Projects() {
    const renderItem = ({item}) => {
        return (
            <ProjectCard
                item={item}
                onPress={() => {
                    console.log(item.title)
                    // navigation.navigate(Screen)
                }}
            />
        );
    };
    return (
        <FlatList
            data={projectData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.flatListContainer}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        dropShadow: 25,
        borderRadius: 5,
        backgroundColor: "white",
        pressable: true,
        height: 115,
    },
    title: {
        fontSize: 20,
        color: Colors.blue.color,
        marginBottom: 5,
    },
    description: {
        fontSize: 15,
        color: Colors.black.color,
        flex: 1,
        flexWrap: "wrap",
    },
    flatListContainer: {
        borderRadius: 15,
        marginTop: 10,
    },
});