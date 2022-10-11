import * as React from "react";
import {StyleSheet, View} from "react-native";
import LogoSVG from "../../assets/logos/Additional_Lockups/Lockup02/KGG_Logo_Lockup_White_RGB-02.svg"

const Logo = () => {
    return (
        <View style={styles.container}>
            <LogoSVG height={200} width={200} fill={"white"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        width: 189,
        height: 211,
    },
});

export default Logo;
