import BackgroundCardsTemplate from "../components/BackgroundCardsTemplate";
import React from "react";
import {useRoute} from "@react-navigation/native";
import {BlackSansHeader2} from "../components/Texts/Headers";
import testComponent from "../components/TestComponent";

function NotFoundScreen() {
    return (
        <BackgroundCardsTemplate
            body={testComponent()}
        />
    );
}

export default NotFoundScreen;