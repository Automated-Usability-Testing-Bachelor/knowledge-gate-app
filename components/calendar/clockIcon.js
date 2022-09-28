import React from "react";
import {Image, StyleSheet, View} from "react-native";

const ClockIcon = () => {
    const icon = require("./clockIcon.png");
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={icon}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {paddingRight: 5},
    image: {
        height: 24,
        width: 24,
    },
});

export default ClockIcon;
