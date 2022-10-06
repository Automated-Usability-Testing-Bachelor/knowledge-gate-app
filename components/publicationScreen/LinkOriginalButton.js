import React, {useCallback} from "react";
import {Linking, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import Colors from "../../constants/Colors";

const LinkOriginalButton = ({link, icon}) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(link);
        if (supported) {
            await Linking.openURL(link);
        } else {
            Alert.alert(`Don't know how to open this URL: ${link}`);
        }
    }, [link]);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handlePress}
                style={styles.touchable}
                activeOpacity={0.6}
            >
                <View style={styles.button}>
                    <Text style={styles.text}>Original</Text>
                    {icon ? icon : <View></View>}
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
        backgroundColor: Colors.red.color,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        alignSelf: "center",
    },
    touchable: {
        borderRadius: 10,
        alignSelf: "center",
        padding: 12,
    },
    text: {
        color: "#FFF",
        lineHeight: 18,
    },
});

export default LinkOriginalButton;
