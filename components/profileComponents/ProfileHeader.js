import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";

function ProfileHeader({text}) {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/jeff.jpeg")}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 20
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
        display: "flex",
        flexDirection: "row",
    },
    headerTextContainer: {
        flex: 1,
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