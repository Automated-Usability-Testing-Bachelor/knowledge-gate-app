import React from "react";
import {StyleSheet, View} from "react-native";
import RedButton from "../RedButton";

const LoginBtn = ({name}) => {
    const onPress = () => null;
    return (
        <View style={styles.container}>
            <RedButton name={name} onPress={onPress}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
});

export default LoginBtn;
