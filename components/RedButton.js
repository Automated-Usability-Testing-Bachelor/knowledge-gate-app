import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const RedButton = ({ name, icon, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.touchable}
        activeOpacity={0.6}
      >
        <View style={styles.button}>
          {icon ? icon : <View></View>}
          <Text style={styles.text}>{name}</Text>
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
    backgroundColor: Colors.red.color,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
  },
  touchable: { borderRadius: 10 },
  text: {
    color: "#FFF",
    lineHeight: 18,
  },
});

export default RedButton;