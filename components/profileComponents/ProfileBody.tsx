import {StyleSheet, View} from "react-native";
import Colors from "../../constants/Colors";
import React from "react";
import PublicationsAndClinicalTrialsView from "./PublicationsAndClinicalTrialsView";
import AboutText from "./AboutText";
import Skills from "./Skills";


const ProfileBody = ({text}: any) => (
    <>
        <View style={styles.contentContainer}>
            <AboutText about={text.about}/>
            <View style={styles.separator}/>
            <View style={styles.skills}>
                <Skills skills={text.skills}/>
            </View>
        </View>
        <PublicationsAndClinicalTrialsView/>
    </>
)


const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 20,
    },
    separator: {
        margin: 10,
        borderBottomWidth: 0.2,
        borderColor: Colors.darkGrey.color,
    },
    skills: {
        // flexDirection: "column",
    },
});

export default ProfileBody;
