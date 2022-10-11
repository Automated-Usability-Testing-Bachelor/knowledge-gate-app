import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../constants/Colors";

const KggButton = ({
                       name,
                       icon,
                       onPress,
                       color,
                       paddingHorizontal,
                       width,
                   }) => {
    const determineBackColor = () => {
        if (color === "red") {
            return Colors.red.color;
        } else if (color === "black") {
            return Colors.black.color;
        } else if (color === "blue") {
            return Colors.blue.color;
        } else if (color === "warmGrey") {
            return Colors.warmGrey.color;
        } else if (color === "offWhite") {
            return Colors.offWhite.color;
        } else if (color === "white") {
            return "#FFFFFF";
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.touchable,
                    {
                        backgroundColor: determineBackColor(),
                        paddingHorizontal: paddingHorizontal ? paddingHorizontal : 20,
                        width: width ? width : "auto",
                    },
                ]}
                activeOpacity={0.6}
            >
                <View style={styles.button}>
                    {icon ? icon : <View></View>}
                    <Text style={styles.text}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    button: {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        alignSelf: "center",
    },
    touchable: {borderRadius: 10},
    text: {
        color: "#FFF",
        lineHeight: 18,
    },
});

export default KggButton;
