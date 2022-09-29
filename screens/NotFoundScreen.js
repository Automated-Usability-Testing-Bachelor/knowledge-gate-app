import BackgroundCardsTemplate from "../components/BackgroundCardsTemplate";
import React from "react";
import {useRoute} from "@react-navigation/native";
import {BlackSansHeader2} from "../components/Texts/Headers";


function NotFoundScreen() {
    const route = useRoute();
    return (
        <BackgroundCardsTemplate
            header={<BlackSansHeader2 text={route.name}/>}
        />
    );
}

export default NotFoundScreen;