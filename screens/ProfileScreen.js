import {SafeAreaView, StyleSheet} from "react-native";
import BackgroundCardsTemplate from "../components/BackgroundCardsTemplate";
import React from "react";
import ProfileHeader from "../components/profileComponents/ProfileHeader";
import ProfileBody from "../components/profileComponents/ProfileBody";

const profileData = require("../data/profileData.json");

const ProfileScreen = ({}) => {
    return (
        <SafeAreaView style={styles.container}>
            <BackgroundCardsTemplate
                header={ProfileHeader({text: profileData})}
                body={ProfileBody({text: profileData})}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ProfileScreen;