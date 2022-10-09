import {StyleSheet, Text, View} from "react-native";

function Pill({backgroundColor, borderColor, fontColor, text}: any) {
    return (
        <View style={[
            styles.container,
            {
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
            }]}>
            <Text style={[styles.text, {color: fontColor}]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        // justifyContent: "center",
        alignItems: "center",
        // height: "auto",
        // width: "auto",
        // alignSelf: "flex-start",
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 5,
    },
    text: {
        fontSize: 12,
        fontFamily: "Sans-Regular",
    },
});

export default Pill;