import React from "react";
import {Image, StyleSheet, View} from "react-native";

const PlusIcon = () => {
    const icon = require("./PlusCircle.png");
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={icon}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {paddingRight: 5},
    image: {
        height: 18,
        width: 18,
    },
});

export default PlusIcon;
