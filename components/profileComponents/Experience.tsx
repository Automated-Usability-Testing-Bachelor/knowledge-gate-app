import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import FifthElement from "../../assets/logos/Fifth_Element/KGG_FifthElement_RGB-01.svg";

const ExperienceItem = ({experience}: any) => (
    <View style={styles.experienceItem}>
        <FifthElement width={15} height={15}/>
        <View style={styles.experienceText}>
            <Text style={styles.title}>{experience.title}</Text>
            <Text style={styles.company}>{experience.company}</Text>
            <Text style={styles.years}>{experience.length}</Text>
        </View>
    </View>
)

const Experience = ({experience}: any) => (
    <>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Experience</Text>
        </View>
        <View>
            {experience.map((element: any) =>
                <ExperienceItem experience={element} key={element.title}/>
            )}
        </View>
    </>
)

const styles = StyleSheet.create({
    headerContainer: {
        paddingBottom: 5,
    },
    header: {
        fontSize: 16,
        fontFamily: "Serif-Medium",
        color: Colors.blue.color,
    },
    experienceItem: {
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    experienceText: {
        flexDirection: "column",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 12,
        fontFamily: "Sans-Medium",
        color: Colors.blue.color,
    },
    company: {
        fontSize: 12,
        fontFamily: "Sans-Light",
    },
    years: {
        fontSize: 12,
        fontFamily: "Sans-Light",

    }
});

export default Experience;