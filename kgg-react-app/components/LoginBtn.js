import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const LoginBtn = ({ name }) => {
  const onPress = () => null;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.touchable}
        activeOpacity={0.6}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", paddingHorizontal: "20%" },
  button: {
    backgroundColor: Colors.red.color,
    display: "flex",
    //width: "fit-content",
    flexShrink: 1,
    paddingVertical: "2%",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
  },
  touchable: { borderRadius: 10 },
  text: {
    color: "#FFF",
  },
});

export default LoginBtn;
