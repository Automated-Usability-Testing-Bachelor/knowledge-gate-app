import BackgroundCardsTemplate from "../components/BackgroundCardsTemplate";
import React from "react";
import ProfileHeader from "../components/profileComponents/ProfileHeader";
import ProfileBody from "../components/profileComponents/ProfileBody";

const profileData = require("../data/profileData.json");

function ProfileScreen() {
    return (
        <BackgroundCardsTemplate
            header={ProfileHeader({text: profileData})}
            body={ProfileBody({text: profileData})}
        />
    );
}


export default ProfileScreen;