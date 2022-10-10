import {StyleSheet, View} from "react-native";
import Colors from "../../constants/Colors";
import React from "react";
import AboutText from "./AboutText";
import Skills from "./Skills";
import Experience from "./Experience";
import ExtraInfo from "./ExtraInfo";

const ProfileBody = ({profileInfo}: any) => (
    <View style={styles.contentContainer}>
        <AboutText about={profileInfo.about}/>
        <View style={styles.separator}/>
        <Skills skills={profileInfo.skills}/>
        <View style={styles.separator}/>
        <Experience experience={profileInfo.experience}/>
        <View style={styles.separator}/>
        <ExtraInfo extra={profileInfo.extraInfo}/>
    </View>
)

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 20,
        height: "100%",
    },
    separator: {
        margin: 10,
        borderWidth: 0.5,
        height: 1,
        borderColor: Colors.darkGrey.color,
    },
});

export default ProfileBody;
