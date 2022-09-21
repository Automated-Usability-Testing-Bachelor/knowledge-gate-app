import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Export Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "row",
    backgroundColor: "green",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 20,
    color: Colors.black.color,
  },
});

export default LoginHeader;
