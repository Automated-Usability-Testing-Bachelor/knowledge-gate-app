import React from "react";
import {StyleSheet, View} from "react-native";
import RedButton from "../RedButton";
import {useNavigation} from "@react-navigation/native";

const LoginBtn = ({name}) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate("Onboarding");
    };
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
