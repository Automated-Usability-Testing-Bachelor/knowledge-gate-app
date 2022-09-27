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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in dolor sit amet tellus aliquet pellentesque ut vitae risus. Pellentesque non libero eget metus suscipit efficitur. Donec nec euismod nunc. Ut efficitur sem eu interdum lobortis. Maecenas mattis massa et egestas porta. Cras placerat blandit porta. Etiam sed nisi et ipsum aliquam volutpat. Nam pulvinar, mauris accumsan gravida auctor, lectus purus vulputate erat, ut tincidunt felis magna vel lacus. Aliquam aliquam lectus eget tincidunt aliquam. Sed neque diam, tempus eu magna nec, iaculis semper libero. Vivamus vel diam ac lacus dapibus pulvinar. Aliquam eget eros blandit, bibendum nibh id, placerat velit. Nullam ac neque gravida sem bibendum ultrices non non mauris. Aliquam eleifend odio sit amet orci sodales viverra. Phasellus consectetur arcu ut iaculis mattis. Nam tincidunt libero a lectus faucibus vulputate.\n" +
            "\n" +
            "Suspendisse feugiat tortor metus, id commodo ipsum tincidunt ac. Maecenas aliquet in lectus non auctor. Aenean lorem massa, egestas et metus eu, porta accumsan turpis. Sed iaculis, quam a rhoncus ornare, orci leo maximus diam, ac condimentum risus enim et ante. Pellentesque maximus, leo vel ullamcorper scelerisque, orci ante suscipit massa, a ultricies justo ante quis neque. In a auctor neque. Donec in est vitae nunc scelerisque lobortis ut id enim. Suspendisse non molestie velit. Duis facilisis hendrerit erat id gravida. Vivamus magna diam, dignissim vel convallis id, aliquam at odio. Nam aliquam cursus augue nec cursus. Cras mollis ligula eget sem gravida consectetur. Nunc eleifend augue ut turpis molestie, nec malesuada est sollicitudin. Fusce ligula tortor, tincidunt et imperdiet non, accumsan non tortor. Donec vitae sem tristique, ullamcorper lorem non, mollis orci. In tempor augue mi, vel varius leo viverra in.",
    },
]

const pressed = () => {
    // navigator.navigate("ProjectsExpandedScreen");
    console.log("hello")
}

// const navigation = useNavigation();

const ProjectCard = ({item, navigation}) => (
    <TouchableOpacity
        style={styles.container}
        onPress={() => console.log(item.title)}
        // onPress={() => navigation.navigate('NotFound')}
    >
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={3} style={styles.description}>{item.description}</Text>
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
        flex: 1,
        flexWrap: "wrap",
    },
    flatListContainer: {
        borderRadius: 15,
        marginTop: 10,
    },
});