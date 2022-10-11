import React from "react";
import BackgroundCards from "../components/BackgroundTemplate";
import Projects from "../components/projectsComponents/ProjectExpanded";

export default function ProjectsExpandedScreen(props: any) {
    const item = props.route.params.item;

    return (
        <BackgroundCards
            body={Projects({item})}
        />
    );
}