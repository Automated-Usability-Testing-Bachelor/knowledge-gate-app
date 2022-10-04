import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Colors from "../constants/Colors";

const Arrow = ({ onPress, backgroundColor, isRight }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.touchable]}
        activeOpacity={0.6}
      >
        <View
          style={[
            styles.button,
            {
              backgroundColor: backgroundColor,
            },
          ]}
        >
          <Image
            source={
              isRight
                ? require("./onboarding/right_arrow.png")
                : require("./onboarding/left_arrow.png")
            }
            style={{ height: 24, width: 24 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "center",
    width: "auto",
    borderColor: "rgba(0,27,114, 0.5)",
    borderStyle: "solid",
    borderWidth: 0.5,
  },
  touchable: {
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: "#FFF",
    lineHeight: 18,
  },
});

export default Arrow;
