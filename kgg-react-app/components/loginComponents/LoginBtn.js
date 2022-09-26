import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../constants/Colors";

const LoginBtn = ({name}) => {
    const onPress = () => null;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.touchable}
                activeOpacity={0.6}
            >
                <View style={styles.button}>
                    <Text style={styles.text}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingTop: 20,
    },
    button: {
        backgroundColor: Colors.red.color,

        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 10,
    },
    touchable: {borderRadius: 10},
    text: {
        color: "#FFF",
    },
});

export default LoginBtn;
