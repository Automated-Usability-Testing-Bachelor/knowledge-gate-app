import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import { BlackSansBody1, BlueSerifHeader2 } from "../Texts/Headers";

const projectData = require("../../data/projectsData.json");

const ProjectCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.ProjectCardContainer} onPress={onPress}>
    <BlueSerifHeader2 text={item.title} />
    <BlackSansBody1 text={item.description} numberOfLines={3} />
  </TouchableOpacity>
);

export default function Projects() {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <ProjectCard
        item={item}
        onPress={() => {
          console.log(item);
          navigation.navigate("ProjectsExpanded", { item });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={projectData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 40,
  },
  ProjectCardContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    dropShadow: 25,
    borderRadius: 5,
    backgroundColor: "white",
    pressable: true,
    //height: 115,
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
    // marginTop: 1,
  },
});
