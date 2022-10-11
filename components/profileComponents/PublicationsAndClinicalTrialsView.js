import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Publications from "./tabs/Publications";
import PubClinButtonGroup from "./PubClinButtonGroup";
import Colors from "../../constants/Colors";
import ClinicalTrials from "./tabs/ClinicalTrials";

const PublicationsAndClinicalTrialsView = () => {
    const [currentSubject, setCurrentSubject] = useState(undefined);
    const selectedSubject = (subject) => {
        setCurrentSubject(subject);
    };

    useEffect(() => {
    }, [currentSubject]);
    return (
        <View>
            <PubClinButtonGroup selectedSubjectCallback={selectedSubject}/>
            <View style={styles.listContainer}>
                {currentSubject === "pub" ? (
                    <Publications/>
                ) : currentSubject === "clin" ? (
                    <ClinicalTrials/>
                ) : (
                    <Text>fail</Text>
                )}
                {/*<Publications />*/}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    tabBarItemStyle: {
        alignItems: "center",
        borderRadius: 10,
        paddingBottom: 5,
        marginRight: 5,
        marginLeft: 5,
        height: 55,
    },
    tabBarStyle: {
        paddingVertical: 5,
        borderRadius: 15,
        backgroundColor: "#001B72",
        position: "absolute",
        height: 65,
        left: 3,
        right: 3,
        bottom: 20,
    },
    tabBarLabelStyle: {
        fontSize: 9,
    },
    listContainer: {
        height: "100%",
        padding: 10,
        backgroundColor: Colors.warmGrey.color,
        paddingBottom: 165,
    },
});
export default PublicationsAndClinicalTrialsView;
