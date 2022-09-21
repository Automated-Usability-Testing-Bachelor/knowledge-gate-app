import * as React from "react";
import { View, StyleSheet } from "react-native";
import InputField from "./InputField";
import LoginBtn from "./LoginBtn";
import InfoText from "./InfoText";
import ForgotPassword from "./ForgotPassword";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <InputField prompt="E-mail" />

      <InputField prompt="Password" />
      <ForgotPassword />
      <LoginBtn name="Login" />
      <InfoText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    //backgroundColor: "yellow",
    justifyContent: "center",
  },
  text: {
    fontSize: 10,
  },
});

export default LoginForm;