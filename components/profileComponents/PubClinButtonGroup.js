import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, View,} from "react-native";
import Colors from "../../constants/Colors";

const PubClinButtonGroup = ({selectedSubjectCallback}) => {
    const [isPubSelected, setIsPubSelected] = useState(true);
    const [isClinSelected, setIsClinSelected] = useState(false);
    useEffect(() => {
        selectedSubjectCallback("pub");
    }, []);
    const onPressPub = () => {
        if (!isPubSelected) {
            setIsPubSelected(true);
            setIsClinSelected(false);
            selectedSubjectCallback("pub");
        }
    };
    const onPressClin = () => {
        if (!isClinSelected) {
            setIsPubSelected(false);
            setIsClinSelected(true);
            selectedSubjectCallback("clin");
        }
    };
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPressPub}>
                <View
                    style={[
                        styles.view,
                        isPubSelected ? styles.selectedView : styles.unselectedView,
                    ]}
                >
                    <Text
                        style={[
                            styles.text,
                            isPubSelected ? styles.selectedText : styles.unselectedText,
                        ]}
                    >
                        Publications
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onPressClin}>
                <View
                    style={[
                        styles.view,
                        isClinSelected ? styles.selectedView : styles.unselectedView,
                    ]}
                >
                    <Text
                        style={[
                            styles.text,
                            isClinSelected ? styles.selectedText : styles.unselectedText,
                        ]}
                    >
                        Clinical Trials
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
    },
    view: {
        flex: 1,

        alignItems: "center",
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: Colors.darkGrey.color,
    },
    selectedView: {
        borderBottomColor: Colors.red.color,
    },
    unselectedView: {
        borderBottomColor: Colors.darkGrey.color,
    },
    text: {
        fontFamily: "Sans-Regular",
        fontSize: 16,
    },
    selectedText: {
        color: Colors.red.color,
    },
    unselectedText: {
        color: Colors.darkGrey.color,
    },
});

export default PubClinButtonGroup;
