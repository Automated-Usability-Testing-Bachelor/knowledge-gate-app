import {StyleSheet, Text, View} from "react-native";
import {BlueSerifHeader2} from "../Texts/Headers";
import ReadMore from "react-native-read-more-text";
import Colors from "../../constants/Colors";
import React from "react";
import PublicationsAndClinicalTrialsView from "./PublicationsAndClinicalTrialsView";

const AboutText = ({about}) => {
    const renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={styles.readMore} onPress={handlePress}>
                Read more
            </Text>
        );
    }
    const renderRevealedFooter = (handlePress) => {
        return (
            <Text style={styles.readLess} onPress={handlePress}>
                Read less
            </Text>
        );
    }

    return (
        <View>
            <BlueSerifHeader2 text={"About"}/>
            <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}
            >
                <Text style={styles.aboutText}>{about}</Text>
            </ReadMore>
        </View>
    );
}

function ProfileBody({text}) {
    return (
        <View style={styles.container}>
            <View style={styles.aboutTextContainer}>
                <AboutText about={text.about}/>
            </View>
            <PublicationsAndClinicalTrialsView/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        height: 30,
    },
    aboutTextContainer: {
        padding: 20,
    },
    aboutText: {
        fontSize: 12,
        fontFamily: "Sans-Regular",
    },
    readMore: {
        fontSize: 13,
        color: Colors.blue.color,
        fontFamily: "Sans-SemiBold",
    },
    readLess: {
        fontSize: 13,
        color: Colors.blue.color,
        fontFamily: "Sans-SemiBold",
    }
});

export default ProfileBody;
