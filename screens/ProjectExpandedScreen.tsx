import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import SecondLogoWithBackButton from "../components/SecondLogoWithBackButton";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import Projects from "../components/projectsComponents/ProjectExpanded";
import {BlackSansHeader2} from "../components/Texts/Headers";
import GestureRecognizer from "react-native-swipe-gestures";
import {useNavigation} from "@react-navigation/native";

export default function ProjectsExpandedScreen(props) {
    const navigation = useNavigation();
    const item = props.route.params.item;

    function onSwipeRight(gestureState) {
        navigation.goBack();
        console.log("You swiped right!");
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
    };
    return (
        <GestureRecognizer
            onSwipeRight={(state) => onSwipeRight(state)}
            config={config}
            style={{
                flex: 1,
            }}
        >
            <SafeAreaView style={styles.container}>
                <SecondLogoWithBackButton/>
                <BackgroundCards
                    header={<BlackSansHeader2 text={item.title}/>}
                    body={Projects({item})}
                />
            </SafeAreaView>
        </GestureRecognizer>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: Colors.blue.color,
        display: "flex",
        flex: 1,
    },
});
