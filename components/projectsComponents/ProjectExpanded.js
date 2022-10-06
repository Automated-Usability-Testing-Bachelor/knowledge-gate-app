import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import FadeInView from "../animatedComponents/FadeInView";

const projectData = require("../../data/projectsData.json");

const ProjectExpanded = ({ item }) => (
  <ScrollView style={styles.projectsExpandedContainer}>
    <FadeInView duration={1000}>
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
    </FadeInView>
  </ScrollView>
);

function Projects({ item }) {
  console.log(item);
  return (
    <ProjectExpanded
      item={item}
      keyExtractor={(item) => item.id}
    ></ProjectExpanded>
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
    paddingBottom: 20,
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
  },
});

export default Projects;
