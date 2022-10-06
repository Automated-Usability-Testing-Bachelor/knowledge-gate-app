import React from "react";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import BodyView from "../components/clinicalTrialScreen/BodyView";

const ClinicalTrialScreen = (props) => {
    const item = props.route.params.item;
    return (
        <BackgroundCards
            body={BodyView({item})}
        />
    );
};

export default ClinicalTrialScreen;
