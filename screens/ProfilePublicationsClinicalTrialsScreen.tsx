import BackgroundTemplate from "../components/BackgroundTemplate";
import PublicationsAndClinicalTrialsView from "../components/profileComponents/PublicationsAndClinicalTrialsView";
import React from "react";

const ProfilePublicationsClinicalTrialsScreen = () => (
    <BackgroundTemplate
        body={<PublicationsAndClinicalTrialsView/>}
    />
);

export default ProfilePublicationsClinicalTrialsScreen;