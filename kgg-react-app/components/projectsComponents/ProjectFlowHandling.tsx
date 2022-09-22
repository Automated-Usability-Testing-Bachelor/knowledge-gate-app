import { useRoute } from "@react-navigation/native";
import React from "react";
import BackgroundCards from "../../components/BackgroundCardsTemplate";
import Projects from "./ProjectCard";
import ProjectExpanded from "./ProjectExpanded";


export default function ProjectExpandedOrNot() {
    const focused = false;
    const route = useRoute();
    if (focused) {
        return (
        <BackgroundCards
            header={"Tests"}
            props={ProjectExpanded()}
        />
        )
    }
    else {
        return (
        <BackgroundCards
            header={route.name}
            props={Projects()}
        />
        )
    }
}