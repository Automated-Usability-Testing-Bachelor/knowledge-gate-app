import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../constants/Colors";

const ForgotPassword = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Forgot password?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "yellow",
        alignSelf: "flex-end",
        paddingLeft: 10,
        paddingTop: 2,
    },
    touchable: {},
    text: {
        fontSize: 12,
        color: Colors.red.color,
    },
});

export default ForgotPassword;
