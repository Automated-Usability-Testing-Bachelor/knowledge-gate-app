import React, {useState} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity} from "react-native";
import Colors from "../../constants/Colors";

const Data = [
    {
        id: 0,
        title: "Project 1",
        description: "Blah blah blah",
    },
    {
        id: 1,
        title: "Project 2",
        description: "Blah blah blah",
    },
    {
        id: 2,
        title: "Project 3",
        description: "Blah blah blah",
    },
    {
        id: 3,
        title: "Project 4",
        description: "Blah blah blah",
    },
    {
        id: 4,
        title: "Project 5",
        description: "Blah blah blah",
    },
    {
        id: 5,
        title: "Project 6",
        description: "Blah blah blah",
    },
]

const ProjectCard = ({item, onPress}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
);

export default function Projects() {
    const [selectedId, setSelectedId] = useState(null);
    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';
        return (
            <ProjectCard
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{backgroundColor}}
                textColor={{color}}
            />
        );
    };
    return (
        <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
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
    },
    flatListContainer: {
        borderRadius: 15,
        marginTop: 10,
        // paddingBottom: 100,
    },
});