import {SafeAreaView, StyleSheet} from "react-native";
import BackgroundCardsTemplate from "../components/BackgroundCardsTemplate";
import SecondLogo from "../components/SecondLogo";
import React from "react";
import Colors from "../constants/Colors";
import {useRoute} from "@react-navigation/native";
import ProfileHeader from "../components/profileComponents/ProfileHeader";
import ProfileBody from "../components/profileComponents/ProfileBody";

function ProfileScreen() {
    const route = useRoute();
    return (
        <SafeAreaView style={styles.container}>
            <SecondLogo/>
            <BackgroundCardsTemplate
                header={ProfileHeader()}
                body={ProfileBody()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue.color,
        display: "flex",
        flex: 1,
    },
});

export default ProfileScreen;