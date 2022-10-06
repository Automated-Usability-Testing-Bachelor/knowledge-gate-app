import React from "react";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import Projects from "../components/projectsComponents/ProjectExpanded";

export default function ProjectsExpandedScreen(props) {
    const item = props.route.params.item;

    return (
        <BackgroundCards
            body={Projects({item})}
        />
    );
}