import BackgroundTemplate from "../components/BackgroundTemplate";
import React from "react";
import testComponent from "../components/TestComponent";

function NotFoundScreen() {
    return (
        <BackgroundTemplate
            body={testComponent()}
        />
    );
}

export default NotFoundScreen;