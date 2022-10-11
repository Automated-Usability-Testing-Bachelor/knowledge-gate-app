import React from "react";
import BackgroundCards from "../components/BackgroundTemplate";
import Projects from "../components/projectsComponents/ProjectCard";

function ProjectsScreen() {
    return (
        <BackgroundCards
            body={Projects()}
        />
    );
}

export default ProjectsScreen;