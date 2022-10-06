import React from "react";
import {StyleSheet, View} from "react-native";
import FadeInView from "../animatedComponents/FadeInView";
import {BlackSerifHeader2} from "../Texts/Headers";

const SecondHeader = ({text}) => {
    return (
        <View style={styles.container}>
            <FadeInView duration={2000}>
                <BlackSerifHeader2 text={text}/>
            </FadeInView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});
export default SecondHeader;
