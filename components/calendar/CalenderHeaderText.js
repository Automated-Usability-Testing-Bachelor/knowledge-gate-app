import React, {useEffect, useState} from "react";
import {Animated, StyleSheet, View} from "react-native";
import {BlackSansHeader2} from "../Texts/Headers";

const CalendarHeaderText = ({date}) => {
    const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
    const animationFadeIn = Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
    });
    useEffect(() => {
        animationFadeIn.reset();
        animationFadeIn.start();
    }, [date]);

    return (
        <View style={styles.container}>
            <BlackSansHeader2 text={date.format("dddd, MMMM Do")}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 20,
        height: "auto",
    },
});

export default CalendarHeaderText;
