import BackgroundCardsTemplate from "../components/BackgroundCardsTemplate";
import React from "react";
import testComponent from "../components/TestComponent";

function NotFoundScreen() {
    return (
        <BackgroundCardsTemplate
            body={testComponent()}
        />
    );
}

export default NotFoundScreen;