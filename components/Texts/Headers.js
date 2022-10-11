import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";

export const BlueSerifHeader1 = ({text}) => {
    return (
        <View>
            <Text style={textStyles.blueSerifHeader1}>{text}</Text>
        </View>
    );
};

export const BlueSerifHeader2 = ({text}) => {
    return (
        <View>
            <Text style={textStyles.blueSerifHeader2}>{text}</Text>
        </View>
    );
};
export const BlackSansHeader2 = ({text}) => {
    return (
        <View>
            <Text style={textStyles.blackSansHeader2}>{text}</Text>
        </View>
    );
};

export const BlackSerifHeader4 = ({text}) => {
    return (
        <View>
            <Text style={textStyles.blackSerifHeader4}>{text}</Text>
        </View>
    );
};
export const BlackSerifHeader2 = ({text}) => {
    return (
        <View>
            <Text style={textStyles.blackSerifHeader2}>{text}</Text>
        </View>
    );
};
export const BlackSerifBody1 = ({text, numberOfLines}) => {
    return (
        <View>
            <Text style={textStyles.blackSerifBody1} numberOfLines={numberOfLines}>
                {text}
            </Text>
        </View>
    );
};
export const BlackSansBody1 = ({text, numberOfLines}) => {
    return (
        <View>
            <Text style={textStyles.blackSansBody1} numberOfLines={numberOfLines}>
                {text}
            </Text>
        </View>
    );
};

export const textStyles = StyleSheet.create({
    blueSerifHeader1: {
        textAlign: "center",
        fontSize: 37,
        fontFamily: "Serif-SemiBold",
        color: Colors.blue.color,
    },
    blueSerifHeader2: {
        fontSize: 18,
        fontFamily: "Serif-Regular",
        color: Colors.blue.color,
    },
    blackSerifHeader2: {
        fontSize: 24,
        fontFamily: "Serif-Light",
        color: Colors.black.color,
        textAlign: "center",
    },
    blackSansHeader2: {
        fontSize: 20,
        fontFamily: "Sans-SemiBold",
        color: Colors.black.color,
    },
    blackSerifHeader4: {
        fontSize: 16,
        fontFamily: "Serif-Bold",
        color: Colors.black.color,
    },
    blackSerifBody1: {
        fontSize: 12,
        fontFamily: "Serif-Bold",
        color: Colors.black.color,
    },
    blackSansBody1: {
        fontSize: 12,
        fontFamily: "Sans-Regular",
        color: Colors.black.color,
    },
});
