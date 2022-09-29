import React from "react";
import {useRoute} from "@react-navigation/native";
import {Image, StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";

function ProfileHeader({text}) {
    const route = useRoute();
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/adaptive-icon.png")}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50
                }}
            />
            <Text style={styles.nameHeader} >
                {text.name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    nameHeader: {
        fontSize: 20,
        fontFamily: "Sans-SemiBold",
        color: Colors.blue.color,
    }
});

export default ProfileHeader;