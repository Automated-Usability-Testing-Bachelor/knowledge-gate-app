import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import LoginForm from "./LoginForm";
import Colors from "../constants/Colors";

const LoginView = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    //alignItems: "center",
    paddingTop: 25,
    paddingHorizontal: 30,
    //gap: 36,
    //position: "absolute",
    //width: 390,
    //height: 367.7,
    left: 0,
    //top: 461,

    /* KGG Warm Grey */

    backgroundColor: Colors.warmGrey.color,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default LoginView;
