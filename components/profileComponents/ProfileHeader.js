import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";

function ProfileHeader({text}) {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/jeff.jpg")}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 20,
                    backgroundColor: "yellow"
                }}
            />
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerName}>
                    {text.name}
                </Text>
                <Text style={styles.headerText}>
                    {text.company}
                </Text>
                <Text>
                    {text.profession}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: "auto",
        padding: 20,
    },
    headerTextContainer: {
        marginLeft: 20,
    },
    headerName: {
        fontSize: 20,
        fontFamily: "Sans-SemiBold",
        color: Colors.blue.color,
    },
    headerText: {
        fontSize: 14,
        fontFamily: "Sans-Regular",
    }
});

export default ProfileHeader;