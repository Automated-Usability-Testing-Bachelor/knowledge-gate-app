import React from "react";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import Projects from "../components/projectsComponents/ProjectCard";
import {useRoute} from '@react-navigation/native';
import {BlackSansHeader2} from "../components/Texts/Headers";

function ProjectsScreen() {
    const route = useRoute();
    return (
        <BackgroundCards
            header={<BlackSansHeader2 text={route.name}/>}
            body={Projects()}
        />
    );
}

export default ProjectsScreen;