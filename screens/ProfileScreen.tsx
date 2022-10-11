import BackgroundTemplate from "../components/BackgroundTemplate";
import React from "react";
import ProfileHeader from "../components/profileComponents/ProfileHeader";
import ProfileBody from "../components/profileComponents/ProfileBody";
import {ScrollView} from "react-native";
import Colors from "../constants/Colors";

const profileData = require("../data/profileData.json");

const ProfileScreen = () => {
    return (
        <ScrollView style={{backgroundColor: Colors.warmGrey.color}}>
            <BackgroundTemplate
                header={ProfileHeader({profileInfo: profileData})}
                body={ProfileBody({profileInfo: profileData})}
            />
        </ScrollView>
    );
}

export default ProfileScreen;