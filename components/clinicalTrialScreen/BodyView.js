import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";
import LinkOriginalButton from "../publicationScreen/LinkOriginalButton";
import Dialog from "./Dialog";
import StatusBadge from "../profileComponents/tabs/StatusBadge";

const BodyView = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.DateContainer}>
                <View>
                    <Text style={styles.publishDateText}>
                        {"Published: " + item.publishDate}
                    </Text>
                </View>
                <StatusBadge status={item.status}/>
            </View>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.TitleText}>{item.title}</Text>
                </View>
                <ScrollView>
                    <Dialog title="Conditions" body={item.conditions}/>
                    <Dialog title="Locations" body={item.Locations}/>
                    <Dialog title="Interventions" body={item.Interventions}/>
                </ScrollView>
            </View>
            <View style={styles.btnContainer}>
                <LinkOriginalButton link={item.link}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 5,
        flex: 1,
        justifyContent: "flex-start",
    },
    publishDateText: {
        fontFamily: "Sans-Medium",
        color: Colors.darkGrey.color,
        fontSize: 10,
    },
    DateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    titleContainer: {
        marginBottom: 20,
    },
    TitleText: {
        fontFamily: "Sans-Regular",
        fontSize: 14,
        color: Colors.black.color,
    },
    BodyText: {
        fontFamily: "Sans-Light",
        fontSize: 12,
        color: Colors.black.color,
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
});
export default BodyView;
