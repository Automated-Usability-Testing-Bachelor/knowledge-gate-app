import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import {useNavigation} from "@react-navigation/native";

function ExtraInfoText({extra}: any) {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                        // @ts-ignore
                        navigation.navigate("ProfilePublicationsClinicalTrials", {});
                    }}
                >
                    <Text style={styles.whiteText}>{extra.publications}</Text>
                    <Text style={styles.whiteText}>Publications</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                        // @ts-ignore
                        navigation.navigate("ProfilePublicationsClinicalTrials", {});
                    }}
                >
                    <Text style={styles.whiteText}>{extra.clinicalTrials}</Text>
                    <Text style={styles.whiteText}>Clinical Trials</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.whiteText}>{extra.murders}</Text>
                    <Text style={styles.whiteText}>Murders</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const ExtraInfo = ({extra}: any) => (
    <View>
        <Text style={styles.header}>Additional Info</Text>
        <Text>
            {extra.map((element: any) =>
                <ExtraInfoText key={element} extra={element}/>
            )}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        fontFamily: "Serif-Medium",
        color: Colors.blue.color,
        paddingBottom: 10,
    },
    container: {
        // flexDirection: "row",
        alignItems: "flex-start",
        marginHorizontal: 5,
    },
    buttonContainer: {
        backgroundColor: Colors.red.color,
        borderRadius: 5,
        alignItems: "center",
        padding: 5,
    },
    whiteText: {
        color: "white",
        fontFamily: "Sans-Regular",
        fontSize: 12,
    }
});

export default ExtraInfo;
