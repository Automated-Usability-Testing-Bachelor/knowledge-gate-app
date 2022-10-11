import React from "react";
import Background from "../components/BackgroundTemplate";
import BodyView from "../components/publicationScreen/BodyView";

type Props = {
    route: any;
}

const PublicationScreen : React.FC<Props> = ({route}) => {
    const item = route.params.item;
    return (
        <Background
            body={BodyView({publishDate: item.publishDate, body: item.body, link: item.link, title: item.title})}
        />
    );
}

export default PublicationScreen;
